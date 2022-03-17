import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import PreRenderingLayout from "../../../layouts/pre-rendering";
import RootLayout from "../../../layouts/RootLayout";

type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

type TodoCompletedPropsType = {
  todos: TodoType[];
  state: string;
};

function TodoCompleted({ todos, state }: TodoCompletedPropsType) {
  const router = useRouter();

  return (
    <div>
      <button type="button" onClick={() => router.back()}>
        Previous Page
      </button>
      <h2>Todo State: {state}</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            user: {todo.userId} | {todo.title} | completed:{" "}
            {todo.completed.toString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

TodoCompleted.getLayout = function (page: ReactElement) {
  return (
    <RootLayout>
      <PreRenderingLayout>{page}</PreRenderingLayout>
    </RootLayout>
  );
};

export default TodoCompleted;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos?completed=${params?.todoState}`
  );
  const data = await response.json();

  return {
    props: {
      todos: data,
      state: params?.todoState,
    },
  };
};
