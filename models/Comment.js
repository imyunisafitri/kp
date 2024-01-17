import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  blogId: { type: mongoose.Schema.Types.ObjectId, ref: 'Blog', required: true },
  comment: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
})

export default mongoose?.models?.Comment || mongoose.model("Comment", commentSchema)