import PropTypes from 'prop-types'

export default function UserProfile({ userData, theme = 'light' }) {
  return (
    <div className={`profile-card theme-${theme}`}>
      <img
        className="profile-avatar"
        src={userData.avatarUrl}
        alt={userData.name}
        width={userData.imageSize}
        height={userData.imageSize}
      />

      <h2>User Profile</h2>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  )
}

UserProfile.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string,
    avatarUrl: PropTypes.string,
    imageSize: PropTypes.number,
  }).isRequired,
  theme: PropTypes.string,
}
