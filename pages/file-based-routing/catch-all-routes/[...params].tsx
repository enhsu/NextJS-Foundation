import { useRouter } from "next/router";
import { ReactElement } from "react";
import FileBasedRoutingLayout from "../../../layouts/file-based-routing";
import RootLayout from "../../../layouts/RootLayout";

function CatchAllRoutes() {
  const router = useRouter();
  const { params } = router.query;

  return (
    <div>
      <h2>Catch All Routes</h2>
      <ul>
        {Array.isArray(params) &&
          params.map((param) => <li key={param}>{param}</li>)}
      </ul>
    </div>
  );
}

CatchAllRoutes.getLayout = function (page: ReactElement) {
  return (
    <RootLayout>
      <FileBasedRoutingLayout>{page}</FileBasedRoutingLayout>
    </RootLayout>
  );
};

export default CatchAllRoutes;
