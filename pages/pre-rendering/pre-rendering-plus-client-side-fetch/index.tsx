import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { ReactElement, useState } from "react";
import PreRenderingLayout from "../../../layouts/pre-rendering";
import RootLayout from "../../../layouts/RootLayout";

type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const PreRenderingAndClientSide = ({ todoList }: { todoList: TodoType[] }) => {
  const [todos, setTodos] = useState(todoList);
  const router = useRouter();

  const queryFetch = async (state: "true" | "false" | null = null) => {
    let queryStr = `https://jsonplaceholder.typicode.com/todos`;
    if (state !== null) {
      queryStr += `?completed=${state}`;
    }

    const response = await fetch(queryStr);
    const data = await response.json();
    setTodos(data);
    router.push(
      `/pre-rendering/pre-rendering-plus-client-side-fetch${
        state === null ? "" : `?completed=${state}`
      }`,
      undefined,
      { shallow: true }
    );
  };

  return (
    <>
      <h2>pre-rendering + client-side fetching data</h2>
      <p>handle result with query</p>
      <button onClick={() => queryFetch()}>all</button>
      <button onClick={() => queryFetch("true")}>completed: true</button>
      <button onClick={() => queryFetch("false")}>completed: false</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            user: {todo.userId} | {todo.title} | completed:{" "}
            {todo.completed.toString()}
          </li>
        ))}
      </ul>
    </>
  );
};

PreRenderingAndClientSide.getLayout = function (page: ReactElement) {
  return (
    <RootLayout>
      <PreRenderingLayout>{page}</PreRenderingLayout>
    </RootLayout>
  );
};

export default PreRenderingAndClientSide;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const { completed } = query;
  const queryStr = `https://jsonplaceholder.typicode.com/todos${
    completed === undefined ? "" : `?completed=${completed}`
  }`;
  const response = await fetch(queryStr);
  const data = await response.json();

  return {
    props: {
      todoList: data,
    },
  };
};
