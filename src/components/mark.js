import React from 'react'

import PropTypes from 'prop-types'

import styles from './mark.module.css'

const Mark = (props) => {
  return (
    <div className={styles['mark']}>
      <div className={styles['icon']}>
        <svg viewBox="0 0 1024 1024" className={styles['icon1']}>
          <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
        </svg>
      </div>
      <p className={styles['label']}>{props.Label}</p>
    </div>
  )
}

Mark.defaultProps = {
  Label: 'Custom design',
}

Mark.propTypes = {
  Label: PropTypes.string,
}

export default Mark
