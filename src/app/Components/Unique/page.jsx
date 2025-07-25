'use client';
import React, { useState } from 'react';
import './unique.css';
import Image from 'next/image';
import { motion } from 'framer-motion';
import pic1 from '@/app/Images/j6.jpg'
import pic2 from '@/app/Images/j4.jpg'
import pic3 from '@/app/Images/j5.jpg'
import FranchiseModal from '../PopModal/Popup';


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      when: 'beforeChildren',
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function Unique() {
  const [show, setShow] = useState(false);
  return (
   <>
   <section  id="Unique">
   <motion.div
      className="hero-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="image-grid" variants={containerVariants}>
        <motion.div className="img-block large" variants={itemVariants}>
          <Image src={pic1} className='uniqueImg' alt="Main Design" width={400} height={430} />
        </motion.div>

        <motion.div className="img-block small" variants={itemVariants}>
          <Image src={pic2} alt="Lamp Room" className='uniqueImg' width={250} height={200} />
        </motion.div>

        <motion.div className="img-block medium" variants={itemVariants}>
          <Image src={pic3} alt="Stool" className='uniqueImg' width={250} height={200} />
        </motion.div>
      </motion.div>

      <motion.div className="text-block" variants={containerVariants}>
        <motion.h2 className='UniqueHeading' variants={itemVariants}>
          We Help You Make Modern Interior Design
        </motion.h2>
        <motion.p variants={itemVariants}>
        Abhinavi Creator is a premium denim brand dedicated to crafting stylish, high-quality jeans for the modern generation. With a focus on comfort, durability, and cutting-edge design, we blend traditional craftsmanship with contemporary trends to deliver denim that fits every lifestyle. Whether you're dressing up or keeping it casual, Abhinavi Creator jeans are made to move with you — confidently and effortlessly.
        </motion.p>
        <motion.ul className="feature-list">
          <motion.li variants={itemVariants}>
           stylish jeans for men who value comfort and confidence.
          </motion.li>
          <motion.li variants={itemVariants}>
          Tailored fit jeans that bring comfort, class, and attitude.
          </motion.li>
          <motion.li variants={itemVariants}>
          From work to weekend, jeans that never slow you down.
          </motion.li>
          <motion.li variants={itemVariants}>
          Bold jeans designed for confident men who lead with style.
          </motion.li>
        </motion.ul>
        <motion.button
          className="btn-custom w-100"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={()=> setShow(true)}
        >
          Explore
        </motion.button>
        {show && <FranchiseModal onClose={() => setShow(false)} />}
      </motion.div>
    </motion.div>
   </section>
   </>
  );
}
