import { useRouter } from "next/router";

function Product() {
  const {
    query: { productId },
  } = useRouter();

  console.log(productId);

  return (
    <main>
      <h1>productId: {productId}</h1>
    </main>
  );
}

export default Product;
