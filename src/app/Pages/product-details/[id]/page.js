'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import '../../../Components/Product/ProductDetail.css';

const Page = () => {
  const { id } = useParams();

  const dummyProducts = [
    {
      id: 0,
      title: 'Classic Blue Jeans',
      description: 'Premium blue denim jeans with comfort stretch. Tailored for urban lifestyle.',
      price: 1299,
      image: '/j1.jpg',
      sizes: ['28', '30', '32', '34', '36'],
    },
    {
      id: 1,
      title: 'Ripped Skinny Jeans',
      description: 'Trendy skinny-fit ripped jeans designed for bold fashion statements.',
      price: 1599,
      image: '/j2.jpg',
      sizes: ['28', '30', '32', '34'],
    },
    {
      id: 2,
      title: 'Baggie Jeans',
      description: 'Trendy  ripped jeans designed for bold fashion statements.',
      price: 1599,
      image: '/j6.jpg',
      sizes: [ '30', '32', '34'],
    },
    {
      id: 3,
      title: 'Ripped Skinny Jeans',
      description: 'Trendy skinny-fit ripped jeans designed for bold fashion statements.',
      price: 1599,
      image: '/j4.jpg',
      sizes: ['28', '30', '32', '34'],
    },
    {
      id: 4,
      title: 'Ripped Skinny Jeans',
      description: 'Trendy skinny-fit ripped jeans designed for bold fashion statements.',
      price: 1599,
      image: '/j5.jpg',
      sizes: ['28', '30', '32', '34'],
    },
    {
      id: 5,
      title: 'Ripped Skinny Jeans',
      description: 'Trendy skinny-fit ripped jeans designed for bold fashion statements.',
      price: 1599,
      image: '/j1.jpg',
      sizes: ['28', '30', '32', '34'],
    },
    {
      id: 6,
      title: 'Ripped Skinny Jeans',
      description: 'Trendy skinny-fit ripped jeans designed for bold fashion statements.',
      price: 1599,
      image: '/j2.jpg',
      sizes: ['28', '30', '32', '34'],
    },
    {
      id: 7,
      title: 'Ripped Skinny Jeans',
      description: 'Trendy skinny-fit ripped jeans designed for bold fashion statements.',
      price: 1599,
      image: '/j3.jpg',
      sizes: ['28', '30', '32', '34'],
    },
    {
      id: 8,
      title: 'Ripped Skinny Jeans',
      description: 'Trendy skinny-fit ripped jeans designed for bold fashion statements.',
      price: 1599,
      image: '/j4.jpg',
      sizes: ['28', '30', '32', '34'],
    },
    {
      id: 9,
      title: 'Ripped Skinny Jeans',
      description: 'Trendy skinny-fit ripped jeans designed for bold fashion statements.',
      price: 1599,
      image: '/j5.jpg',
      sizes: ['28', '30', '32', '34'],
    },





  ];

  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const found = dummyProducts.find((p) => p.id === Number(id));
    if (found) {
      setProduct(found);
      setMainImage(found.image);
      setSelectedSize(found.sizes[0]);
    }
  }, [id]);

  if (!product) return <div className="container py-5">Product not found</div>;

  return (
    <div className="container py-5">
      <div className="row g-4 align-items-center">
        {/* Image */}
        <div className="col-md-6 text-center">
          <Image
            src={mainImage}
            alt={product.title}
            width={450}
            height={500}
            className="img-fluid rounded shadow-sm main-product-image"
          />
          <div className="d-flex justify-content-center gap-2 mt-3 flex-wrap">
            {dummyProducts.map((item, i) => (
              <div
                key={i}
                onClick={() => setMainImage(item.image)}
                className={`border rounded p-1 thumb-image ${item.image === mainImage ? 'border-danger' : ''}`}
                style={{ cursor: 'pointer' }}
              >
                <Image src={item.image} alt="thumb" width={60} height={60} />
              </div>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="col-md-6">
          <h2 className="fw-bold mb-2">{product.title}</h2>
          {/* <h4 className="text-danger mb-3">₹{product.price}</h4> */}
          <p className="text-secondary">{product.description}</p>

          <div className="mb-3">
            <label className="form-label fw-semibold">Select Size</label>
            <select
              className="form-select w-50"
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
            >
              {product.sizes.map((size) => (
                <option key={size} value={size}>
                  Size {size}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Quantity</label>
            <input
              type="number"
              min={1}
              value={quantity}
              className="form-control w-25"
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
          </div>

          {/* <button className="btn btn-dark px-4 py-2 mt-2 shadow-sm">
            <i className="fas fa-shopping-cart me-2"></i>Order Now
          </button> */}

          <div className="mt-4 border-start ps-3">
            <h6 className="text-uppercase text-muted mb-2">Product Info</h6>
            <ul className="list-unstyled small">
              <li><strong>SKU:</strong> JNS-{product.id + 1010}</li>
              <li><strong>Material:</strong> Cotton + Stretch Denim</li>
              <li><strong>Fit:</strong> Slim / Regular</li>
              <li><strong>Origin:</strong> Made in India</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
