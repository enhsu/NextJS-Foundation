import FileBasedRoutingLayout from "../../../layouts/file-based-routing";

function Nested() {
    return (
        <div>Nested Page</div>
    );
}

Nested.Layout = FileBasedRoutingLayout

export default Nested;