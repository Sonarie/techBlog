const { Comment } = require("../models");

const commentdata = [
  {
    comment_text: "very useful!",
    user_id: 44,
    post_id: 1,
  },
  {
    comment_text: "thanks for sharing",
    user_id: 33,
    post_id: 4,
  },
  {
    comment_text: "Excellent",
    user_id: 33,
    post_id: 2,
  },
  {
    comment_text: "I do not think this is accurate",
    user_id: 11,
    post_id: 1,
  },
  {
    comment_text: "Some useful stuff. I will have to share!",
    user_id: 11,
    post_id: 3,
  },
  {
    comment_text: "cool",
    user_id: 33,
    post_id: 1,
  },
  {
    comment_text: "Can this be marked sharable please",
    user_id: 44,
    post_id: 2,
  },
  {
    comment_text: "my friends think the same thing",
    user_id: 11,
    post_id: 4,
  },
  {
    comment_text: "this article is old",
    user_id: 22,
    post_id: 14,
  },
  {
    comment_text: "Awesome",
    user_id: 22,
    post_id: 2,
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
