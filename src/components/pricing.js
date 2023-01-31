import React from 'react'

import PropTypes from 'prop-types'

import Includes from './includes'
import Excludes from './excludes'
import projectStyles from '../style.module.css'
import styles from './pricing.module.css'

const Pricing = (props) => {
  return (
    <section className={styles['pricing']}>
      <main className={styles['pricing1']}>
        <header className={styles['header']}>
          <header className={styles['left']}>
            <span
              className={` ${styles['section']} ${projectStyles['section-head']} `}
            >
              {props.Section}
            </span>
            <h2
              className={` ${projectStyles['section-heading']} ${styles['heading']} `}
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
        <div className={styles['plans-container']}>
          <main className={styles['plans']}>
            <div className={styles['plan']}>
              <div className={styles['details']}>
                <div className={styles['header1']}>
                  <label className={styles['name']}>{props.Name}</label>
                  <div className={styles['pricing2']}>
                    <h1 className={styles['price']}>{props.Price}</h1>
                  </div>
                </div>
                <p className={styles['description']}>{props.Description}</p>
              </div>
              <div className={styles['buy-details']}>
                <div
                  className={` ${styles['buy']} ${projectStyles['button']} `}
                >
                  <span className={styles['text']}>
                    <span>Start Professional</span>
                    <br></br>
                  </span>
                </div>
                <div className={styles['features']}>
                  <span className={styles['heading1']}>{props.Heading1}</span>
                  <div className={styles['list']}>
                    <Includes
                      Label="Custom Design"
                      rootClassName="root-class-name"
                    ></Includes>
                    <Includes
                      Label="Constant Support"
                      rootClassName="root-class-name"
                    ></Includes>
                    <Includes
                      Label="Latest Software"
                      rootClassName="root-class-name"
                    ></Includes>
                    <Includes
                      Label="Best Features "
                      rootClassName="root-class-name"
                    ></Includes>
                    <Includes
                      Label="External Setup"
                      rootClassName="root-class-name"
                    ></Includes>
                    <Includes
                      Label="Search Engine Optimization"
                      rootClassName="root-class-name"
                    ></Includes>
                    <Excludes
                      Label="Custom hosting"
                      rootClassName="root-class-name"
                    ></Excludes>
                    <Excludes
                      Label="Daily Upkeep"
                      rootClassName="root-class-name"
                    ></Excludes>
                    <Excludes
                      Label="Security &amp; Protection"
                      rootClassName="root-class-name18"
                    ></Excludes>
                    <Excludes
                      Label="Regular Updates"
                      rootClassName="root-class-name"
                    ></Excludes>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles['plan1']}>
              <div className={styles['details1']}>
                <div className={styles['header2']}>
                  <label className={styles['name1']}>{props.Name1}</label>
                  <div className={styles['pricing3']}>
                    <span className={styles['price1']}>{props.Price1}</span>
                    <span className={styles['duration']}>{props.Duration}</span>
                  </div>
                </div>
                <p className={styles['description1']}>{props.Description1}</p>
              </div>
              <div className={styles['buy-details1']}>
                <div
                  className={` ${styles['buy1']} ${projectStyles['button']} `}
                >
                  <span className={styles['text03']}>
                    <span>Start Convenience</span>
                    <br></br>
                  </span>
                </div>
                <div className={styles['features1']}>
                  <span className={styles['heading2']}>{props.Heading2}</span>
                  <div className={styles['list1']}>
                    <Includes
                      Label="Custom Design"
                      rootClassName="root-class-name"
                    ></Includes>
                    <Includes
                      Label="Constant Support"
                      rootClassName="root-class-name"
                    ></Includes>
                    <Includes
                      Label="Latest Software"
                      rootClassName="root-class-name"
                    ></Includes>
                    <Includes
                      Label="Best Features "
                      rootClassName="root-class-name"
                    ></Includes>
                    <Includes
                      Label="External Setup"
                      rootClassName="root-class-name"
                    ></Includes>
                    <Includes
                      Label="Search Engine Optimization"
                      rootClassName="root-class-name"
                    ></Includes>
                    <Includes
                      Label="Custom Hosting"
                      rootClassName="root-class-name"
                    ></Includes>
                    <Includes
                      Label="Daily Upkeep"
                      rootClassName="root-class-name"
                    ></Includes>
                    <Includes
                      Label="Security &amp; Protection"
                      rootClassName="root-class-name"
                    ></Includes>
                    <Includes
                      Label="Regular Updates"
                      rootClassName="root-class-name"
                    ></Includes>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </main>
      <div className={styles['help']}>
        <span className={styles['text06']}>
          <span>Need any help?</span>
          <br></br>
        </span>
        <div className={styles['contact-support']}>
          <p className={styles['text09']}>{props.Text}</p>
        </div>
      </div>
    </section>
  )
}

Pricing.defaultProps = {
  Heading: 'Start small, think big',
  Heading1: 'You will get',
  Paragraph:
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
  Heading2: 'You will get',
  Description1:
    "Best suited for businesses that don't want the hassle of a website, a small monthly fee takes care of all your worries. (Billed once, then monthly.)",
  Description:
    'Best suited for businesses that need short term solutions. This plan creates or upgrades your website instantly. (Billed one time.)',
  Name: 'Professional',
  Text: 'Contact support  ->',
  Name1: 'Convenience',
  Duration: '/mo',
  Section: 'Pricing',
  Price: '€199',
  Price1: '€199 + €25.99',
}

Pricing.propTypes = {
  Heading: PropTypes.string,
  Heading1: PropTypes.string,
  Paragraph: PropTypes.string,
  Heading2: PropTypes.string,
  Description1: PropTypes.string,
  Description: PropTypes.string,
  Name: PropTypes.string,
  Text: PropTypes.string,
  Name1: PropTypes.string,
  Duration: PropTypes.string,
  Section: PropTypes.string,
  Price: PropTypes.string,
  Price1: PropTypes.string,
}

export default Pricing
