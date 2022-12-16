const mongoose = require('mongoose');
const { Schema } = mongoose;
const recipientSchema = require('./Recipient');

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [recipientSchema],
  yes: { type: Number, defualt: 0 },
  no: { type: Number, defualt: 0 },
});

mongoose.model('surveys', surveySchema);
