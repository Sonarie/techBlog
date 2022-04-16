const { Post } = require('../models');

const postdata = [
  {
    title: 'A Beginners Guide to Handlebars',
    post_url: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.pnghttps://www.sitepoint.com/a-beginners-guide-to-handlebars/',
    user_id: 1
  },
  {
    title: 'Girls Who Code',
    post_url: 'https://girlswhocode.com/news/girls-who-code-announces-new-work-prep-initiative-designed-to-give-college-aged-women-pathways-into-the-tech-industry',
    user_id: 2
  },
  {
    title: 'How GitHub does take home technical interviews',
    post_url: 'https://github.blog/2022-03-31-how-github-does-take-home-technical-interviews/',
    user_id: 3
  },
  {
    title: '73 Awesome NPM Packages for Productivity',
    post_url: 'https://javascript.plainenglish.io/73-awesome-npm-packages-for-productivity-c8340b373e57',
    user_id: 4
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
