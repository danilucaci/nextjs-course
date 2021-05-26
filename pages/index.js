import Link from "next/link";

import random from "../utils/random";

const products = [
  {
    id: random(),
    title: "Zelbupaze",
  },
  {
    id: random(),
    title: "Oplenono",
  },
  {
    id: random(),
    title: "Ogluje",
  },
  {
    id: random(),
    title: "Ivejiduc",
  },
];

function Home() {
  return (
    <main>
      <h1>hello</h1>
      {products.map((product) => (
        <li style={{ display: "block" }} key={product.id}>
          <Link href={`/products/${product.title}`}>{product.title}</Link>
        </li>
      ))}
    </main>
  );
}

export default Home;
