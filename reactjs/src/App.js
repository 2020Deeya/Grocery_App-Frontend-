import React from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import ProductEntry from './components/ProductEntry';
import ProductList from './components/ProductList';
import Billing from './components/Billing';
import {Container,Row,Jumbotron,Col} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
	const marginTop = {
			marginTop :"20px"
	}
  return (
    <Router>
        <NavigationBar/>
       <Container>
       <Row>
       <Col lg={12} style={marginTop}> 
       <Switch>
         <Route path="/" exact component={Welcome}/>
         <Route path="/entry" exact component={ProductEntry}/>
         <Route path="/list" exact component={ProductList}/>
         <Route path="/billing" exact component={Billing}/>         
       </Switch>
       </Col>
       </Row>
       </Container>
       <Footer/>
     </Router>
  );
}

export default App;
