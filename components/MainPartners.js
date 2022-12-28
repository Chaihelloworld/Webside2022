
import AOS from 'aos';
import 'aos/dist/aos.css';

import LOGO1 from '../public/logo/LOGO1.png'
import LOGO2 from '../public/logo/LOGO2.png'
import LOGO3 from '../public/logo/LOGO3.png'
import LOGO4 from '../public/logo/LOGO4.png'
import LOGO5 from '../public/logo/LOGO5.png'
import LOGO6 from '../public/logo/LOGO6.png'

// import stylesd from '../styles/Home.module.css'
import {
    Navbar
} from 'reactstrap';
import styles from '../styles/feature.module.scss';
import Image from 'next/image';
// import { Link, animateScroll as scroll } from "react-scroll";
import { useEffect } from 'react';

export default function Home() {
    //   const scrollToTop = () => {
    //     scroll.scrollTo(690);
    //   };
    //   const scrollToTopTwo = () => {
    //     scroll.scrollTo(1520);
    //   };
    //   useEffect(()=>{
    //     scroll.scrollTo(15);
    //   })
    useEffect(() => {
        AOS.init();
    }, []);
    return (

        // <div style={{ transform: 'translate(70px,-140px)' }}>
        <div className={styles['x_feature']} id="x_feature" >
            <div
                data-aos="zoom-in-up"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
            >


            </div>
            <div className={styles['zone-mobile']}>
                <ul className={styles['zone-logo']}>
                    <li
                        data-aos="zoom-in-up"
                        data-aos-duration="500"
                        data-aos-easing="ease-in-out"
                        data-aos-once="true">
                        <div className={styles['img-logotwo'] + ' ' + 'm-auto'}>
                            <Image src={LOGO1} width={70} height={80} alt="" />
                        </div>
                    </li>
                    <li
                        data-aos="zoom-in-up"
                        data-aos-duration="700"
                        data-aos-easing="ease-in-out"
                        data-aos-once="true">
                        <div className={styles['img-logotwo'] + ' ' + 'm-auto'}>
                            <Image src={LOGO2} width={150} height={80}alt="" />
                        </div>
                    </li>
                    <li
                        data-aos="zoom-in-up"
                        data-aos-duration="800"
                        data-aos-easing="ease-in-out"
                        data-aos-once="true">
                        <div className={styles['img-logotwo'] + ' ' + 'm-auto'} >
                            <Image src={LOGO3} width={180} height={80} alt="" />
                        </div>
                    </li>
                    <li
                        data-aos="zoom-in-up"
                        data-aos-duration="900"
                        data-aos-easing="ease-in-out"
                        data-aos-once="true">
                        <div className={styles['img-logotwo'] + ' ' + 'm-auto'}>
                            <Image src={LOGO4}  width={90} height={90} alt="" />
                        </div>

                    </li>
                    <li
                        data-aos="zoom-in-up"
                        data-aos-duration="900"
                        data-aos-easing="ease-in-out"
                        data-aos-once="true">
                        <div className={styles['img-logotwo'] + ' ' + 'm-auto'}>
                            <Image src={LOGO5} width={100} height={90}  alt="" />
                        </div>

                    </li>
                    <li
                        data-aos="zoom-in-up"
                        data-aos-duration="900"
                        data-aos-easing="ease-in-out"
                        data-aos-once="true">
                        <div className={styles['img-logotwo'] + ' ' + 'm-auto'}>
                            <Image src={LOGO6} style={{transform:'translate(0px,-15px)'}}  width={120} height={120} alt="" />
                        </div>

                    </li>
                </ul>
            </div>
        </div>


    )
}
