import { useState, useReducer } from "react";
const DataReducer = () => {
  const initialValue = [
    { id: 1001, username: "Jack", age: 23, isAdmin: false },
    { id: 1002, username: "John", age: 20, isAdmin: true },
    { id: 1003, username: "Marry", age: 21, isAdmin: false },
  ];
  function userReducer(users: any, action: any) {
    switch (action.type) {
      case "ADD_USER":
        break;
 
      default:
        return users;
    }
  }
  const [users, dispatchUser] = useReducer(userReducer, initialValue);
  const [newUser, setNewUser] = useState({
    id: "",
    username: "",
    age: 0,
    isAdmin: "No",
  });
 
  function handleChange(e: any) {
    console.log(e);
    console.log(e.target.name);
    console.log(e.target.value);
    const { name, value } = e.target;
    setNewUser((current: any) => {
      if (e.target.type === "checkbox") {
        return {
          ...current,
          isAdmin: e.target.checked ? "Yes" : "No",
        };
      } else {
        return {
          ...current,
          [name]: value,
        };
      }
    });
  }
 
  function handleSubmit(e: any) {
    // console.log({type...newUser, id: uuidv4() });
    console.log(newUser);
    dispatchUser({ type: "ADD_USER", payload: { ...newUser } });
  }
  return (
    <div className='w-9/12 mx-auto'> 
    <h3 className="text-lg font-semibold mb-4">User Registration</h3>
    <div className="forms">
      <form action="">
        <p>
          <input
            type="text"
            placeholder="Enter Username"
            name="username"
            value={newUser.username}
            onChange={handleChange}
          />
        </p>
        <p>
          <input
            type="number"
            placeholder="Enter User Age"
            name="age"
            value={newUser.age}
            onChange={handleChange}
          />
        </p>
        <p>
          isAdmin?
          <input
            type="checkbox"
            name="isAdmin"
            value={newUser.isAdmin}
            onChange={handleChange}
          />
        </p>
 
        <button>Update</button>
        <button>Add</button>
      </form>
      {users.map((user: any) => {
        return (
          <div key={user.id}>
            <h2>Name: {user.username}</h2>
            <p>Age: {user.age}</p>
          </div>
        );
      })}
    </div>
    </div>
  );
};
 
export default DataReducer;