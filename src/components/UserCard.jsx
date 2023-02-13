import React from "react";
import { Card, Button } from "react-bootstrap";

const UserCard = ({ item }) => {
	return (
		<Card style={{ width: "18rem" }}>
			<Card.Img variant='top' src={item.img} />
			<Card.Body>
				<Card.Title>Phone:{item.phone}</Card.Title>
				<Card.Text>
					Name:{item.name} <br />
					Surname:{item.surname}
				</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default UserCard;
