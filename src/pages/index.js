import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Product from "../components/Product";

export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="max-w-screen-2xl mx-auto">
        {/* banner */}
        <Banner />
        {/* Productfeed */}
        <Product products={products} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );
  return {
    props: {
      products,
    },
  };
}
