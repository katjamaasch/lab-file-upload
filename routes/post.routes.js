/* 
the GET route to display the post-form,
the POST route to actually create the post (this route should include file uploading),
the GET route to display the posts and
the GET route to display post-details.
*/

const { Router } = require('express');
const router = new Router();
const Post = require('../models/Post.model');
const multer = require('multer');
const upload = multer({ dest: 'uploads' });

router.get('/', (req, res) => res.render('posts/create-post'));

router.post('/', upload.single('image'), (req, res) => {
  const data = req.body;
  const image = req.file;
  console.log('image: ', image);
  console.log('data: ', data);
  Post.create({
    content: data.content,
    /// creatorId: ,
    picPath: image.path,
    picName: image.originalname
  }).then(result => {
    res.redirect(`${result._id}`);
  });
});

router.get('/index', (req, res, next) => {
  Post.find().then(result => res.render('posts/index', { result }));
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  Post.findById(id).then(result => res.render('posts/detail', { result }));
});

module.exports = router;
