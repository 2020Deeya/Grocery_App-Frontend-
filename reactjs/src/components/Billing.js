import React,{useState} from 'react';
import {Card,Table,Form,Button,Col} from 'react-bootstrap';
import axios from 'axios';

function Billing(){
	const [id,setId] = useState(0);
	const [quantity,setQuantity]=useState(0);
	const [total,setTotal]=useState(0.0);

	const submitProduct=async(e)=>{
		e.preventDefault();
	   const res = await axios.get(`http://localhost:8080/items/${id}`);
       setTotal(total + quantity*res.data.price*(1+0.01*res.data.gst));	   
	}

	const idChange=(e)=>{
		setId(e.target.value);
         e.preventDefault();
	}

	const quantityChange=(e)=>{
		setQuantity(e.target.value);
         e.preventDefault();
	}


	return( 
			<Card className={"border border-dark bg-dark text-white"}>
			<Card.Header>Adding Product for Billing </Card.Header>
			
			<Form onSubmit={submitProduct} id="productFormId">
			
			  <Card.Body>
			  
			   <Form.Row>
			  
			   <Form.Group as={Col} controlId="formGridcode">
			    <Form.Label>Product_code</Form.Label>
			    <Form.Control required type="text" name="id" value={id} onChange={idChange} placeholder="Enter id" />
			    </Form.Group>
			    
			    <Form.Group as={Col} controlId="formGridname">
			    <Form.Label>Quantity</Form.Label>
			    <Form.Control required type="text" name="quantity" value={quantity} onChange={quantityChange} placeholder="Enter quantity" />
	            </Form.Group>

			    
			   </Form.Row>
			   </Card.Body>
			   
			    <Card.Footer style={{"textAlign":"right"}}>
			    <Button variant="success" type="submit" onClick={async(e)=>{
					await submitProduct(e);
				}}>
			    Enter
			    </Button>
			    </Card.Footer >                       
			    
			   </Form>
			    The Total is {total}
			   </Card>
		);

}

export default Billing