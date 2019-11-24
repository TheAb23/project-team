import React, { Component } from 'react'
import shopper from '../imge/shopper.png'
import RedSeaMall from '../imge/RedSeaMall.jpg'
import Shopping from '../imge/shopping.png'
import LePrestige from '../imge/LePrestige.jpg'
import personalShopper from '../imge/personalShopper.jpg'
import Restaurant from '../imge/Restaurant.png'
import muvi from '../imge/muvi.png'
import mallsExplore from '../components/mallsExplore'
import '../comp.css';
import { Container ,Col,  Row, Carousel ,Card} from 'react-bootstrap';

import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";

export default class home extends Component {
    render() {
        return (
<div>
<Container className="curve">
  <Row className="justify-content-md-center"><Col md="auto"> What is new ?</Col></Row>
  <br/>

  <Row className="justify-content-md-center">
    <Col xs lg="12" > 
    <Carousel>
  <Carousel.Item>
    <img className="d-block w-100" src={shopper} alt="First slide"/>
  <Carousel.Caption>

      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={RedSeaMall}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Shopping}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</Col>
  </Row>



<br/>
<Row className="justify-content-md-center"><Col md="auto"> What are you Looking For  ?</Col> </Row>
 
</Container>


<MDBContainer className="mt-5">
    
         
        <MDBRow className="mt-4">
          <MDBCol md="6">
            <MDBView hover zoom>
            
              <img src={LePrestige} className="img-fluid" alt=""/>
              <MDBMask className="flex-center">
              <p className="white-text"><a href="/mallsExplore"> Malls  </a></p>
                
              </MDBMask>
            </MDBView>
          </MDBCol>
          <MDBCol md="6">
            <MDBView hover zoom>
              <img
                src={muvi}
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center">
                <p className="white-text">Entertainment</p>
              </MDBMask>
            </MDBView>
          </MDBCol>
        
        </MDBRow>

        <MDBRow className="mt-4">
          <MDBCol md="6">
            <MDBView hover zoom>
              <img
                src="https://mdbootstrap.com/img/Others/documentation/img%20(131)-mini.jpg"
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center">
                <p className="white-text">Event & Activity</p>
              </MDBMask>
            </MDBView>
          </MDBCol>
          <MDBCol md="6">
            <MDBView hover zoom>
              <img
                src={Restaurant}
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center">
                <p className="white-text">Restaurant</p>
              </MDBMask>
            </MDBView>
          </MDBCol>
        
        </MDBRow>
<br/>
        <MDBRow> 
        <MDBCol>
            <MDBView hover zoom>
              <img
                src={personalShopper}
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center">
                <p className="white-text">Helps!</p>
              </MDBMask>
            </MDBView>
          </MDBCol>
        </MDBRow>
        <br/>

      </MDBContainer>

            </div>
        )
    }
}
