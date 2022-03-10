import { useRouter } from "next/router";
import FileBasedRoutingLayout from "../../../layouts/file-based-routing";

function OptionalCatchRoutes() {
    const router = useRouter()
    const { params } = router.query
    return (
        <div>
            <h2>Optional Catch Routes</h2>
            {
                Array.isArray(params) &&
                <ul>
                    {
                        params.map(param => (
                            <li key={param}>{param}</li>
                        ))
                    }
                </ul>
            }
        </div>
    );
}

OptionalCatchRoutes.Layout = FileBasedRoutingLayout

export default OptionalCatchRoutes;