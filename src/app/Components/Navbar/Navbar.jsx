'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Link from 'next/link';
import Image from 'next/image';
import './navbar.css';
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import logo from '@/app/Images/logo.png';

export default function Navbar() {
  const menuRef = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  let hideTimeout = null;

  const product = [
    { id: 1, list: 'Bootcut Jeans', href: '#Product' },
    { id: 2, list: ' Denim Jeans', href: '#Testimonial' },
    { id: 3, list: ' Ripped Jeans', href: '#LatestProduct' },
    { id: 4, list: 'StraightJeans', href: '#Unique' },
    { id: 5, list: 'Slevedge  Jeans', href: '#AppSection' },
    { id: 6, list: 'Cargo Jeans', href: '#Product' },
    { id: 7, list: 'Bootcut Jeans', href: '#Product' },
  ];

  useEffect(() => {
    setHasMounted(true);
    gsap.fromTo(
      '#main-logo',
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1, ease: 'power4.out', delay: 0.3 }
    );
  }, []);

  const showMenu = () => {
    clearTimeout(hideTimeout);
    if (menuRef.current) {
      menuRef.current.style.display = 'block';
      gsap.to(menuRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: 'power2.out',
      });
    }
  };

  const hideMenu = () => {
    hideTimeout = setTimeout(() => {
      if (menuRef.current) {
        gsap.to(menuRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.3,
          ease: 'power2.in',
          onComplete: () => {
            menuRef.current.style.display = 'none';
          },
        });
      }
    }, 200);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    hideMenu();
  };

  if (!hasMounted) return null;

  const half = Math.ceil(product.length / 2);

  return (
    <>
      {/* Top Navbar */}
      <div className="top-navbar d-none d-md-flex justify-content-start align-items-center px-4 py-2 glassmorph small">
        <div className="d-flex gap-4 align-items-center">
          <span><FaPhoneAlt className='fs-5' /> +91 9876543210</span>
          <span><IoLogoYoutube className='fs-5 text-danger' /> hello@example.com</span>
          <Link href="#" className="insta-hover"><FaInstagram className='fs-5 text-danger' /> Instagram</Link>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMobileMenu}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`}>
            <ul className="navbar-nav mx-auto gap-lg-4 gap-2 align-items-center text-center custom-nav-list">

              {/* First Half of Links */}
              {product.slice(0, half).map((item, index) => (
                <li key={index} className="nav-item">
                  <Link href={item.href} className="nav-link nav-hover" onClick={handleLinkClick}>
                    {item.list}
                  </Link>
                </li>
              ))}

              {/* Logo in Center */}
              <li className="nav-item logo-nav-item">
                <Image id="main-logo" src={logo} alt="Logo" width={130} height={100} className="logo-img" />
              </li>

              {/* Second Half of Links */}
              {product.slice(half).map((item, index) => (
                <li key={index + product.length} className="nav-item">
                  <Link href={item.href} className="nav-link nav-hover" onClick={handleLinkClick}>
                    {item.list}
                  </Link>
                </li>
              ))}

              {/* Contact */}
              <li className="nav-item">
                <Link href={`/Pages/About-us`} className="nav-link nav-hover" onClick={handleLinkClick}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
