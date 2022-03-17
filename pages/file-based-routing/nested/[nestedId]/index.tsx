import { useRouter } from "next/router";
import { ReactElement } from "react";
import FileBasedRoutingLayout from "../../../../layouts/file-based-routing";
import RootLayout from "../../../../layouts/RootLayout";

function NestedDynamicRoutes() {
  const router = useRouter();
  const { nestedId } = router.query;

  return <div>Nested Dynamic Routes, params - {nestedId}</div>;
}

NestedDynamicRoutes.getLayout = function (page: ReactElement) {
  return (
    <RootLayout>
      <FileBasedRoutingLayout>{page}</FileBasedRoutingLayout>
    </RootLayout>
  );
};

export default NestedDynamicRoutes;
