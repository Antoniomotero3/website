import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './who-we-are.module.css'

const WhoWeAre = (props) => {
  return (
    <section className={styles['who-we-are']}>
      <h2 className={styles['text']}>{props.heading}</h2>
      <div className={styles['features']}>
        <header
          className={` ${styles['feature']} ${projectStyles['feature']} ${projectStyles['feature-active']} `}
        >
          <h3 className={styles['text01']}>{props.heading1}</h3>
          <p className={styles['text02']}>{props.text}</p>
        </header>
        <header
          className={` ${projectStyles['feature']} ${styles['feature1']} `}
        >
          <h3 className={styles['text03']}>{props.heading2}</h3>
          <p className={styles['text04']}>{props.text1}</p>
        </header>
        <header
          className={` ${projectStyles['feature']} ${styles['feature2']} `}
        >
          <h3 className={styles['text05']}>{props.heading3}</h3>
          <p className={styles['text06']}>{props.text2}</p>
        </header>
      </div>
      <div className={styles['note']}>
        <div className={styles['content']}>
          <main className={styles['main']}>
            <h2 className={styles['heading']}>{props.Heading}</h2>
            <p className={styles['paragraph']}>
              <span>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae.
              </span>
              <br></br>
              <br></br>
              <span>
                Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                illo inventore veritatis et quasi architecto beatae.
              </span>
              <br></br>
            </p>
          </main>
          <div className={styles['explore-more']}>
            <p className={styles['text12']}>{props.Text}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

WhoWeAre.defaultProps = {
  text: 'We constantly look around the market to be the very first implementing the latest tactics.',
  Text: 'Explore more ->',
  text2: 'We separate ourselves from our competitors to stand out.',
  heading2: 'Speed',
  text1:
    "We believe that it shouldn't take weeks or months to get stuff done. ",
  heading3: 'Distinction',
  heading: 'Who we are',
  Heading: 'What our product looks like',
  heading1: 'Perception',
}

WhoWeAre.propTypes = {
  text: PropTypes.string,
  Text: PropTypes.string,
  text2: PropTypes.string,
  heading2: PropTypes.string,
  text1: PropTypes.string,
  heading3: PropTypes.string,
  heading: PropTypes.string,
  Heading: PropTypes.string,
  heading1: PropTypes.string,
}

export default WhoWeAre
