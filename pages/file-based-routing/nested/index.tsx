import { ReactElement } from "react";
import FileBasedRoutingLayout from "../../../layouts/file-based-routing";
import RootLayout from "../../../layouts/RootLayout";

function Nested() {
  return <div>Nested Page</div>;
}

Nested.getLayout = function (page: ReactElement) {
  return (
    <RootLayout>
      <FileBasedRoutingLayout>{page}</FileBasedRoutingLayout>
    </RootLayout>
  );
};

export default Nested;
