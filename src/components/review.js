import React from 'react'

import PropTypes from 'prop-types'

import styles from './review.module.css'

const Review = (props) => {
  return (
    <section className={` ${styles['card']} ${styles[props.rootClassName]} `}>
      <div className={styles['stars']}>
        <svg viewBox="0 0 1024 1024" className={styles['icon']}>
          <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
        </svg>
        <svg viewBox="0 0 1024 1024" className={styles['icon02']}>
          <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
        </svg>
        <svg viewBox="0 0 1024 1024" className={styles['icon04']}>
          <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
        </svg>
        <svg viewBox="0 0 1024 1024" className={styles['icon06']}>
          <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
        </svg>
        <svg viewBox="0 0 1024 1024" className={styles['icon08']}>
          <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
        </svg>
      </div>
      <main className={styles['content']}>
        <p className={styles['quote']}>{props.Quote}</p>
        <div className={styles['author']}>
          <img
            alt={props.image_alt1}
            src={props.image_src1}
            className={styles['image']}
          />
          <div className={styles['details']}>
            <h1 className={styles['author1']}>{props.Author}</h1>
            <label className={styles['position']}>{props.Position}</label>
          </div>
        </div>
      </main>
    </section>
  )
}

Review.defaultProps = {
  Quote:
    '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.”',
  Author: 'Sima Mosbacher',
  image_src1: '/playground_assets/profilepicturemaker%20%5B1%5D-200h.png',
  rootClassName: '',
  image_alt1: 'image',
  Position: 'Manager',
}

Review.propTypes = {
  Quote: PropTypes.string,
  Author: PropTypes.string,
  image_src1: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt1: PropTypes.string,
  Position: PropTypes.string,
}

export default Review
