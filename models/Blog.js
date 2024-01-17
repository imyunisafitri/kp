import mongoose from "mongoose";

const { Schema } = mongoose;

const blogSchema = new Schema(
  {
    title: {
      type: String
    },
    desc: {
      type: String,
    },
    img: {
      type: String,
    },
    category: {
      type: String,
  },
  content: {
    type: String,
  },
    username: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose?.models?.Blog || mongoose.model("Blog", blogSchema);
