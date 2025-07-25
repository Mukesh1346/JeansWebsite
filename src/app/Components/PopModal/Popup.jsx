// components/FranchiseModal.js
'use client';
import { useEffect } from 'react';
import './popup.css';
import Image from 'next/image';
import pic1 from '@/app/Images/office.jpg'
import logo from '@/app/Images/logo.png'

export default function FranchiseModal({ onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => (document.body.style.overflow = 'auto');
  }, []);

  return (
    <div className="franchise-modal-overlay">
      <div className="franchise-modal">
        <div className="franchise-modal-header">
          <h5>Franchise Enquiry</h5>
          <button onClick={onClose} className="close-btn">&times;</button>
        </div>
        <div className="franchise-modal-body">
          <div className="row">
            <div className="col-md-6 image-section text-center">
              <Image src={pic1} alt="Franchise" className="img-fluid" />
              <p>
                Thank you for your interest in our franchise opportunity.
                Fill out the form and our team will reach out to you.
              </p>
            </div>
            <div className="col-md-6 form-section d-flex flex-column align-items-center justify-content-center">
            <Image src={logo} alt="Franchise"  className="img-fluid w-50 h-50 mb-1" />

              <form className= ' w-100 justify-content-center align-items-center'>
                <input type="text" className="form-control " placeholder="Full Name*" required />
                <input type="email" className="form-control" placeholder="Email ID*" required />
                <input type="tel" className="form-control" placeholder="Mobile Number*" required />
                <input type="text" className="form-control" placeholder="Enter State*" required />
                <input type="text" className="form-control" placeholder="Enter City*" required />
                <input type="text" className="form-control" placeholder="Enter Pincode*" required />
                <div className="mt-3">
                  <div className="g-recaptcha" data-sitekey="YOUR_RECAPTCHA_SITE_KEY"></div>
                </div>
                <button type="submit" className="btn btnSubmit mt-3 w-100">SUBMIT</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
