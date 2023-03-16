const { Schema, model, Types } = require("mongoose");

const moment = require("moment");

const reactionSchema = new Schema(
  {
    
});

const Thought = model("Thought", thoughtSchema);
module.exports = Thought;
