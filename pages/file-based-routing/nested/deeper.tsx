import FileBasedRoutingLayout from "../../../layouts/file-based-routing";

function Deeper() {
    return (
        <div>Nested Deeper</div>
    );
}

Deeper.Layout = FileBasedRoutingLayout

export default Deeper;