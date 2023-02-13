import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

const AddContact = ({ addUser }) => {
	const [name, setName] = useState("");
	const [surname, setSurname] = useState("");
	const [img, setImg] = useState("");
	const [phone, setPhone] = useState("");

	function createUser() {
		if (!name || !surname || !phone || !img) {
			alert("Some inputs are empty!");
		}

		let newObj = {
			name,
			surname,
			phone,
			img,
			id: Date.now(),
		};
		console.log();
		addUser(newObj);
		console.log(newObj);

		setName("");
		setSurname("");
		setPhone("");
		setImg("");
	}

	return (
		// <div>
		// 	<InputGroup className='mt-10'>
		// 		<InputGroup.Text id='inputGroup-sizing-default'>Name</InputGroup.Text>
		// 		<Form.Control aria-label='Default' aria-describedby='inputGroup-sizing-default' value={name} onChange={e => setName(e.target.value)} />
		// 	</InputGroup>
		// 	<InputGroup className='mb-o'>
		// 		<InputGroup.Text id='inputGroup-sizing-default'>Surname</InputGroup.Text>
		// 		<Form.Control aria-label='Default' aria-describedby='inputGroup-sizing-default' value={surname} onChange={e => setSurname(e.target.value)} />
		// 	</InputGroup>
		// 	<InputGroup className='mb-0'>
		// 		<InputGroup.Text id='inputGroup-sizing-default'>Phone number</InputGroup.Text>
		// 		<Form.Control aria-label='Default' aria-describedby='inputGroup-sizing-default' value={phone} onChange={e => setPhone(e.target.value)} />
		// 	</InputGroup>
		// 	<InputGroup className='mb-0'>
		// 		<InputGroup.Text id='inputGroup-sizing-default'>Image URL</InputGroup.Text>
		// 		<Form.Control aria-label='Default' aria-describedby='inputGroup-sizing-default' value={img} onChange={e => setImg(e.target.value)} />
		// 	</InputGroup>
		// 	<div className='d-grid gap-2 mt-10'>
		// 		<Button variant='primary' size='lg' onClick={createUser}>
		// 			Create New Contact
		// 		</Button>
		// 	</div>
		// </div>
		<Form>
			<Form.Group className='mb-3 mt-10' controlId='formBasicEmail'>
				<Form.Control type='text' placeholder='Enter name' value={name} onChange={e => setName(e.target.value)} />
			</Form.Group>

			<Form.Group className='mb-3'>
				<Form.Control type='text' placeholder='Enter surname' value={surname} onChange={e => setSurname(e.target.value)} />
			</Form.Group>
			<Form.Group className='mb-3'>
				<Form.Control type='number' placeholder='Enter phone number' value={phone} onChange={e => setPhone(e.target.value)} />
			</Form.Group>
			<Form.Group className='mb-3'>
				<Form.Control type='text' placeholder='Enter image URL' value={img} onChange={e => setImg(e.target.value)} />
			</Form.Group>
			<Button variant='outline-primary' onClick={createUser}>
				Create New Contact
			</Button>
		</Form>
	);
};

export default AddContact;
