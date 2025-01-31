import { model, Schema, Document, Types } from "mongoose";

export interface IPostImage extends Document {
  postid: Types.ObjectId;
  image: string;
}

const PostImageSchema: Schema<IPostImage> = new Schema({
  postid: { type: Schema.Types.ObjectId, ref: "Post", required: true },
  image: { type: String, required: true },
});

export const PostImage = model<IPostImage>("PostImage", PostImageSchema);