import { useRouter } from "next/router";
import FileBasedRoutingLayout from "../../../layouts/file-based-routing";

function CatchAllRoutes() {
    const router = useRouter()
    const { params } = router.query
    
    return (
        <div>
            <h2>Catch All Routes</h2>
            <ul>
                {
                    Array.isArray(params) &&
                    params.map(param => (
                        <li key={param}>{param}</li>
                    ))
                }
            </ul>
        </div>
    );
}

CatchAllRoutes.Layout = FileBasedRoutingLayout

export default CatchAllRoutes;