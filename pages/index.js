import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'; // Import CSS module for styling

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <div className={styles.container}>
      {/* SEO Meta Information */}
      <Head>
        <title>My Shop - Best Products</title>
        <meta name="description" content="Shop the best products online" />
        <meta name="keywords" content="e-commerce, shopping, products, buy online" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Page Header */}
      <header className={styles.header}>
        <h1 className={styles.title}>Welcome to My Shop</h1>
        <h2 className={styles.subtitle}>Best Products Available</h2>
      </header>

      {/* Product Grid */}
      <div className={styles.grid}>
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className={styles.card}>
              {/* Product Image */}
              <Image
                src={product.image}
                alt={`Image of ${product.title}`}
                width={200}
                height={200}
                className={styles.productImage}
              />
              {/* Product Information */}
              <h3 className={styles.productTitle}>{product.title}</h3>
              <p className={styles.price}>${product.price.toFixed(2)}</p>
            </div>
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </div>
  );
}
