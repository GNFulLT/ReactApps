import React from 'react'

import CTA from "./CTA"

import HeaderSocial from './HeaderSocial'

import sImage from "../../assets/student-image.jpg"

import styles from "./header.module.css"

const Header = () => {
  return (
    <header>
      <div className={`container ${styles["header__container"]} ${styles["header"]}`}>
        <h5>Hello I'm</h5>
        <h1>Uğur</h1>
        <h5 className="text-light">Fullstack Developer</h5>

        <CTA></CTA>
        <HeaderSocial></HeaderSocial>
        <a href="#contact" className={`${styles["scroll__down"]}`}>Scroll Down</a>

        <div className={`${styles["imageCover"]}`}>
          <img className={`${styles["image"]}`} src={sImage} alt=""></img>
        </div>
      </div>
    </header>
  )
}

export default Header