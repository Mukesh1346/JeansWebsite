"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import "./LatestProducts.css";
import Pic1 from "@/app/Images/j1.jpg";
import Pic2 from "@/app/Images/j2.jpg";
import Pic3 from "@/app/Images/j3.jpg";
import Pic4 from "@/app/Images/j4.jpg";
import Pic5 from "@/app/Images/j5.jpg";
import Pic6 from "@/app/Images/j6.jpg";

const jeansData = [
  {
    id: 1,
    title: "Classic Blue Jeans",
    size: "32, 34, 36",
    description: "Timeless blue denim with a slim-fit cut.",
    img: Pic1,
  },
  {
    id: 2,
    title: "Ripped Street Style",
    size: "30, 32, 34",
    description: "Trendy ripped jeans for an edgy look.",
    img: Pic2,
  },
  {
    id: 3,
    title: "Black Slim Jeans",
    size: "32, 34, 36, 38",
    description: "Stylish black jeans perfect for night outs.",
    img: Pic3,
  },
  {
    id: 4,
    title: "Vintage Wash Jeans",
    size: "30, 32, 34",
    description: "Retro faded wash with a comfy fit.",
    img: Pic4,
  },
  {
    id: 5,
    title: "Skinny Fit Denim",
    size: "28, 30, 32",
    description: "Stretchy skinny fit for modern fashion.",
    img: Pic5,
  },
  {
    id: 6,
    title: "Regular Fit Jeans",
    size: "32, 34, 36, 38, 40",
    description: "Everyday jeans with regular fit comfort.",
    img: Pic6,
  },
];

export default function LatestProducts() {
  const [offset, setOffset] = useState(0);
  const [cardWidth, setCardWidth] = useState(250);
  const [visibleCards, setVisibleCards] = useState(4);
  const carouselRef = useRef(null);
  const autoScrollRef = useRef(null);

  useEffect(() => {
    const updateLayout = () => {
      const screenWidth = window.innerWidth;
      const gap = 20;

      if (screenWidth <= 576) {
        setCardWidth((screenWidth - 40 - gap) / 2); // 2 cards on mobile
        setVisibleCards(2);
      } else if (screenWidth <= 768) {
        setCardWidth(220);
        setVisibleCards(3);
      } else if (screenWidth <= 1024) {
        setCardWidth(230);
        setVisibleCards(4);
      } else {
        setCardWidth(250);
        setVisibleCards(5);
      }
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  useEffect(() => {
    const scrollCarousel = () => {
      setOffset((prev) => {
        const maxOffset = (cardWidth + 20) * (jeansData.length - visibleCards);
        const nextOffset = prev + (cardWidth + 20);
        return nextOffset > maxOffset ? 0 : nextOffset;
      });
    };

    autoScrollRef.current = setInterval(scrollCarousel, 3000);
    return () => clearInterval(autoScrollRef.current);
  }, [cardWidth, visibleCards]);

  const nextSlide = () => {
    const maxOffset = (cardWidth + 20) * (jeansData.length - visibleCards);
    setOffset((prev) => Math.min(prev + (cardWidth + 20), maxOffset));
    resetAutoScroll();
  };

  const prevSlide = () => {
    setOffset((prev) => Math.max(prev - (cardWidth + 20), 0));
    resetAutoScroll();
  };

  const resetAutoScroll = () => {
    clearInterval(autoScrollRef.current);
    autoScrollRef.current = setInterval(() => {
      setOffset((prev) => {
        const maxOffset = (cardWidth + 20) * (jeansData.length - visibleCards);
        const nextOffset = prev + (cardWidth + 20);
        return nextOffset > maxOffset ? 0 : nextOffset;
      });
    }, 3000);
  };

  return (
    <section className="latest-products">
      <div className="LatestContainer">
        <div className="section-header ">
          <div className=" LatestTitle  text-center ">
            <h2>Latest Jeans Collection</h2>
            <p>
              Discover premium denim crafted for style, comfort, and durability
              — perfect fits, bold looks, and everyday confidence by Abhinavi
              Creations.
            </p>
          </div>
        </div>
        {/* 
        <Link href="/products" className="view-all">
            View All <span>→</span>
          </Link> */}
        <div className="carousel-container" ref={carouselRef}>
          <div
            className="product-carousel"
            style={{
              transform: `translateX(-${offset}px)`,
              transition: "transform 0.5s ease",
            }}
          >
            {jeansData.map((product) => (
              <div
                key={product.id}
                className="product-card"
                style={{ width: `${cardWidth}px` }}
              >
                <div className="product-inner">
                  <Link
                    href={`/Pages/product-details/${product.id}`}
                    className="product-link"
                  >
                    <div className="image-wrapper">
                      <Image
                        src={product.img}
                        alt={product.title}
                        width={cardWidth}
                        height={300}
                        className="product-image"
                      />
                    </div>
                    <div className="product-details">
                      <h3>{product.title}</h3>
                      <p className="description">{product.description}</p>
                      {/* <p className="size"><strong>Size:</strong> {product.size}</p> */}
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-nav prev" onClick={prevSlide}>
            ‹
          </button>
          <button className="carousel-nav next" onClick={nextSlide}>
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
