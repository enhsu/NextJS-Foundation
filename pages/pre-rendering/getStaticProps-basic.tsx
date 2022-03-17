import { ReactElement } from "react";
import User from "../../components/pre-rendering/user";
import PreRenderingLayout from "../../layouts/pre-rendering";
import RootLayout from "../../layouts/RootLayout";

function GetStaticPropsBasic({ users }: { users: any[] }) {
  return (
    <div>
      <h2>getStaticProps Basic</h2>
      <h3>users list</h3>
      <p>
        data resource:{" "}
        <a href="https://jsonplaceholder.typicode.com/">JSONPlaceholder</a>
      </p>
      {users && users.length > 0 && (
        <ul>
          {users.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </ul>
      )}
    </div>
  );
}

GetStaticPropsBasic.getLayout = function (page: ReactElement) {
  return (
    <RootLayout>
      <PreRenderingLayout>{page}</PreRenderingLayout>
    </RootLayout>
  );
};

export default GetStaticPropsBasic;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: {
      users: data,
    },
  };
}
