import React from "react";
import "./FRANCHISE.css";
import {
  FaStoreAlt,
  FaChartLine,
  FaBoxOpen,
  FaChartBar,
  FaMapMarkerAlt,
  FaSyncAlt,
  FaCheckCircle,
  FaMoneyCheckAlt,
  FaWarehouse,
} from "react-icons/fa";
import FranchiseChart from "@/app/Components/FranchiseChart/FranchiseChart";
import { MdOutlineAttachMoney } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import Image from "next/image";
import FranchiseAdvantages from "@/app/Components/FranchiseChart/FranchiseAdvantages";
import FranchisePlans from "@/app/Components/FranchiseChart/FranchisePlans";

const page = () => {
  return (
    <div className="franchise-wrapper">
      <section className="franchise-welcome text-center text-white">
        <div className="container">
          <h1 className="franchise-heading">
            Welcome to{" "}
            <span className="franchise-brand">Anibhavi Creation</span> Franchise
            Program.
          </h1>
          <p className="franchise-subtext">
            Join the Anibhavi Creation family and become a proud owner of our
            successful jeans brand. Explore exciting opportunities, exclusive
            benefits, and start your journey with us today.
          </p>
          <button className="franchise-button">Get Started</button>
        </div>
      </section>

      <section className="franchise-section franchise-vision-section container">
        <div className="franchise-vision-wrapper">
          <div className="franchise-vision-content text-white text-center">
            <h2 className="franchise-vision-title">
              Bharat ke Tier 2 aur 3 Shehron mein
              <br />
              B2B Fashion Wholesale ki Agli Kranti!
            </h2>
            <p className="franchise-vision-text">
              Tier 2 aur Tier 3 shehron mein ab fashion sirf metro cities tak
              simit nahi raha. Ab chhote shehron ke bhi vyapari modern aur
              branded kapdon ki demand ko samajhne lage hain. Retail dukandaron,
              multi-brand outlets aur small format stores ki sankhya har quarter
              mein 12–15% tak badh rahi hai — jisse B2B wholesale ka scope tezi
              se expand ho raha hai.
            </p>
          </div>
        </div>
      </section>

      <section className="franchise-section franchise-b2b-opportunity-section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="franchise-b2b-title">
              B2B Vyapariyon ke Liye Ab Hai Sahi Samay!
            </h2>
            <p className="franchise-b2b-subtext">
              Bharat ke Tier 2/3 cities mein wholesale ka scope tezi se badh
              raha hai.
            </p>
          </div>

          <div className="row gy-4 justify-content-center franchise-b2b-list">
            <div className="col-md-6 d-flex align-items-start ">
              <FaStoreAlt className="franchise-b2b-icon" />
              <p className="franchise-b2b-point">
                Lakhs of active garment shops hain jo daily naye stock ki demand
                karti hain
              </p>
            </div>
            <div className="col-md-6 d-flex align-items-start">
              <FaChartLine className="franchise-b2b-icon" />
              <p className="franchise-b2b-point">
                Unorganized to organized wholesale shift ho raha hai — log
                reliable suppliers ko chahte hain
              </p>
            </div>
            <div className="col-md-6 d-flex align-items-start">
              <FaBoxOpen className="franchise-b2b-icon" />
              <p className="franchise-b2b-point">
                Har city mein daily 10,000+ pcs jeans/shirts ki consumption hoti
                hai
              </p>
            </div>
            <div className="col-md-6 d-flex align-items-start">
              <FaChartBar className="franchise-b2b-icon" />
              <p className="franchise-b2b-point">
                Wholesale segment 20–22% CAGR se grow kar raha hai semi-urban
                regions mein
              </p>
            </div>
            <div className="col-md-6 d-flex align-items-start">
              <FaMapMarkerAlt className="franchise-b2b-icon" />
              <p className="franchise-b2b-point">
                Retailers chahte hain ki unhe “Delhi jaane ki zarurat na pade” –
                unke sheher mein hi trusted supplier ho
              </p>
            </div>
            <div className="col-md-6 d-flex align-items-start">
              <FaSyncAlt className="franchise-b2b-icon" />
              <p className="franchise-b2b-point">
                Wholesalers aise manufacturer chahte hain jo credit na de, lekin
                stock jaldi aur trendy de
              </p>
            </div>
          </div>

          <div className="franchise-b2b-conclusion text-center mt-5">
            <h5 className="franchise-b2b-conclusion-title">
              Yeh sab indicators batate hain ki abhi B2B expansion ka golden
              period hai:
            </h5>
            <div className="row justify-content-center gap-3 mt-4">
              <div className="col-md-3 col-sm-6 mb-3 franchise-b2b-conclusion-point">
                <FaCheckCircle className="text-success me-2" /> Aapka maal jyada
                bikta hai
              </div>
              <div className="col-md-3 col-sm-6 mb-3 franchise-b2b-conclusion-point">
                <FaCheckCircle className="text-success me-2" /> Competition kam
                hai
              </div>
              <div className="col-md-3 col-sm-6 mb-3 franchise-b2b-conclusion-point">
                <FaCheckCircle className="text-success me-2" /> Profit margin
                stable hai
              </div>
              <div className="col-md-3 col-sm-6 mb-3 franchise-b2b-conclusion-point">
                <FaCheckCircle className="text-success me-2" /> Vyapari loyalty
                high hai
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="franchise-section">
        <FranchiseChart />
      </section>
      <section>
        <FranchiseAdvantages />
      </section>
      <section>
        <FranchisePlans />
      </section>
    </div>
  );
};

export default page;
