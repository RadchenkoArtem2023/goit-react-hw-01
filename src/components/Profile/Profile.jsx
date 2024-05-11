import styles from "./Profile.module.css";
const Profile = ({ name, tag, location, image, stats }) => {
  const { followers, views, likes } = stats;

  return (
    <div className={styles.profileBorder}>
      <div className={styles.profileContainer}>
        <img className={styles.profileImage} src={image} alt="User avatar" />
        <p className={styles.profileName}>{name}</p>
        <p className={styles.profileTag}>@{tag}</p>
        <p className={styles.profileLocation}>{location}</p>
      </div>

      <ul className={styles.profileList}>
        <li className={styles.profileListItem}>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
