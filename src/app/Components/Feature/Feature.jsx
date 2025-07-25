'use client';
import Image from 'next/image';
import './QualityControl.css';
import pic1 from '@/app/Images/icon6.png'
import pic2 from '@/app/Images/icon7.png'
import pic3 from '@/app/Images/icon8.png'
import pic4 from '@/app/Images/icon9.png'


const testItems = [
  {
    title: 'Color Bleeding Test',
    icon: pic1 // replace with your actual icon path
  },
  {
    title: 'Fusing Test',
    icon: pic2,
  },
  {
    title: 'Dispatching Test',
    icon: pic3,
  },
  {
    title: 'Finishing Test',
    icon: pic4,
  },
  {
    title: 'Shrinkage Test',
    icon: pic1,
  },
];

export default function QualityControl() {
  return (
    <section className="quality-control-section py-5">
      <div className="container text-center">
        <h2 className="quality-title">Quality Control</h2>
        <p className="quality-desc">
          Quality Control Is Our Priority. With Rigorous Standards And Meticulous Attention To Detail, We Ensure Each Garment Meets The Highest Standards Of Craftsmanship, Ensuring Customer Satisfaction.
        </p>

        <div className="row justify-content-center mt-5">
          {testItems.map((item, index) => (
            <div className="col-md-2 col-6 mb-4" key={index}>
              <div className="diamond-box">
                <div className="diamond-content">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={50}
                    height={50}
                  />
                  <p className="diamond-title">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
