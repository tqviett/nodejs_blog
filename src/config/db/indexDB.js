const mongoose = require('mongoose');
async function connect() {
  try {
    await mongoose.connect(
      'mongodb+srv://vietblogAdmin:viet26022002@cluster0.3u2o5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    );
    console.log('connect done!!');
  } catch (error) {
    console.log('connect fail!!');
  }
}
module.exports = { connect };
