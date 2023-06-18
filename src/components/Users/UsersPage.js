import { useEffect, useState } from "react";
import data from "../../data/static.json";

const { users } = data;
export default function UsersPage({ user }) {
  const [user_profile, setUser] = useState(users[user - 1]);
  useEffect(() => {
    setUser(users[user - 1]);
  }, [user]);
  return (
    <div className="user-container">
      <div className="user-container__profile">
        <h1>{user_profile.name}</h1>
        <h4>{user_profile.title}</h4>
        <p>{user_profile.notes}</p>
      </div>
      <img
        src={"/asset/".concat(user_profile.img)}
        style={{ width: "30vw", height: "50vh" }}
        alt="profile pic"
      />
    </div>
  );
}
