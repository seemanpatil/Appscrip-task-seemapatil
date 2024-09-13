import Image from 'next/image';
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  return (
    <div className={styles.card}>
      <Image src={product.image} alt={product.title} width={200} height={200} />
      <h2>{product.title}</h2>
      <p>${product.price}</p>
    </div>
  );
};

export default ProductCard;
