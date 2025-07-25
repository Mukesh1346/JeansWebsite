// components/FranchiseAdvantages.jsx
import React from "react";
import styles from "./FranchiseAdv.module.css";
import { FaBoxOpen, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import profiteImage from "../../Images/profiteImage.jpg";
import Image from "next/image";

const FranchiseAdvantages = () => {
  return (
    <section className={styles.FranchiseAdvantageSection}>
      <div className="container">
        {/* Section Heading */}
        <h2 className={styles.FranchiseHeading}>
          Kyun Chunein Anibhavi Creations? <br />{" "}
          <span>Hamara Advantage!!</span>
        </h2>

        {/* Advantage Box 1 */}
        <div className={styles.FranchiseBoxContainer}>
          <div className={styles.FranchiseBoxLeft}>
            <h3>Aapka Risk Hum Lenge: Stock Hum Denge!</h3>
            <p>
              Franchise model mein yeh hamara sabse badi USP hai. Aapko stock
              khareedne ki chinta nahi karni. Hum aapko high-quality,
              fast-selling jeans aur shirts ki supply denge, taaki aap sirf
              sales aur growth par focus kar sakein.
            </p>
          </div>

          <div className={styles.FranchiseBoxRight}>
            <div className={styles.FranchisePoint}>
              <FaBoxOpen className={styles.FranchiseIcon} />
              <strong>Zero Stock Investment</strong>
              <p>Laakhon rupaye ke initial stock purchase se bachat.</p>
            </div>
            <div className={styles.FranchisePoint}>
              <FaCheckCircle className={styles.FranchiseIcon} />
              <strong>Consistent Supply</strong>
              <p>Latest trends aur high-demand products ki regular supply.</p>
            </div>
            <div className={styles.FranchisePoint}>
              <FaTimesCircle className={styles.FranchiseIcon} />
              <strong>No Deadstock Risk</strong>
              <p>Unsold inventory ka risk hamara, aapka nahi.</p>
            </div>
          </div>
        </div>

        {/* Advantage Box 2 */}
        <div className={styles.FranchiseBoxContainer1}>
          <div className={styles.FranchiseBoxLeft}>
            <h3>0 Royalty & 0 Commissions</h3>
            <p>
              Hum 0% royalty aur 0% commission par kaam karte hain taaki aap
              apne profit ka 100% enjoy kar sakein. Jahan dusre brands 8–10% tak
              royalty charge karte hain, hum wahan aapko full freedom dete hain
              ki aap apna saara profit apne business me lagaen. Yehi hamara farq
              hai — no hidden charges, no pressure — sirf seedha aur faydemant
              partnership.
            </p>
          </div>

          <div className={styles.FranchiseImageRight}>
            <Image
              src={profiteImage}
              alt="Profit Comparison"
              className={styles.FranchiseChartImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FranchiseAdvantages;
