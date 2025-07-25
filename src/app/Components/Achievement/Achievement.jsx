import Image from 'next/image'
import React from 'react'
import Pic1 from '@/app/Images/A1.jpeg'
import './achievement.css'
import { FaCheck } from "react-icons/fa";

export default function Achievement() {
    return (
        <>
            <div className="AchievementSection">
                <div className="row">
                    <div className="col-md-6">
                        <div className='AchievementImgSec'>

                            <Image src={Pic1} alt="AchievementImage" height={600} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className='AchievementRightSec'>
                            <div className="AchievementRightSecHead">
                                <div className='AchievementTitle'>

                                    <h3> Welcome to <span className='highlightText'>Abhinavi Creation</span>  Woven with Passion, Stitched with Pride.</h3>
                                </div>

                                <p className='AchievementSubTitle'>

                                    In the heart of Indian fashion, we bring to life the timeless charm of denim. As a distinguished wholesale jeans company, our commitment lies in delivering not just garments, but a statement of quality and tradition. Honored by Poonam Dhillon, our journey is celebrated by those who value elegance blended with durability. Discover a collection where every thread speaks of craftsmanship, and every fit redefines confidence.
                                </p>
                            </div>
                            <div className='AchievementList'>
                                <div><FaCheck className='fs-3 me-3 bg-warning rounded-1' /></div>
                                <p><b> Unleash the power of denim – where every style tells a story.   </b>
                                    From rugged, raw-finish classics to soft, stretchable fits made for modern comfort — our expansive range of jeans covers every style and silhouette imaginable. At Abhinavi Creation, opportunity meets individuality, giving you the power to choose denim that defines your identity with confidence and class.</p>
                            </div>

                            <div className='AchievementList'>
                                <div><FaCheck className='fs-3 me-3 bg-warning rounded-1' /></div>
                                <p><b> Dive into a sea of denim possibilities at Abhinavi Creation   :-</b>
                                    Dive into a sea of denim possibilities at Abhinavi Creation.
                                    From timeless straight fits to trendy flared cuts, rugged raw washes to ultra-soft stretch denim — our wholesale collection offers something for every taste and trend. With every pair, we deliver not just a product, but a promise of choice, comfort, and craftsmanship. Here, personal style meets endless opportunity.

                                </p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}
