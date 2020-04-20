import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
function NavigationBar(){
	return(
			<Navbar bg="dark" variant="dark">
			<Link to = {""} className="navbar-brand">
				GROCERY STORE
			</Link>
			
			 <Nav className="mr-auto">
		      <Link to={"entry"} className="nav-link">Product Entry</Link>
		      <Link to={"billing"} className="nav-link">Billing</Link>
		      
		    </Nav>
		    
		    </Navbar>
	);
}

export default NavigationBar;