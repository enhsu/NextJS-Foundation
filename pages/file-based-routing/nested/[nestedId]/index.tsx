import { useRouter } from "next/router";
import FileBasedRoutingLayout from "../../../../layouts/file-based-routing";

function NestedDynamicRoutes() {
    const router = useRouter()
    const { nestedId } = router.query

    return (
        <div>Nested Dynamic Routes, params - { nestedId }</div>
    );
}

NestedDynamicRoutes.Layout = FileBasedRoutingLayout

export default NestedDynamicRoutes;