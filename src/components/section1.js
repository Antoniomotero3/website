import React from 'react'

import PropTypes from 'prop-types'

import Mark from './mark'
import projectStyles from '../style.module.css'
import styles from './section1.module.css'

const Section1 = (props) => {
  return (
    <section id="Features" className={styles['section']}>
      <header className={styles['header']}>
        <h2 className={styles['text']}>{props.heading}</h2>
        <span className={styles['text1']}>{props.text}</span>
      </header>
      <section className={styles['note']}>
        <div className={styles['image']}>
          <img
            alt={props.image_alt}
            src={props.image_src}
            className={styles['image1']}
          />
        </div>
        <div className={styles['content']}>
          <div className={styles['main']}>
            <div className={styles['caption']}>
              <span
                className={` ${styles['section1']} ${projectStyles['section-head']} `}
              >
                {props.Section}
              </span>
            </div>
            <div className={styles['heading']}>
              <h2 className={projectStyles['section-heading']}>
                {props.Heading}
              </h2>
              <p className={projectStyles['section-description']}>
                {props.Paragraph}
              </p>
            </div>
          </div>
          <div
            className={` ${styles['get-started']} ${projectStyles['button']} `}
          >
            <span className={styles['text2']}>{props.Text}</span>
          </div>
        </div>
      </section>
      <section className={styles['note1']}>
        <div className={styles['image2']}>
          <img
            alt={props.image_alt1}
            src={props.image_src1}
            className={styles['image3']}
          />
        </div>
        <div className={styles['content1']}>
          <main className={styles['main1']}>
            <header className={styles['caption1']}>
              <span
                className={` ${styles['section2']} ${projectStyles['section-head']} `}
              >
                {props.Section1}
              </span>
            </header>
            <main className={styles['heading2']}>
              <header className={styles['header1']}>
                <h2 className={projectStyles['section-heading']}>
                  {props.Heading1}
                </h2>
                <p className={projectStyles['section-description']}>
                  {props.Paragraph1}
                </p>
              </header>
              <div className={styles['checkmarks']}>
                <Mark Label="Custom Design"></Mark>
                <Mark Label="Mobile Optimization"></Mark>
                <Mark Label="Search Engine Optimization"></Mark>
              </div>
            </main>
          </main>
          <div
            className={` ${styles['get-started1']} ${projectStyles['button']} `}
          >
            <span className={styles['text3']}>{props.Text1}</span>
          </div>
        </div>
      </section>
    </section>
  )
}

Section1.defaultProps = {
  Text: 'Get started',
  Heading1: 'What we offer',
  Heading: 'Customer engagement and visibility',
  Section1: 'our features',
  Paragraph:
    'A professional website with interactive features, such as forms, live chat, and social media integration, can improve customer engagement and increase visibility, leading to increased brand awareness, higher sales and long-term success for a small business.',
  text: 'What should your website do and what are the main benefits of having a clear, professional and responsive website for your business?',
  Section: 'Main benefits',
  Text1: 'Get started',
  heading: 'Why do you need a website?',
  image_alt1: 'image',
  image_alt: 'image',
  Paragraph1:
    'Every project is different. We will adapt out systems to fit perfectly for your business and brand. We focus on quality and speed, while completely keeping your brand intact. Nothing is set in stone, it can be changed at any time.',
  image_src: '/playground_assets/analytics-phone-900h.png',
  image_src1: '/playground_assets/macbook-website-1200h.png',
}

Section1.propTypes = {
  Text: PropTypes.string,
  Heading1: PropTypes.string,
  Heading: PropTypes.string,
  Section1: PropTypes.string,
  Paragraph: PropTypes.string,
  text: PropTypes.string,
  Section: PropTypes.string,
  Text1: PropTypes.string,
  heading: PropTypes.string,
  image_alt1: PropTypes.string,
  image_alt: PropTypes.string,
  Paragraph1: PropTypes.string,
  image_src: PropTypes.string,
  image_src1: PropTypes.string,
}

export default Section1
