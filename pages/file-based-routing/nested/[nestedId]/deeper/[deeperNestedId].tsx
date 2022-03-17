import { useRouter } from "next/router";
import { ReactElement } from "react";
import FileBasedRoutingLayout from "../../../../../layouts/file-based-routing";
import RootLayout from "../../../../../layouts/RootLayout";

function DeeperNestedDynamicRoutes() {
  const router = useRouter();
  const { nestedId, deeperNestedId } = router.query;
  return (
    <div>
      Deeper Nested Dynamic Routes, nestedId - {nestedId}, deeperNestedId -{" "}
      {deeperNestedId}
    </div>
  );
}

DeeperNestedDynamicRoutes.getLayout = function (page: ReactElement) {
  return (
    <RootLayout>
      <FileBasedRoutingLayout>{page}</FileBasedRoutingLayout>
    </RootLayout>
  );
};

export default DeeperNestedDynamicRoutes;
