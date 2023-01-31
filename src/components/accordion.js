import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './accordion.module.css'

const Accordion = (props) => {
  return (
    <div className={` ${styles['accordion']} ${styles[props.rootClassName]} `}>
      <div
        data-role="accordion-container"
        className={` ${styles['element']} ${projectStyles['accordion-element']} `}
      >
        <div className={styles['details']}>
          <span className={styles['text']}>{props.text}</span>
          <span data-role="accordion-content" className={styles['text01']}>
            {props.text1}
          </span>
        </div>
        <svg
          viewBox="0 0 1024 1024"
          data-role="accordion-icon"
          className={styles['icon']}
        >
          <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
        </svg>
      </div>
      <div
        data-role="accordion-container"
        className={` ${styles['element1']} ${projectStyles['accordion-element']} `}
      >
        <div className={styles['details1']}>
          <span className={styles['text02']}>{props.text2}</span>
          <span data-role="accordion-content" className={styles['text03']}>
            {props.text3}
          </span>
        </div>
        <svg
          viewBox="0 0 1024 1024"
          data-role="accordion-icon"
          className={styles['icon02']}
        >
          <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
        </svg>
      </div>
      <div
        data-role="accordion-container"
        className={` ${styles['element2']} ${projectStyles['accordion-element']} `}
      >
        <div className={styles['details2']}>
          <span className={styles['text04']}>{props.text4}</span>
          <span data-role="accordion-content" className={styles['text05']}>
            {props.text5}
          </span>
        </div>
        <svg
          viewBox="0 0 1024 1024"
          data-role="accordion-icon"
          className={styles['icon04']}
        >
          <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
        </svg>
      </div>
      <div
        data-role="accordion-container"
        className={` ${styles['element3']} ${projectStyles['accordion-element']} `}
      >
        <div className={styles['details3']}>
          <span className={styles['text06']}>{props.text41}</span>
          <span data-role="accordion-content" className={styles['text07']}>
            {props.text51}
          </span>
        </div>
        <svg
          viewBox="0 0 1024 1024"
          data-role="accordion-icon"
          className={styles['icon06']}
        >
          <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
        </svg>
      </div>
      <div
        data-role="accordion-container"
        className={` ${styles['element4']} ${projectStyles['accordion-element']} `}
      >
        <div className={styles['details4']}>
          <span className={styles['text08']}>{props.text411}</span>
          <span data-role="accordion-content" className={styles['text09']}>
            {props.text511}
          </span>
        </div>
        <svg
          viewBox="0 0 1024 1024"
          data-role="accordion-icon"
          className={styles['icon08']}
        >
          <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
        </svg>
      </div>
      <div
        data-role="accordion-container"
        className={` ${styles['element5']} ${projectStyles['accordion-element']} `}
      >
        <div className={styles['details5']}>
          <span className={styles['text10']}>{props.text4111}</span>
          <span data-role="accordion-content" className={styles['text11']}>
            {props.text5111}
          </span>
        </div>
        <svg
          viewBox="0 0 1024 1024"
          data-role="accordion-icon"
          className={styles['icon10']}
        >
          <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
        </svg>
      </div>
    </div>
  )
}

Accordion.defaultProps = {
  text5111:
    'A professional website is available for customers 24 hours a day, 7 days a week, meaning that customers can access information and purchase products or services at any time.',
  text51:
    'A professional website allows customers to purchase products or services, get support, and access information from the comfort of their own home, which can greatly increase their convenience.',
  text2: 'Improved customer engagement',
  text1:
    'A professional website gives your small business increased credibility in the eyes of potential customers. It shows that you are a legitimate and trustworthy company.',
  text4111: 'A 24/7 shop window',
  text: 'Increased credibility',
  text41: 'Greater convenience',
  text511:
    'A professional website can serve as a cost-effective marketing tool, allowing you to reach a wider audience at a lower cost than traditional marketing methods.',
  text411: 'Cost-effective marketing',
  text4: 'Increased visibility',
  text5:
    "A professional website can help increase your small business's visibility online, making it more likely that customers will find you through search engines.",
  text3:
    'A professional website makes it easy for customers to find the information they need about your products and services, and it provides a platform for engaging with your customers through forms, social media, and other interactive features.',
  rootClassName: '',
}

Accordion.propTypes = {
  text5111: PropTypes.string,
  text51: PropTypes.string,
  text2: PropTypes.string,
  text1: PropTypes.string,
  text4111: PropTypes.string,
  text: PropTypes.string,
  text41: PropTypes.string,
  text511: PropTypes.string,
  text411: PropTypes.string,
  text4: PropTypes.string,
  text5: PropTypes.string,
  text3: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Accordion
