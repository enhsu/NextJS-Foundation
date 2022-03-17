import { ReactElement, useState } from "react";
import APIRoutesLayout from "../../../layouts/api-routes";
import RootLayout from "../../../layouts/RootLayout";
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

GetRequest.getLayout = function (page: ReactElement) {
  return (
    <RootLayout>
      <APIRoutesLayout>{page}</APIRoutesLayout>
    </RootLayout>
  );
};

export default GetRequest;
