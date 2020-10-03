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

router.patch('/post/:id', auth, (req, res) => {
  try {
    if (req.body._id && req.body._id != req.params.id) {
      return res.status(400).json(
          {error: 'ID в запросе не соответствует ID в URL'},
      );
    }

    delete req.body._id;
    req.collection.updateById(
        req.params.id,
        {$set: req.body},
        (e, results) => {
          console.log('boo', e, results);
          res.json(results);
        },
    );
  } catch (e) {
    res.status(500).json({message: 'Что-то пошло не так, попробуйте еще раз.'});
  }
});

module.exports = router;
