// IMPORT: DEPENDENCIES
import { useEffect, useState } from "react";

// IMPORT: BOOTSTRAP ELEMENTS
import { Row } from 'react-bootstrap';

// IMPORT: COMPONENTS
import Card from "../components/Card.js";

// IMPORT: CSS
import "../App.css";

// HOME FUNCTION MAIN --------------------------------------------------------------
export default function Home(){

	// DECLARE USE STATES
	const [items, setItems] = useState([]); 

	// ACTIVE FETCHING OF ITEMS FROM DATABASE
	useEffect(() =>{

		// FETCH ITEMS FROM DATABASE
		fetch(`${process.env.REACT_APP_API_URL}/items/all`)
		.then(response => response.json())
		.then(data => {
			// DISPLAY EACH ITEM
			setItems(data.itemList.map(item =>{		
				return(
					<Card key={item._id} itemProp={item}/>
				);
			}));
		})
	}, [items]);

	return(
		<>
			{ items }
		</>
	)
}