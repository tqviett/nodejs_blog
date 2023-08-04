const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Course = new Schema(
  {
    name: { type: String, default: '' },
    description: { type: String, default: '' },
    image: { type: String },
    videoId: { type: String },
    level: { type: String },
    slug: { type: String, slug: 'name', unique: true },
  },
  {
    timestamps: true,
  },
);
//ADD plugin
Course.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: 'all',
});

mongoose.set('strictQuery', false);
mongoose.plugin(slug);
module.exports = mongoose.model('Course', Course);
