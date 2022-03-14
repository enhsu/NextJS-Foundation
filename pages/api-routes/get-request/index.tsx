import { useState } from "react";
import APIRoutesLayout from "../../../layouts/api-routes";
import type { CommentType } from "./../../../types/Comment.type";

function GetRequest() {
  const [comments, setComments] = useState<CommentType[]>([]);

  const getComments = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();

    setComments(data);
  };

  return (
    <>
      <button onClick={() => getComments()}>Get Comments</button>
      <ul>
        {comments.length > 0 &&
          comments.map((comment) => <li key={comment.id}>{comment.text}</li>)}
      </ul>
    </>
  );
}

GetRequest.Layout = APIRoutesLayout;

export default GetRequest;
