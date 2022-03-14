import { useEffect, useState } from "react";
import { CommentType } from "../../../types/Comment.type";

function DeleteRequest() {
  const [comments, setComments] = useState<CommentType[]>([]);

  useEffect(() => {
    getComments();
  }, []);

  const getComments = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();

    setComments(data);
  };

  const deleteComment = async (commentId: number) => {
    const response = await fetch(`/api/comments/${commentId}`, {
      method: "DELETE",
    });
    const data = await response;

    console.log(data);
    getComments();
  };

  return (
    <ul>
      {comments.length > 0 &&
        comments.map((comment) => (
          <li key={comment.id}>
            {comment.text}
            <button onClick={() => deleteComment(comment.id)}>DELETE</button>
          </li>
        ))}
    </ul>
  );
}

export default DeleteRequest;
