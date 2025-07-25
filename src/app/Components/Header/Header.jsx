'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './Header.css';
import Pic1 from '@/app/Images/jeans.png'
import Pic2 from '@/app/Images/instagram.png'
import Pic3 from '@/app/Images/twitter.png'
import Pic4 from '@/app/Images/youtube.png'
// import Pic5 from '@/app/Images/logo.png'
import { motion, useInView } from 'framer-motion';

export default function Header() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="Header-main "
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left side: Text with image overlaid */}
          <div className="col-md-6 position-relative text-center one">
            <h1 className="bgText fadeInText">
              FASHI<br />ONUP
              <br />TODATE
              <br />HERE
            </h1>
            <Image
              src={Pic1}
              alt="Overlay Dress"
              width={450}
              height={450}
              className="overlayImg smoothDropIn"
            />
          </div>

          <div className="col-md-6 two">
            <div className="HeaderRightSec">
              <h2 className="mb-3 HeaderMainTitle">SPECIAL</h2>
              <h2 className="HeaderMainSubtitle">Brands Fashion</h2>
              <section>
                <p>
                  Cloths connect hearts across the world. Our platform nurtures meaningful
                  relationships with compassion, trust, and respect at the core.
                </p>
              </section>
              <div className="d-flex">
                <input type="text" className="form-control w-25" placeholder="Write something..." />
                <button className="btn-custom  ms-3">Order Now</button>
              </div>

              <div className="mt-4">
                <b>https://www.instagram.com/anibhavicreations/#</b>
                <div className="mt-2">
                  <Link href="https://www.instagram.com/anibhavicreations?igsh=MTVlNDVqcjB2bmtqeQ==">
                    <Image src={Pic2} className="me-4 mt-2" alt="insta" width={40} height={40} />
                  </Link>
                  <Image src={Pic3} className="me-4 mt-2" alt="twitter" width={40} height={40} />
                  <Link href="https://m.youtube.com/@AnibhaviCreations">
                    <Image src={Pic4} className="me-4 mt-2" alt="Youtube" width={40} height={40} />
                  </Link>
                  {/* <Image    src={Pic5} className="me-4 mt-2" alt="insta" width={70} height={40} /> */}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
}
