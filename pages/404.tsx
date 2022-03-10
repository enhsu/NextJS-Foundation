import { useRouter } from "next/router";

function Custom404() {
    const router = useRouter()
    const handleClick = () => {
        router.back()
    }
    return (
        <div>
            Custoom 404
            <button onClick={handleClick}>Go Previous Page</button>
        </div>
    );
}

export default Custom404;