First, run the development server: npm run dev


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.


Below is the landing page after getting opened:-

<img width="1084" height="848" alt="image" src="https://github.com/user-attachments/assets/db58157e-57a4-4f8f-a7c6-13e50010b358" />

1) **After clicking on CSR products**:-
<img width="887" height="512" alt="image" src="https://github.com/user-attachments/assets/c3b742c8-255f-45f6-b212-f3d270949a3a" />

and after seconds, you will get:-
<img width="857" height="482" alt="image" src="https://github.com/user-attachments/assets/c8472c08-3735-42bb-af8e-bde73556959b" />

**explaination**:-
In the csr-products page, data is fetched on the client side after the page loads in the browser. The server sends a mostly empty HTML page, and then JavaScript runs in the browser to fetch and display the product data. This means users may see a loading state before the data appears, and search engines may not see the content immediately. This approach demonstrates Client-Side Rendering (CSR) in Next.js


2) **After clicking on SSR products**:-
<img width="751" height="549" alt="image" src="https://github.com/user-attachments/assets/a64b660e-aa00-45d8-aa2b-e9e64e7e71f0" />

**explaination**:-
In the ssr-products page, data is fetched on the server before the page is sent to the browser. The server runs the getProducts function (which simulates a delay and fetches product data), builds the complete HTML with the data, and sends the ready-made page to the browser. This means users see the fully rendered content immediately, and search engines can easily index the page.



Q)Create a page that shows:- A visible button - "click me", a counter update on click, add an intentionally heavy client JS to load simulate delay (page renders, button may not respond immediately):-

url link :- http://localhost:3000/js-delay-demo

The js-delay-demo page demonstrates the effect of JavaScript loading or hydration delay in a client-side rendered app. When the page loads, the button is initially disabled, simulating a scenario where JavaScript is still loading or initializing. After a 3-second delay, JavaScript becomes ready, enabling the button and allowing user interaction. This example helps illustrate how users may experience delays in interactivity if JavaScript takes time to load, even after the initial HTML is rendered. This is different from CSR and SSR, as it focuses on the impact of JavaScript readiness on user experience.

Initially , it looks like this:-
<img width="896" height="432" alt="image" src="https://github.com/user-attachments/assets/104a5a2f-3691-4cde-94bc-6a4ef1e9f25c" />


After 3 seconds:-
<img width="1096" height="528" alt="image" src="https://github.com/user-attachments/assets/1bb708cf-4948-4dd9-854b-4924a4d182a9" />



