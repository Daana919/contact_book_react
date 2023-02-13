import React, { useState } from "react";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import UserList from "./components/UserList";

const App = () => {
	const [users, setUsers] = useState([]);

	function addUser(newObj) {
		let newUsers = [...users];
		newUsers.push(newObj);
		setUsers(newUsers);
	}

	return (
		<div>
			<Header />
			<AddContact addUser={addUser} />
			<UserList users={users} />
		</div>
	);
};

export default App;
