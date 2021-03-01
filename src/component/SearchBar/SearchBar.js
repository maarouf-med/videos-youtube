import React, { useState } from "react";
import { InputGroup, FormControl, Button, Form } from "react-bootstrap";
import styled from "./SearchBar.module.css";

function SearchBar({ termSubmit }) {
	const [term, setTerm] = useState("");

	const onTermSubmit = (e) => {
		e.preventDefault();
		termSubmit(term);
	};

	return (
		<Form onSubmit={onTermSubmit}>
			<InputGroup className={styled.searchBar}>
				<FormControl
					placeholder="Search..."
					aria-label="Recipient's username"
					aria-describedby="basic-addon2"
					value={term}
					onChange={(e) => setTerm(e.target.value)}
				/>
				<InputGroup.Append>
					<Button type="submit" variant="outline-secondary">
						Search
					</Button>
				</InputGroup.Append>
			</InputGroup>
		</Form>
	);
}

export default SearchBar;
