import Link from 'next/link';
import { LayoutPropsType } from '../types/App.type'

function FileBasedRoutingLayout({ children }: LayoutPropsType) {
    return (
        <div>
            <h1>File Based Routing</h1>
            <nav>
                <Link href="/file-based-routing/"><a>File Based Routing Index Page</a></Link>
                <Link href="/file-based-routing/nested"><a>Nested</a></Link>
                <Link href="/file-based-routing/nested/deeper"><a>Nested Deeper</a></Link>
                <Link href="/file-based-routing/nested/1"><a>Nested Dynamic Routes: 1</a></Link>
                <Link href="/file-based-routing/nested/a/deeper/b"><a>Deeper Nested Dynamic Routes: a, b</a></Link>
                <Link href="/file-based-routing/catch-all-routes/a/b/c"><a>Catch All Routes: a, b, c</a></Link>
                <Link href="/file-based-routing/optional-catch-all-routes"><a>Optional Catch All Routes: no params</a></Link>
                <Link href="/file-based-routing/optional-catch-all-routes/a/b/c"><a>Oprional Catch All Routes: a, b, c</a></Link>
            </nav>
            { children }
        </div>
    );
}

export default FileBasedRoutingLayout;