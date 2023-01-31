import React from 'react'

import PropTypes from 'prop-types'

import styles from './article.module.css'

const Article = (props) => {
  return (
    <section className={` ${styles['card']} ${styles[props.rootClassName]} `}>
      <main className={styles['content']}>
        <header className={styles['header']}>
          <h1 className={styles['header1']}>{props.Header}</h1>
        </header>
        <p className={styles['description']}>{props.Description}</p>
        <div className={styles['button']}>
          <a
            href={props.ButtonLink}
            target="_blank"
            rel="noreferrer noopener"
            className={styles['link']}
          >
            <p className={styles['text']}>{props.Button}</p>
          </a>
        </div>
      </main>
    </section>
  )
}

Article.defaultProps = {
  rootClassName: '',
  Button: 'Read ->',
  ButtonLink: '',
  Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  Header: 'TechCrunch',
}

Article.propTypes = {
  rootClassName: PropTypes.string,
  Button: PropTypes.string,
  ButtonLink: PropTypes.string,
  Description: PropTypes.string,
  Header: PropTypes.string,
}

export default Article
