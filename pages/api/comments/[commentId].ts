import { NextApiRequest, NextApiResponse } from "next";
import { comments } from "./../../../data/comments";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      return getComment(req, res);
    case "DELETE":
      return deleteComment(req, res);
    default:
      return getComment(req, res);
  }
}

function getComment(req: NextApiRequest, res: NextApiResponse) {
  const { commentId } = req.query;
  const comment = comments.find(
    (comment) => comment.id === parseInt(commentId as string)
  );

  res.status(200).json(comment);
}

function deleteComment(req: NextApiRequest, res: NextApiResponse) {
  const { commentId } = req.query;
  const deletedComment = comments.find((comment) => {
    return comment.id === parseInt(commentId as string);
  });
  const deletedIdx = comments.findIndex((comment) => {
    return comment.id === parseInt(commentId as string);
  });
  comments.splice(deletedIdx, 1);

  res.status(200).json(deletedComment);
}
