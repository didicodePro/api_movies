import Comment from "../models/comment.model.js";


export const getAllComments = async (req,res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (err) {
    res.json({message: "Erreur serveur", error: err.message})
  }
}
