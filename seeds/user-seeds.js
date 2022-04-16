const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'egorpliashevich',
    email: 'egor0@ymail.com',
    password: 'password123'
  },
  {
    username: 'luciluter',
    email: 'luci@ymail.com',
    password: 'password123'
  },
  {
    username: 'empresswatson',
    email: 'empress@ymail.com',
    password: 'password123'
  },
  {
    username: 'sonjawatson',
    email: 'sonja@ymail.com',
    password: 'password123'
  },
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
