const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const Comment = require("../models/Comment");

//CREATE COMMENT

router.post("/:id", async (req, res) => {
  try{
    const newComment = new Comment({
      desc: req.body.desc,
      username: req.body.username,
      postID: req.params.id,
    });
    const savedComment = await newComment.save();
    res.status(200).json(savedComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
  let allcomments;
  //const posttitle = req.body.posttitle;
  allcomments = await Comment.find();
    res.status(200).json(allcomments);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {   //id = postid
  try {
  let allcomments;
  //const posttitle = req.body.posttitle;
  allcomments = await Comment.find({
    postID: req.params.id
  });
    res.status(200).json(allcomments);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {   //id = CommentID
  try {
    let specificComment;
    specificComment = await Comment.findById(req.params.id);
    // console.log(specificComment);
    await Comment.findByIdAndDelete(req.params.id);
    res.status(200).json("Comment Deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;