import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './f-a-q.module.css'

const FAQ = (props) => {
  return (
    <div className={` ${styles['accordion']} ${styles[props.rootClassName]} `}>
      <div
        data-role="accordion-container"
        className={` ${styles['element']} ${projectStyles['accordion-element']} `}
      >
        <div className={styles['details']}>
          <span className={styles['text']}>
            What is sit amet, consectetur adipiscing elit, sed do?
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span data-role="accordion-content" className={styles['text01']}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </div>
        <div data-role="accordion-icon">
          <svg viewBox="0 0 1024 1024" className={styles['icon']}>
            <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
          </svg>
        </div>
      </div>
      <div
        data-role="accordion-container"
        className={` ${styles['element1']} ${projectStyles['accordion-element']} `}
      >
        <div className={styles['details1']}>
          <span className={styles['text02']}>
            We&apos;ll update amet, consectetur adipiscing elit until
            you&apos;re 100% happy.
          </span>
          <span data-role="accordion-content" className={styles['text03']}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </div>
        <div data-role="accordion-icon">
          <svg viewBox="0 0 1024 1024" className={styles['icon02']}>
            <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
          </svg>
        </div>
      </div>
      <div
        data-role="accordion-container"
        className={` ${styles['element2']} ${projectStyles['accordion-element']} `}
      >
        <div className={styles['details2']}>
          <span className={styles['text04']}>
            Is it really sit amet, consectetur adipiscing elit, sed do?
          </span>
          <span data-role="accordion-content" className={styles['text05']}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </div>
        <div data-role="accordion-icon">
          <svg viewBox="0 0 1024 1024" className={styles['icon04']}>
            <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
          </svg>
        </div>
      </div>
      <div
        data-role="accordion-container"
        className={` ${styles['element3']} ${projectStyles['accordion-element']} `}
      >
        <div className={styles['details3']}>
          <span className={styles['text06']}>
            We work, what is sit amet, consectetur adipiscing elit, sed do sint
            occaecat cupidatat non proident
          </span>
          <span data-role="accordion-content" className={styles['text07']}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </div>
        <div data-role="accordion-icon">
          <svg viewBox="0 0 1024 1024" className={styles['icon06']}>
            <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
          </svg>
        </div>
      </div>
      <div
        data-role="accordion-container"
        className={` ${styles['element4']} ${projectStyles['accordion-element']} `}
      >
        <div className={styles['details4']}>
          <span className={styles['text08']}>
            What is sit amet, consectetur adipiscing elit, sed do?
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span data-role="accordion-content" className={styles['text09']}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </div>
        <div data-role="accordion-icon">
          <svg viewBox="0 0 1024 1024" className={styles['icon08']}>
            <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
          </svg>
        </div>
      </div>
      <div
        data-role="accordion-container"
        className={` ${styles['element5']} ${projectStyles['accordion-element']} `}
      >
        <div className={styles['details5']}>
          <span className={styles['text10']}>
            Amet, consectetur adipiscing elit mollit anim id est laborum.
          </span>
          <span data-role="accordion-content" className={styles['text11']}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </div>
        <div data-role="accordion-icon">
          <svg viewBox="0 0 1024 1024" className={styles['icon10']}>
            <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
          </svg>
        </div>
      </div>
    </div>
  )
}

FAQ.defaultProps = {
  rootClassName: '',
}

FAQ.propTypes = {
  rootClassName: PropTypes.string,
}

export default FAQ
