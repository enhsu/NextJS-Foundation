import { NextApiRequest, NextApiResponse } from "next";
import { comments } from "../../../data/comments";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      return getComments(req, res);
    case "POST":
      return postComment(req, res);
    default:
      // GET
      return getComments(req, res);
  }
}

function getComments(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(comments);
}

function postComment(req: NextApiRequest, res: NextApiResponse) {
  const comment = req.body.comment;
  const newComment = {
    id: Date.now(),
    text: comment,
  };
  comments.push(newComment);

  res.status(201).json(newComment);
}
