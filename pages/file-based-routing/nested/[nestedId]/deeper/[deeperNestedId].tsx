import { useRouter } from "next/router";
import FileBasedRoutingLayout from "../../../../../layouts/file-based-routing";

function DeeperNestedDynamicRoutes() {
    const router = useRouter()
    const { nestedId, deeperNestedId } = router.query
    return (
        <div>
            Deeper Nested Dynamic Routes, nestedId - { nestedId }, deeperNestedId - { deeperNestedId }
        </div>
    );
}

DeeperNestedDynamicRoutes.Layout = FileBasedRoutingLayout

export default DeeperNestedDynamicRoutes;