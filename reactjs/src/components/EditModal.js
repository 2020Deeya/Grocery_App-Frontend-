import React, {useState} from 'react';
import {Modal,Form,Col,Button} from 'react-bootstrap';
import axios from 'axios';

function EditModal(props){
    const {show,handleClose,getData,item} = props
    const updateData=async (e,name,price,gst,id)=>{

		e.preventDefault();

       await axios.put(`http://localhost:8080/items/${id}`,{
			"name":name,
			"price":price,
			"gst":gst
		})
   };

	const [name,setName]=useState(item.name);
    const [gst,setGst]=useState(item.gst);
    const [price,setPrice]=useState(item.price);
    
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
console.log(show);
   return(
    <Modal show={show} onHide={()=>{handleClose()}} animation={false}>
    <Modal.Header closeButton>
      <Modal.Title>Update Form</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <Form onSubmit={async(e)=>{await updateData(e,name, price,gst)}} id="productFormId">
        
        <Form.Row>
        
         <Form.Group as={Col} controlId="formGridcode">
          <Form.Label>Product Name</Form.Label>
          <Form.Control required type="text" name="name" value={name} onChange={nameChange} placeholder={item.name} />
          </Form.Group>
          
          <Form.Group as={Col} controlId="formGridname">
          <Form.Label>Price</Form.Label>
          <Form.Control name="price" value={price} onChange={priceChange} placeholder={item.price} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridname">
          <Form.Label>GST in percentage</Form.Label>
          <Form.Control  name="gst" value={gst} onChange={gstChange} placeholder={item.gst} />
          </Form.Group>
          
         </Form.Row>
         
    
                             
          
         </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="success" type="submit" onClick={async(e)=>{
              await updateData(e,name,price,gst,item.id);
              await getData();
              handleClose();
          }}>
          Submit
          </Button>  
    </Modal.Footer>
  </Modal>
   )
}

export default EditModal;