import React, { Component } from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

export default class footer extends Component {
    render() {
        return (
            <MDBFooter color="grey" className="dark-black-text">
      <MDBContainer>
       
      </MDBContainer>
      <div  color="black" className="footer-copyright text-center py-3" >
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.MDBootstrap.com"> viral</a>
        </MDBContainer>
      </div>
    </MDBFooter>
        )
    }
}
