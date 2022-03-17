import Link from "next/link";

function RootNavbar() {
  return (
    <nav>
      <Link href="/">
        <a>Next.js Home</a>
      </Link>
      <Link href="/file-based-routing">
        <a>File Based Routing</a>
      </Link>
      <Link href="/pre-rendering">
        <a>Pre-rendering</a>
      </Link>
      <Link href="/api-routes">
        <a>API routes</a>
      </Link>
      <Link href="/auth">
        <a>Auth</a>
      </Link>
    </nav>
  );
}

export default RootNavbar;
