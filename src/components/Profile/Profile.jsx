import css from "../Profile/Profile.module.css";
export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.container}>
      <div>
        <img className={css.image} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.info}>{tag}</p>
        <p className={css.info}>{location}</p>
      </div>
      <ul className={css.stats}>
        <li className={css.statsCard}>
          <span>Followers</span>
          <span className={css.statsNumber}>{stats.followers}</span>
        </li>

        <li className={css.statsCard}>
          <span>Views</span>
          <span className={css.statsNumber}>{stats.views}</span>
        </li>

        <li className={css.statsCard}>
          <span>Likes</span>
          <span className={css.statsNumber}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
