import React from 'react'
import styles from '../styles/UserAvatar.module.css'

const UserAvatar = ({src, height = 30, text}) => {
// User avatar
  return (
    <span>
        <img className={styles.Avatar}
        src={src}
        height={height} 
        width={height}
        alt="User Profile Avatar"
        />
        {text}
    </span>
  )
}

export default UserAvatar