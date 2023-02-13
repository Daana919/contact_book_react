import React from "react";
import UserCard from "./UserCard";

const UserList = ({ users }) => {
	return (
		<>
			<center style={{ fontSize: "30px", margin: "20px" }}>Contacts</center>
			<div className='d-flex justify-content-between flex-wrap w-75 m-auto'>
				{users?.map(item => (
					<UserCard key={item.id} item={item} />
				))}
			</div>
		</>
	);
};

export default UserList;
