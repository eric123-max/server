// menu-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html

const { isValidObjectId } = require("mongoose");

// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'menu';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    breakfast: {type: [mongooseClient.Types.ObjectId], required: true },
    lunch: {type: [mongooseClient.Types.ObjectId], required: true },
    dinner: {type: [mongooseClient.Types.ObjectId], required: true },
    snack: {type: [mongooseClient.Types.ObjectId], required: true },
    date: {type: String, required: true, unique: true, enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]}
  }, {
    timestamps: true
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
  
};

