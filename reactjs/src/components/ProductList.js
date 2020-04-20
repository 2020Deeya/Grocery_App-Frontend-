import React,{useState,useEffect} from 'react';
import {Card,Table,Button,Modal,Form,Col} from 'react-bootstrap';
import axios from 'axios';
import EditModal from './EditModal';

function ProductList(props){
	const [show, setShow] = useState(0);
	const [items, setItems] = useState(null);
	
	const getData=async ()=>{
		
		const res = await axios.get('http://localhost:8080/items')
		setItems(res.data)
   };
	useEffect(()=>{
		
	  getData();
      
	},[]
	);

	const handleClose = () => setShow(0);
	const handleShow = (id) => setShow(id);



	return(
			<Card className={"border border-dark bg-dark text-white"}>
			  <Card.Body>
			  <Table striped bordered hover variant="dark">
			  <thead>
			    <tr>
			      <th>product_code</th>
			      <th>product_name</th>
			      <th>product_price(1 unit price)</th>
			      <th>product_gst(GST %)</th>
				  <th>Remove Product</th>
			    </tr>
			  </thead>
			  <tbody>
				  {
					  items!==null?items.map(item=>{
								 return(<tr key={item.id}>
									 <td>{item.id}</td>
									 <td>{item.name}</td>
									 <td>{item.price}</td>
									 <td>{item.gst}</td>
									 <td>
									 <Button size = "sm" variant ="outline-primary" onClick={()=>{handleShow(item.id)}}>Edit</Button>{' '}
		                                <EditModal show={show===item.id} handleClose={handleClose} getData = {getData} item = {item}/>
										 <Button size = "sm" variant ="outline-danger" type ="submit" className="warning" onClick={async()=>{
											  await axios.delete(`http://localhost:8080/items/${item.id}`);
											  await getData();
										 }} >Delete</Button>
										 
									 </td>
								 </tr>)
							 }):
							<tr align ="center">
			      
							<td colSpan="5">No product Available</td>
		  
						  </tr>
					
				  }
			    
			  </tbody>
			  </Table>
              </Card.Body>
			  
			</Card>
			);
}

export default ProductList;