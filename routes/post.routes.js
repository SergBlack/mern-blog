const { Router } = require('express');
const config = require('config');
const Post = require('../models/Post');
const auth = require('../middleware/auth.middleware');
const router = Router();

router.post('/new', auth, async (req, res) => {
    try {
      const { title, content } = req.body;
      const post = new Post({
        title, content, owner: req.user.userId
      });
      await post.save();
      res.status(201).json({ post })
    }
    catch (e) {
      res.status(500).json({ message: 'Что-то пошло не так, попробуйте еще раз.' });
    }
  }
);

router.get('/all', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте еще раз.' });
  }
});

module.exports = router;