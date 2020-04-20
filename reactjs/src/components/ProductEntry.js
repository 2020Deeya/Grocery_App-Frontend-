import React,{useState} from 'react';
import {Card,Table,Form,Button,Col} from 'react-bootstrap';
import axios from 'axios';
import ProductList from './ProductList';
function ProductEntry(props){
	
	const [name,setName]=useState("");
	const [price,setPrice]=useState(0);
	const [gst,setGst]=useState(0.0);

	

	const submitProduct=async(e)=>{
		e.preventDefault();
       await axios.post("http://localhost:8080/items",{
			"name":name,
			"price":price,
			"gst":gst
		})
	}
	

	const nameChange=(e)=>{
		setName(e.target.value);
         e.preventDefault();
	}

	const priceChange=(e)=>{
		setPrice(e.target.value);
         e.preventDefault();
	}

	const gstChange=(e)=>{
		setGst(e.target.value);
         e.preventDefault();
	}

	

	return( 
			<Card className={"border border-dark bg-dark text-white"}>
			<Card.Header>Adding Product </Card.Header>
			
			<Form onSubmit={submitProduct} id="productFormId">
			
			  <Card.Body>
			  
			   <Form.Row>
			  
			   <Form.Group as={Col} controlId="formGridcode">
			    <Form.Label>Product Name</Form.Label>
			    <Form.Control required type="text" name="name" value={name} onChange={nameChange} placeholder="Enter Name" />
			    </Form.Group>
			    
			    <Form.Group as={Col} controlId="formGridname">
			    <Form.Label>Price</Form.Label>
			    <Form.Control required type="text" name="price" value={price} onChange={priceChange} placeholder="Enter Price" />
	            </Form.Group>

				<Form.Group as={Col} controlId="formGridname">
			    <Form.Label>GST in percentage</Form.Label>
			    <Form.Control required type="text" name="gst" value={gst} onChange={gstChange} placeholder="Enter GST" />
	            </Form.Group>
			    
			   </Form.Row>
			   </Card.Body>
			   
			    <Card.Footer style={{"textAlign":"right"}}>
			    <Button variant="success" type="submit" onClick={async(e)=>{
					await submitProduct(e);
				}}>
			    Submit
			    </Button>
			    </Card.Footer >                       
			    
			   </Form>
			   <ProductList />
			  </Card>
		);

}

export default ProductEntry