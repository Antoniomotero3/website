import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './footer.module.css'

const Footer = (props) => {
  return (
    <footer className={` ${styles['footer']} ${styles[props.rootClassName]} `}>
      <div className={styles['content']}>
        <main className={styles['main-content']}>
          <div className={styles['content1']}>
            <header className={styles['main']}>
              <div className={styles['header']}>
                <img
                  alt={props.image_alt}
                  src={props.image_src}
                  className={styles['image']}
                />
                <span className={styles['text']}>{props.Text}</span>
              </div>
              <div className={styles['socials']}>
                <img
                  alt={props.image_alt1}
                  src={props.image_src1}
                  className={styles['image1']}
                />
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className={styles['link']}
                >
                  <img
                    alt={props.LinkedIn_alt}
                    src={props.LinkedIn_src}
                    className={projectStyles['social']}
                  />
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className={styles['link1']}
                >
                  <img
                    alt={props.Instagram_alt}
                    src={props.Instagram_src}
                    className={projectStyles['social']}
                  />
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className={styles['link2']}
                >
                  <img
                    alt={props.Twitter_alt}
                    src={props.Twitter_src}
                    className={projectStyles['social']}
                  />
                </a>
              </div>
            </header>
          </div>
          <section className={styles['copyright']}>
            <span className={styles['text1']}>{props.text1}</span>
          </section>
        </main>
        <main className={styles['subscribe']}>
          <main className={styles['main1']}>
            <h1 className={styles['heading']}>{props.Heading}</h1>
            <form
              name="email"
              action='&lt;form action="https://formsubmit.co/info@bluelynxagency.com" method="POST" /&gt;'
              method="POST"
              enctype="application/x-www-form-urlencoded"
              className={styles['form']}
            >
              <input
                type="text"
                name="email"
                required
                placeholder={props.textinput_placeholder}
                className={` ${styles['textinput']} ${projectStyles['input']} `}
              />
              <div
                Type="submit"
                className={` ${styles['buy']} ${projectStyles['button']} `}
              >
                <span className={styles['text2']}>{props.Text1}</span>
                <span type="submit" className={styles['text3']}>
                  <span>Subscribe now</span>
                  <br></br>
                </span>
              </div>
            </form>
          </main>
          <h1 className={styles['notice']}>{props.Notice}</h1>
        </main>
        <section className={styles['copyright1']}>
          <span className={styles['text6']}>{props.text}</span>
        </section>
      </div>
    </footer>
  )
}

Footer.defaultProps = {
  LinkedIn_alt: 'image',
  Heading: 'Subscribe to our newsletter',
  Text: 'Check us out on Social Media!',
  image_alt: 'image',
  text: '© 2022 latitude. All Rights Reserved.',
  Text1: '->',
  LinkedIn_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  Instagram_alt: 'image',
  Twitter_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_alt1: 'image',
  rootClassName: '',
  image_src1: 'https://play.teleporthq.io/static/svg/default-img.svg',
  Notice:
    'By subscribing to our newsletter you agree with our Terms and Conditions.',
  Twitter_alt: 'image',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  Instagram_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text1: '© 2022 Blue Lynx Agency. All Rights Reserved.',
  textinput_placeholder: 'Enter your email',
}

Footer.propTypes = {
  LinkedIn_alt: PropTypes.string,
  Heading: PropTypes.string,
  Text: PropTypes.string,
  image_alt: PropTypes.string,
  text: PropTypes.string,
  Text1: PropTypes.string,
  LinkedIn_src: PropTypes.string,
  Instagram_alt: PropTypes.string,
  Twitter_src: PropTypes.string,
  image_alt1: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src1: PropTypes.string,
  Notice: PropTypes.string,
  Twitter_alt: PropTypes.string,
  image_src: PropTypes.string,
  Instagram_src: PropTypes.string,
  text1: PropTypes.string,
  textinput_placeholder: PropTypes.string,
}

export default Footer
