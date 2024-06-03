import mongoose, { Schema } from "mongoose";

const noteSchema = new Schema({
  title: {
    type: String,
  },
  link: {
    type: String,
  },
  course: {
    type: String,
  },
});

export const Note = mongoose.model("Note", noteSchema);
