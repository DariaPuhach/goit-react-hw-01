import css from "../FriendListItem/FriendListItem.module.css";
export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  const status = isOnline ? "online" : "offline";

  return (
    <div className={css.card}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p className={css[status]}>{isOnline ? "online" : "offline"}</p>
    </div>
  );
}