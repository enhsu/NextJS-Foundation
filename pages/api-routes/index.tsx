import { ReactElement } from "react";
import APIRoutesLayout from "../../layouts/api-routes";
import RootLayout from "../../layouts/RootLayout";

function APIRoutes() {
  return (
    <div>
      <h2>API routes index page</h2>
    </div>
  );
}

APIRoutes.getLayout = function (page: ReactElement) {
  return (
    <RootLayout>
      <APIRoutesLayout>{page}</APIRoutesLayout>
    </RootLayout>
  );
};

export default APIRoutes;
