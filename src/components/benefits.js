import React from 'react'

import PropTypes from 'prop-types'

import Accordion from './accordion'
import projectStyles from '../style.module.css'
import styles from './benefits.module.css'

const Benefits = (props) => {
  return (
    <section className={styles['benefits']}>
      <div className={styles['note']}>
        <div className={styles['image']}>
          <img
            alt={props.image_alt}
            src={props.image_src}
            className={styles['image1']}
          />
        </div>
        <div className={styles['content']}>
          <div className={styles['caption']}>
            <span
              className={` ${styles['section']} ${projectStyles['section-head']} `}
            >
              <span>BENEFITS</span>
              <br></br>
            </span>
          </div>
          <div className={styles['heading']}>
            <div className={styles['header']}>
              <h2 className={projectStyles['section-heading']}>
                {props.Heading}
              </h2>
            </div>
            <Accordion rootClassName="root-class-name"></Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}

Benefits.defaultProps = {
  image_alt: 'image',
  Heading: 'Main benefits of having a perfect website',
  image_src: '/playground_assets/women-website-1100h.png',
}

Benefits.propTypes = {
  image_alt: PropTypes.string,
  Heading: PropTypes.string,
  image_src: PropTypes.string,
}

export default Benefits
