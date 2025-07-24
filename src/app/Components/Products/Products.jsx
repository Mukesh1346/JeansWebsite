'use client';
import './productpage.css';

import Image from 'next/image';
import Link from 'next/link';

const dummyProducts = [
  {
    id: 1,
    title: 'Classic T-Shirt',
    desc: 'High-quality cotton jeans',
    price: 1029,
    image: '/j1.jpg',
  },
  {
    id: 2,
    title: 'Summer Shirt',
    desc: 'Light and breezy ',
    price: 945,
    image: '/j2.jpg',
  },
  {
    id: 3,
    title: 'Denim Jacket',
    desc: 'Stylish and warm',
    price: 1289,
    image:'/j4.jpg',
  },
  {
    id: 4,
    title: 'Denim Jacket',
    desc: 'Perfect for all weather.',
    price: 1289,
    image:'/j5.jpg',
  },
  {
    id: 5,
    title: 'Denim Jacket',
    desc: 'Durable jeans with perfect size',
    price: 1289,
    image:'/j6.jpg',
  },
  {
    id: 6,
    title: 'Denim Jacket',
    desc: 'Durable jeans with perfect size',
    price: 1289,
    image:'/j3.jpg',
  },
  {
    id: 7,
    title: 'Denim Jacket',
    desc: 'Durable jeans with perfect size',
    price: 1289,
    image:'/j2.jpg',
  },
  {
    id: 8,
    title: 'Denim Jacket',
    desc: 'Durable jeans with perfect size',
    price: 1289,
    image:'/j1.jpg',
  }
];

export default function ProductPage() {
  return (
    <section id="Product">
      <main className="Prductsmain">
        <div className="ProductsTitle">
          <h2>Where Jeans Speak Your Personality</h2>
          <p>Reimagine your wardrobe with jeans built to last — tailored to perfection, rich in style, and made for movement.</p>
        </div>
        <div className="productsWrapper">
          {dummyProducts.map((product, index) => (
            <Link className="text-decoration-none" href={`Pages/product-details/${index}`} key={index}>
              <div className="product">
                <figure>
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={300}
                    height={200}
                    className="productImage"
                  />
                </figure>

                <div className="productDescription">
                  <div className="info">
                    <h1>{product.title}</h1>
                    <p>{product.desc}</p>
                  </div>
                </div>

                <div className="productSidebar">
                  <button className="buy"></button>
                  <button className="infoBtn"><span></span></button>
                  <button className="size"><span></span></button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </section>
  );
}
