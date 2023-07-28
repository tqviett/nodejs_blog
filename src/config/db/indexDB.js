const mongoose = require('mongoose');
async function connect() {
  try {
    await mongoose.connect('mongodb://127.0.0.1/viet_blog_dev');
    console.log('connect done!!');
  } catch (error) {
    console.log('connect fail!!');
  }
}
module.exports = { connect };
