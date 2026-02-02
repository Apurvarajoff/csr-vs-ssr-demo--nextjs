import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: 40 }}>
      <h1>CSR vs SSR Demo</h1>

      <ul>
        <li>
          <Link href="/csr-products">Client Side Rendering (CSR)</Link>
        </li>
        <li>
          <Link href="/ssr-products">Server Side Rendering (SSR)</Link>
        </li>
      </ul>
    </main>
  );
}
