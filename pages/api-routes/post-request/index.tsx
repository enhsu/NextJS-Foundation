import { ReactElement, useEffect, useState } from "react";
import APIRoutesLayout from "../../../layouts/api-routes";
import RootLayout from "../../../layouts/RootLayout";
import { CommentType } from "../../../types/Comment.type";

function PostRequest() {
  const [comments, setComments] = useState<CommentType[]>([]);
  const [comment, setComment] = useState("");

  useEffect(() => {
    getComments();
  }, []);

  const getComments = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();

    setComments(data);
  };

  const submitComment = async () => {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    console.log(data);
    setComment("");
    getComments();
  };

  return (
    <>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={() => submitComment()}>Post Comment</button>
      {comments.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {comments.map((commentItem) => (
            <li key={commentItem.id}>{commentItem.text}</li>
          ))}
        </ul>
      )}
    </>
  );
}

PostRequest.getLayout = function (page: ReactElement) {
  return (
    <RootLayout>
      <APIRoutesLayout>{page}</APIRoutesLayout>
    </RootLayout>
  );
};

export default PostRequest;
