import {Modal , Table,Button,Form,Col} from 'react-bootstrap';
import React,{useState,useEffect} from 'react';
import axios from 'axios';


function UpdateModal(){
    const [id,setId] = useState(0);
    
    const [name,setName]=useState("");
	  const [price,setPrice]=useState(0);
    const [gst,setGst]=useState(0.0);
    const [show, setShow] = useState(false);

    const [items, setItems] = useState(null);
	
	
	const getData=async ()=>{
		
		const res = await axios.get('http://localhost:8080/items')
		setItems(res.data)
   };
	useEffect(()=>{
		
	  getData();
      
	},[]
	);

    
  const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	
	const submitProduct=async(e)=>{
		e.preventDefault();
		await axios.put(`http://localhost:8080/items/${id}`);
		await getData();

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

  return (
      <>
    <Button size = "sm" variant ="outline-primary" onClick={handleShow}>Edit</Button>{' '}
    <Modal show={show} onHide={handleClose} animation={false}>
    <Modal.Header closeButton>
      <Modal.Title>Update Form</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <Form onSubmit={submitProduct} id="productFormId">
        
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
         
    
          <Button variant="success" type="submit" onClick={async(e)=>{
              await submitProduct(e);
          }}>
          Submit
          </Button>                      
          
         </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={handleClose}>
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal>
  </>
  );


}
export default UpdateModal;