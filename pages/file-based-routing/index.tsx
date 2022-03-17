// import FileBasedRoutingLayout from "../../layouts/file-based-routing";

import { ReactElement } from "react";
import RootLayout from "../../layouts/RootLayout";
import FileBasedRoutingLayout from "../../layouts/file-based-routing";

// function FileBasedRouting({}) {
//     return (
//         <div>
//             Index
//         </div>
//     );
// }

// FileBasedRouting.Layout = FileBasedRoutingLayout;

// export default FileBasedRouting;

function FileBasedRouting() {
  return <div>Index</div>;
}

FileBasedRouting.getLayout = function (page: ReactElement) {
  return (
    <RootLayout>
      <FileBasedRoutingLayout>{page}</FileBasedRoutingLayout>
    </RootLayout>
  );
};

export default FileBasedRouting;
