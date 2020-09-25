const {Schema, model, Types} = require('mongoose');
const schema = new Schema({
  title: {type: String, required: true},
  description: {type: String, required: true},
  content: {type: String, required: true},
  date: {type: Date, default: Date.now},
  owner: {type: Types.ObjectId, ref: 'User'},
  comments: [{body: {type: String}, type: Date}],
  reads: {type: Number, default: 0},
  image: {type: String},
});

module.exports = model('Post', schema);

