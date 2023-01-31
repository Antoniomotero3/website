import React from 'react'

import PropTypes from 'prop-types'

import styles from './card.module.css'

const Card = (props) => {
  return (
    <section className={` ${styles['card']} ${styles[props.rootClassName]} `}>
      <div className={styles['icon']}>
        <img alt={props.IconAlt} src={props.Icon} className={styles['icon1']} />
      </div>
      <main className={styles['content']}>
        <h1 className={styles['header']}>{props.Header}</h1>
        <p className={styles['description']}>{props.Description}</p>
      </main>
    </section>
  )
}

Card.defaultProps = {
  Description:
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium',
  rootClassName: '',
  Icon: '/playground_assets/group%201316-200w.png',
  IconAlt: 'image',
  Header: 'Sima Mosbacher',
}

Card.propTypes = {
  Description: PropTypes.string,
  rootClassName: PropTypes.string,
  Icon: PropTypes.string,
  IconAlt: PropTypes.string,
  Header: PropTypes.string,
}

export default Card
