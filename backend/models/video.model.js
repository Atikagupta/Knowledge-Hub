import mongoose, { Schema, mongo } from "mongoose";

const videoSchema = new Schema({
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

export const Video = mongoose.model("Video", videoSchema);
