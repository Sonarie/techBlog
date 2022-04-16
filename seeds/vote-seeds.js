const { Vote } = require('../models');

const votedata = [
  {
    user_id: 44,
    post_id: 1
  },
  {
    user_id: 33,
    post_id: 4
  },
  {
    user_id: 33,
    post_id: 2
  },
  {
    user_id: 11,
    post_id: 1
  },
  {
    user_id: 11,
    post_id: 3
  },
  {
    user_id: 33,
    post_id: 1
  },
  {
    user_id: 44,
    post_id: 2
  },
  {
    user_id: 11,
    post_id: 4
  },
  {
    user_id: 22,
    post_id: 4
  },
  {
    user_id: 22,
    post_id: 2
  },

];

const seedVotes = () => Vote.bulkCreate(votedata);

module.exports = seedVotes;
