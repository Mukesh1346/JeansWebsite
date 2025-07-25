"use client";

import React from "react";
import styles from "./FranchisePlans.module.css";

const FranchisePlans = () => {
  return (
    <section className={styles.franchiseSection}>
      <div className={styles.heading}>Hamara Flexible Franchise Model</div>
      <p className={styles.subheading}>
        Apne budget aur business goals ke hisaab se apna plan chunein. Har tier
        aapko ek exclusive B2B wholesale area deta hai.
      </p>

      <div className={styles.tiersWrapper}>
        <div className={styles.tierCard}>
          <h3>Tier-1 (Starter)</h3>
          <p className={styles.price}>
            ₹ <span>5</span> Lakh
          </p>
          <p>Ek chote sheher mein B2B wholesale rights ke liye perfect.</p>
        </div>

        <div className={styles.tierCard}>
          <h3>Tier-2 (Standard)</h3>
          <p className={styles.price}>
            ₹ <span>10</span> Lakh
          </p>
          <p>Ek medium-sized sheher ya district ke liye ideal B2B plan.</p>
        </div>

        <div className={styles.tierCard}>
          <h3>Tier-3 (Premium)</h3>
          <p className={styles.price}>
            ₹ <span>15</span> Lakh
          </p>
          <p>
            Ek bade sheher ya districts mein B2B market dominate karne ke liye.
          </p>
        </div>
      </div>

      <div className={styles.b2cAddon}>
        <h4>Optional B2C Add-on</h4>
        <p className={styles.addonPrice}>+ ₹ 5 Lakh</p>
      </div>

      <div className={styles.b2cDescription}>
        Apni kamai ko double karein! Sirf ₹ 5 lakh extra dekar B2B ke
        saath-saath B2C (direct customer) retail store bhi kholein aur apni
        market reach badhayein.
      </div>

    </section>
  );
};

export default FranchisePlans;
