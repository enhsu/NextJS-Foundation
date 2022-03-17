import Link from "next/link";
import { ReactPropsWithChildren } from "../types/App.type";

function APIRoutesLayout({ children }: ReactPropsWithChildren) {
  return (
    <div>
      <h1>API Routes</h1>
      <nav>
        <Link href="/api-routes/get-request">
          <a>GET request</a>
        </Link>
        <Link href="/api-routes/post-request">
          <a>POST request</a>
        </Link>
        <Link href="/api-routes/delete-request">
          <a>DELETE request</a>
        </Link>
      </nav>
      {children}
    </div>
  );
}

export default APIRoutesLayout;
