import React from 'react'
import styles from '../../styles/Profile.module.css'
import BtnStyles from '../../styles/Button.module.css'
import { useCurrentUser } from '../../contexts/CurrentUserContext'
import { Link } from 'react-router-dom'
import UserAvatar from '../../components/UserAvatar'

const Profile = (props) => {
    const {profile, mobile, profile_avatar_size=55} = props
    const {id, following_id, profile_avatar, owner} = profile

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;

  return (
    <div className={`my-3 d-flex align-items-center ${mobile && "flext-column"}`}>
        <div>
            <Link className="align-self-center" to={`/profiles/${id}`}>
                <UserAvatar src={profile_avatar} height={profile_avatar_size}/>
            </Link>    
        </div>
        <div className={`mx-2 ${styles.WordBreak}`}>
            <strong>{owner}</strong>
        </div>
        <div className={`text-right ${!mobile && 'ml-auto'}`}>
            {!mobile && currentUser && !is_owner && (
                following_id ? (
                    <button 
                    className={`${BtnStyles.btnXsSmall}`}
                    onClick={() => {}}
                    >unfollow
                    </button>
                ) : (
                    <button 
                    className={`${BtnStyles.btnXsSmall}`}
                    onClick={() => {}}
                    >follow
                    </button>
                )
            )}
        </div>
    </div>
  )
}

export default Profile