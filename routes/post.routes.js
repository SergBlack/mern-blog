const {Router} = require('express');
const Post = require('../models/Post');
const auth = require('../middleware/auth.middleware');
const router = Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'public/');
  },
  filename: function(req, file, cb) {
    cb(null, 'IMAGE-' + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
});

router.post(
    '/new',
    auth,
    upload.single('image'),
    async (req, res) => {
      try {
        const {title, content, description, technology} = req.body;
        const post = new Post({
          title,
          description,
          content,
          image: {
            data: fs.readFileSync(req.file.path),
            contentType: req.file.mimetype,
          },
          owner: req.user.userId,
          technology,
        });
        await post.save();
        res.status(201).json({post});
      } catch (e) {
        res.status(500).json(
            {message: 'Что-то пошло не так, попробуйте еще раз.'},
        );
      }
    },
);

router.get('/all', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (e) {
    res.status(500).json({message: 'Что-то пошло не так, попробуйте еще раз.'});
  }
});

router.get('/:id', async (req, res) => {
  try {
    const {id} = req.params;
    const post = await Post.findOne({_id: id});
    if (!post) {
      res.status(404)
          .json({message: 'Ошибка. Поста с таким ID не существует.'});
    } else {
      res.json(post);
    }
  } catch (e) {
    res.status(500).json({message: 'Что-то пошло не так, попробуйте еще раз.'});
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const {id} = req.params;
    await Post.deleteOne(
        {_id: id},
        (err) => {
          console.log(err);
        },
    );
    res.status(201).json({id, message: 'Пост успешно удален'});
  } catch (e) {
    res.status(500).json({message: 'Что-то пошло не так, попробуйте еще раз.'});
  }
});

router.put('/update/:id', auth, upload.single('image'), async (req, res) => {
  try {
    const {_id, title, content, description, technology} = req.body;
    const post = await Post.findOne(_id);
    if (!post) {
      res.status(404)
          .json({message: 'Ошибка. Поста с таким ID не существует.'});
    } else {
      post.title = title;
      post.description = description;
      post.content = content;
      post.image.data = fs.readFileSync(req.file.path);
      post.image.contentType = req.file.mimetype;
      post.technology = technology;
    }
    post.save();
    res.json({post});
  } catch (e) {
    console.log(e);
    res.status(500).json({message: 'Что-то пошло не так, попробуйте еще раз.'});
  }
});

module.exports = router;
