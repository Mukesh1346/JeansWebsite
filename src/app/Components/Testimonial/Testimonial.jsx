'use client';
import React from 'react';
import './Testimonial.css';
import Image from 'next/image';
import pic1 from  '@/app/Images/user1.jpeg'
import pic2 from  '@/app/Images/user2.jpeg'
import pic3 from  '@/app/Images/user3.jpeg'


const testimonials = [
  {
    name: 'Aarav Mehta',
    title: 'Fashion Blogger',
    image: pic1,
    message:
      'The jeans I bought from this site are simply amazing! Perfect fit, great material, and top-notch style. Highly recommended!',
  },
  {
    name: 'Priya Sharma',
    title: 'Model & Influencer',
    image: pic2,
    message:
      'Absolutely love the denim collection here. It’s trendy, comfy, and affordable. My go-to jeans store now!',
  },
  {
    name: 'Rohit Verma',
    title: 'Creative Director',
    image: pic3,
    message:
      'I’ve tried many brands, but the quality and comfort of these jeans stand out. Fast delivery and premium feel!',
  },
];

export default function Testimonial() {
  return (
    <section  className="testimonial-section" id="Testimonial">
      <div className="overlay">
        <h2 className="testimonial-heading">What Our Customers Say</h2>
        <div className="testimonial-container">
          {testimonials.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <Image src={t.image} alt={t.name} width={80} height={80} className="testimonial-img" />
              <p className="testimonial-message">“{t.message}”</p>
              <h4 className="testimonial-name">{t.name}</h4>
              <span className="testimonial-title">{t.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
