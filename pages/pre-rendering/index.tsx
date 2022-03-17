import { ReactElement } from "react";
import PreRenderingLayout from "../../layouts/pre-rendering";
import RootLayout from "../../layouts/RootLayout";

function PreRendering() {
  return (
    <div>
      <h2>pre-rendering index page</h2>
    </div>
  );
}

PreRendering.getLayout = function (page: ReactElement) {
  return (
    <RootLayout>
      <PreRenderingLayout>{page}</PreRenderingLayout>
    </RootLayout>
  );
};

export default PreRendering;
