"use client";
//What happening here is that CSR fetches data after the page reaches the browser and 
// Server sends almost empty HTML 
//JavaScript runs in the browser

import { useEffect, useState } from "react";
import { products } from "@/data/products";

export default function CSRProducts() {
  const [data, setData] = useState<typeof products | null>(null);
  // console.log("CSR: Component rendering on SERVER",data);
  useEffect(() => {
    console.log(" CSR: JavaScript running in browser");

    setTimeout(() => {
      setData(products);
    }, 3000);
  }, []);

  return (
    <main style={{ padding: 40 }}>
      <h1>CSR Products</h1>

      {!data && (
        <div>
          <p> Fetching products on CLIENT...</p>
          <p>(Page loaded without data)</p>
        </div>
      )}

      {data &&
        data.map((p) => (
          <div key={p.id}>
            <h3>{p.name}</h3>
            <p>{p.price}</p>
          </div>
        ))}
    </main>
  );
}
