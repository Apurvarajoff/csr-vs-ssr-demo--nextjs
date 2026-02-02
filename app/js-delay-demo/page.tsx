//Run on this port : - http://localhost:3000/js-delay-demo
"use client";

import { useEffect, useState } from "react";

export default function JSDelayDemo() {
  const [count, setCount] = useState(0);
  const [jsReady, setJsReady] = useState(false);

  useEffect(() => {
    console.log(" Simulating JS load...");

    // simulate heavy JS loading / hydration delay
    setTimeout(() => {
      setJsReady(true);
      console.log("✅ JS is now ready");
    }, 3000);
  }, []);

  return (
    <main style={{ padding: 40 }}>
      <h1>JS Delay Interaction Demo</h1>

      <p>Counter: {count}</p>

      <button
        onClick={() => { 
            if (!jsReady) return;
            setCount((prev) => prev + 1);
        }}
        style={{padding: "10px 20px",fontSize: 16,cursor: jsReady ? "pointer" : "not-allowed",opacity: jsReady ? 1 : 0.5}}>
        Click me
      </button>

      {!jsReady && (
        <p style={{ marginTop: 10 }}>
          ⏳ JavaScript loading… button not active yet
        </p>
      )}

      {jsReady && (
        <p style={{ marginTop: 10 }}>
          ✅ JavaScript ready — button is interactive
        </p>
      )}
    </main>
  );
}
