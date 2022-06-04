import React from 'react'

import {BsLinkedin,BsGithub,BsYoutube} from "react-icons/bs"

import styles from "./header.module.css"

const HeaderSocial = () => {
  return (
    <div className={`${styles["header__socials"]}`}>
        <div>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><BsLinkedin></BsLinkedin></a>
            <a href="https://github.com" target="_blank" rel="noreferrer"><BsGithub></BsGithub></a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer"><BsYoutube/></a>
        </div>
        <div>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><BsLinkedin></BsLinkedin></a>
            <a href="https://github.com" target="_blank" rel="noreferrer"><BsGithub></BsGithub></a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer"><BsYoutube/></a>
        </div>
    </div>
  )
}

export default HeaderSocial