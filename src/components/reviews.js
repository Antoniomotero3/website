import React from 'react'

import PropTypes from 'prop-types'

import Review from './review'
import projectStyles from '../style.module.css'
import styles from './reviews.module.css'

const Reviews = (props) => {
  return (
    <section className={styles['reviews']}>
      <header className={styles['header']}>
        <header className={styles['left']}>
          <span
            className={` ${styles['section']} ${projectStyles['section-head']} `}
          >
            {props.Section}
          </span>
          <h2
            className={` ${styles['heading']} ${projectStyles['section-heading']} `}
          >
            {props.Heading}
          </h2>
        </header>
        <div className={styles['right']}>
          <p
            className={` ${styles['paragraph']} ${projectStyles['section-description']} `}
          >
            {props.Paragraph}
          </p>
        </div>
      </header>
      <main className={styles['cards']}>
        <div className={styles['container']}>
          <Review
            Quote='"I was hesitant to invest in a website, but it was the best decision I ever made for my business. The designers brought my vision to life and created a website that truly represents my brand. The process was seamless, and I received exceptional customer service every step of the way. I couldn&apos;t be happier with the final product, and I highly recommend Blue Lynx to anyone looking to take their business to the next level."'
            rootClassName="root-class-name"
          ></Review>
        </div>
        <div className={styles['container1']}>
          <Review
            Quote='"I was looking for a website designer, and Blue Lynx came up as the top mark. So, I decided to give them a try because they have great reviews. They really did deliver on their promises and exceeded my expectations. I would definitely recommend them to others."'
            Author="Infinity Spa"
            Position="Owner"
            rootClassName="root-class-name"
          ></Review>
        </div>
        <div className={styles['container2']}>
          <Review
            Quote="&quot;I've never met such helpful website designers, especially with the technical issues. They were very professional and extremely responsive to all of my questions and emails. I received more than what I expected in the price range I was willing to pay. The final product was just as beautiful as it was in my mind's eye. They exceeded every expectation by far!&quot;"
            Author="Grizzly Amsterdam"
            Position="Restaurant"
            rootClassName="root-class-name"
          ></Review>
        </div>
      </main>
      <div className={styles['view-more']}>
        <p className={styles['text']}>{props.Text}</p>
      </div>
    </section>
  )
}

Reviews.defaultProps = {
  Paragraph:
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
  Heading: 'What previous clients say about us',
  Text: 'View more',
  Section: 'reviews',
}

Reviews.propTypes = {
  Paragraph: PropTypes.string,
  Heading: PropTypes.string,
  Text: PropTypes.string,
  Section: PropTypes.string,
}

export default Reviews
