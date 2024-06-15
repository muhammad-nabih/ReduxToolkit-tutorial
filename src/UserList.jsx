import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userFetch } from "./app/features/userSlice";

const UserList = () => {
  const dispatch = useDispatch();
  const { users, status, error } = useSelector((state) => state.users);

  useEffect(() => {
    if (status === "idle") {
      dispatch(userFetch());
    }
  }, [status, dispatch]);

  return (
    <div>
      <h1>User List</h1>
      {status === "loading" && <h2>Loading...</h2>}
      {status === "success" &&
        users.map((user) => (
          <h3
            key={user.id}
            className="bg-orange-900 my-3 text-2xl font-bold px-3 text-center text-zinc-200 py-2 w-9/12 rounded-md mx-auto "
          >
            <span>{user.id}-</span> {user.name}
          </h3>
        ))}
      {status === "error" && <h2>Error: {error}</h2>}
    </div>
  );
};

export default UserList;
