'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import icon1 from '@/app/Images/icon1.png'
import icon2 from '@/app/Images/icon2.png'
import icon3 from '@/app/Images/icon3.png'
import icon4 from '@/app/Images/icon4.png'
import './purpose.css'

export default function Purpose() {
  const Quality = [
    { id: 1, title: "Experience And Expertise", image: icon1, number: 32, suffix: " YEARS", subtitle: "Retailers, Traders And Wholesalers" },
    { id: 2, title: "Trusted Network", image: icon2, number: 100000, suffix: "+", subtitle: "Retailers, Traders And Wholesalers" },
    { id: 3, title: "Product Variety", image: icon3, number: 30, suffix: "+", subtitle: "Retailers, Traders And Wholesalers" },
    { id: 4, title: "Happy Clients", image: icon4, number: 1000000, suffix: " LACS", subtitle: "Retailers, Traders And Wholesalers" },
  ];

  const [counts, setCounts] = useState(Quality.map(() => 0));
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      const intervals = Quality.map((item, index) => {
        let start = 0;
        const end = item.number;
        const increment = Math.ceil(end / 100); // adjust speed
        const duration = 2000; // 2 seconds
        const stepTime = duration / (end / increment);

        return setInterval(() => {
          start += increment;
          if (start >= end) {
            start = end;
            clearInterval(intervals[index]);
          }
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = start;
            return newCounts;
          });
        }, stepTime);
      });

      return () => intervals.forEach(clearInterval);
    }
  }, [inView]);

  return (
    <section>
      <div className='container' ref={ref}>
        <div className="PurposeHeading text-center">
          <h3>Why Choose Anibhavi Creations?</h3>
          <p>Anibhavi Creations stands out with trendsetting designs, premium quality fabrics, and unparalleled craftsmanship.</p>
        </div>

        <div className='purposeMainSec'>
          {Quality.map((item, index) => (
            <div className='cardSection' key={index}>
              <div>
                <Image src={item.image} alt="image" className='PurposeImg' width={50} height={50} />
              </div>
              <div className="cardContent">
                <h4>{item.title}</h4>
                <h3>{counts[index].toLocaleString()} {item.suffix}</h3>
                <p>{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
