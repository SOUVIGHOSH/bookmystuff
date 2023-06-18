import data from "../../data/static.json";

const { users } = data;

export default function UserPicker({ onChange }) {
  return (
    <div className="userpicker">
      <select
        onChange={(event) => {
          onChange(event.target.value);
        }}
      >
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
}
