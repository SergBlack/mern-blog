const {Router} = require('express');
const Post = require('../models/Post');
const auth = require('../middleware/auth.middleware');
const router = Router();

router.post('/new', auth, async (req, res) => {
  try {
    const {title, content, description, image, technology} = req.body;
    const post = new Post({
      title,
      description,
      content,
      image,
      owner: req.user.userId,
      technology,
    });
    await post.save();
    res.status(201).json({post});
  } catch (e) {
    res.status(500).json({message: 'Что-то пошло не так, попробуйте еще раз.'});
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

router.put('/:id/update', auth, async (req, res) => {
  try {
    const {id} = req.body;
    const post = await Post.findOne({_id: id});
    if (!post) {
      res.status(404)
        .json({message: 'Ошибка. Поста с таким ID не существует.'});
    } else {
      post.content = req.body.content;
    }
    post.save();
    res.json(post);
  } catch (e) {
    res.status(500).json({message: 'Что-то пошло не так, попробуйте еще раз.'});
  }
});

module.exports = router;
