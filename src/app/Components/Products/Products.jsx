'use client';
import './productpage.css';

import Image from 'next/image';
import Link from 'next/link';
import img1 from '@/app/Images/j1.jpg'
import img2 from '@/app/Images/j2.jpg'
import img3 from '@/app/Images/j3.jpg'
import img4 from '@/app/Images/j4.jpg'
import img5 from '@/app/Images/j5.jpg'
import img6 from '@/app/Images/j6.jpg'


const dummyProducts = [
  {
    id: 1,
    title: 'Classic T-Shirt',
    desc: 'High-quality cotton jeans',
    price: 1029,
    image: img1 ,
  },
  {
    id: 2,
    title: 'Summer Shirt',
    desc: 'Light and breezy ',
    price: 945,
    image: img2,
  },
  {
    id: 3,
    title: 'Denim Jacket',
    desc: 'Stylish and warm',
    price: 1289,
    image: img3,
  },
  {
    id: 4,
    title: 'Denim Jacket',
    desc: 'Perfect for all weather.',
    price: 1289,
    image: img4,
  },
  {
    id: 5,
    title: 'Denim Jacket',
    desc: 'Durable jeans with perfect size',
    price: 1289,
    image: img5,
  },
  {
    id: 6,
    title: 'Denim Jacket',
    desc: 'Durable jeans with perfect size',
    price: 1289,
    image: img6,
  },
  {
    id: 7,
    title: 'Denim Jacket',
    desc: 'Durable jeans with perfect size',
    price: 1289,
    image: img1,
  },
  {
    id: 8,
    title: 'Denim Jacket',
    desc: 'Durable jeans with perfect size',
    price: 1289,
    image: img2,
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
              <div className="product ">
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
