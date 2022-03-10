import Link from "next/link";
import { LayoutPropsType } from "../types/App.type";

function PreRenderingLayout({ children }: LayoutPropsType) {
    return (
        <div>
            <h1>Pre-Rendering</h1>
            <nav>
                <Link href="/pre-rendering/getStaticProps-basic"><a>getStaticProps Basic</a></Link>
            </nav>
            { children }
        </div>
    );
}

export default PreRenderingLayout;