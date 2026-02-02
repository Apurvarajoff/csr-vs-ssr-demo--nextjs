import { products } from "@/data/products";
//SSR fetches data before the page is sent to the browser.
//Server builds the full HTML
//Browser receives ready-made page

async function getProducts() {
  console.log("🟢 SSR: Fetching data on SERVER");

  await new Promise((res) => setTimeout(res, 3000));
  return products;
}

export default async function SSRProducts() {
  const data = await getProducts();

  return (
    <main style={{ padding: 40 }}>
      <h1>SSR Products</h1>
      <p>✅ Data rendered on SERVER before page load</p>

      {data.map((p) => (
        <div key={p.id}>
          <h3>{p.name}</h3>
          <p>{p.price}</p>
        </div>
      ))}
    </main>
  );
}
