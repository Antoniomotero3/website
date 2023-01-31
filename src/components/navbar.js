import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './navbar.module.css'

const Navbar = (props) => {
  return (
    <nav className={` ${styles['navbar']} ${styles[props.rootClassName]} `}>
      <img
        alt={props.image_alt2}
        src={props.image_src2}
        className={styles['image']}
      />
      <div className={styles['nav-content']}>
        <div className={styles['nav-links']}>
          <span className={projectStyles['nav-link']}>Features</span>
          <span className={projectStyles['nav-link']}>Why us</span>
          <span className={projectStyles['nav-link']}>Prices</span>
          <span className={projectStyles['nav-link']}>Contact</span>
        </div>
        <div
          className={` ${projectStyles['get-started']} ${styles['get-started']} `}
        >
          <span className={styles['text']}>Get started</span>
        </div>
        <div
          id="open-mobile-menu"
          className={` ${styles['hamburger']} ${projectStyles['get-started']} `}
        >
          <img
            alt={props.image_alt}
            src={props.image_src}
            className={styles['image1']}
          />
        </div>
      </div>
      <div id="mobile-menu" className={styles['mobile-menu']}>
        <div className={styles['branding']}>
          <img
            alt={props.image_alt1}
            src={props.image_src1}
            className={styles['image2']}
          />
          <div id="close-mobile-menu" className={styles['container']}>
            <svg viewBox="0 0 1024 1024" className={styles['icon']}>
              <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
            </svg>
          </div>
        </div>
        <div className={styles['nav-links1']}>
          <span className={projectStyles['nav-link']}>Features</span>
          <span className={projectStyles['nav-link']}>Why us</span>
          <span className={projectStyles['nav-link']}>Prices</span>
          <span className={projectStyles['nav-link']}>Contact</span>
        </div>
        <div className={projectStyles['get-started']}>
          <span className={styles['text1']}>Get started</span>
        </div>
      </div>
      <div>
        <DangerousHTML
          html={`<script>
    /*
Mobile menu - Code Embed
*/

/* listenForUrlChangesMobileMenu() makes sure that if you changes pages inside your app, 
the mobile menu will still work*/

const listenForUrlChangesMobileMenu = () => {
    let url = location.href;
    document.body.addEventListener("click", () => {
        requestAnimationFrame(() => {
            if (url !== location.href) {
                runMobileMenuCodeEmbed();
                url = location.href;
            }
        });
    },
    true
    );
};

const runMobileMenuCodeEmbed = () => {
    // Mobile menu
    const mobileMenu = document.querySelector("#mobile-menu")

    // Buttons
    const closeButton = document.querySelector("#close-mobile-menu")
    const openButton = document.querySelector("#open-mobile-menu")

    // On openButton click, set the mobileMenu position left to -100vw
    openButton && openButton.addEventListener("click", function() {
        mobileMenu.style.transform = "translateX(0%)"
    })

    // On closeButton click, set the mobileMenu position to 0vw
    closeButton && closeButton.addEventListener("click", function() {
        mobileMenu.style.transform = "translateX(100%)"
    })
}

runMobileMenuCodeEmbed()
listenForUrlChangesMobileMenu()
</script>`}
        ></DangerousHTML>
      </div>
    </nav>
  )
}

Navbar.defaultProps = {
  image_alt: 'image',
  image_src1: '/playground_assets/planical7012-ttpb.svg',
  image_src: '/playground_assets/hamburger-200h.png',
  image_alt2: 'image',
  image_alt1: 'image',
  image_src2: '/playground_assets/lynx-icon-200h.png',
  rootClassName: '',
}

Navbar.propTypes = {
  image_alt: PropTypes.string,
  image_src1: PropTypes.string,
  image_src: PropTypes.string,
  image_alt2: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src2: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Navbar
