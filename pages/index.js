// pages/index.js
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default function Home({ products }) {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (product) => {
    if (!wishlist.includes(product)) {
      setWishlist([...wishlist, product]);
    }
  };

  return (
    <>
      <Head>
        <title>My Shop - Best Products</title>
        <meta name="description" content="Shop the best products online" />
        <meta name="keywords" content="e-commerce, shopping, products, buy online" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <header>
        <div className="logo">
          <h1>My Shop</h1>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search for products..." />
        </div>
      </header>

      <aside className="sidebar">
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Kids</a>
        <a href="#">Sale</a>
        <a href="#">Contact Us</a>
        <a href="#">Wishlist ({wishlist.length})</a>
      </aside>

      <main>
        <h1>Featured Products</h1>
        <div className="grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <Image
                src={product.image}
                alt={product.title}
                width={150}
                height={150}
              />
              <h2>{product.title}</h2>
              <p>{product.description.slice(0, 50)}...</p>
              <p className="price">${product.price}</p>
              <button className="add-to-cart-btn">Add to Cart</button>
              <button
                className="wishlist-btn"
                onClick={() => addToWishlist(product)}
              >
                <FontAwesomeIcon icon={faHeart} className="heart-icon" />
              </button>
            </div>
          ))}
        </div>
      </main>

      <footer>
        <p>© 2024 My Shop. All rights reserved.</p>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Contact Us</a>
      </footer>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
}
