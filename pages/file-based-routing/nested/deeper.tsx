import { ReactElement } from "react";
import FileBasedRoutingLayout from "../../../layouts/file-based-routing";
import RootLayout from "../../../layouts/RootLayout";

function Deeper() {
  return <div>Nested Deeper</div>;
}

Deeper.getLayout = function (page: ReactElement) {
  return (
    <RootLayout>
      <FileBasedRoutingLayout>{page}</FileBasedRoutingLayout>
    </RootLayout>
  );
};

export default Deeper;
