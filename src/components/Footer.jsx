import React from "react";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Icon } from "@material-ui/core";
import FMSlogo from "./../images/Fmslogo.jpg"

function Footer() {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="row">
        <div className="col" > 
            <h2>FMS</h2>
            <img src={FMSlogo} alt="" width="90" height="65" />
          </div>
          {/* Column1 */}
          <div className="col">
            <h3>Services</h3>
            <ui className="list-unstyled">
              <li>Course</li>
              <li>Faculty</li>
              <li>Partcipant</li>
            </ui>
          </div>

          {/* Column2 */}
          <div className="col">
            <h3>Explore</h3>
            <ui className="list-unstyled">
              <li>Home</li>
              <li>About</li>
              <li>Carriers</li>
            </ui>
          </div>

          {/* Column3 */}
          <div className="col">
            <h3>Follow</h3>
            <ui className="list-unstyled">
              {/* <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li> */}
               <Icon> <InstagramIcon /> </Icon>
            <Icon> <FacebookIcon /> </Icon>
            <Icon> <TwitterIcon /> </Icon>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            FMS Team | All rights reserved | Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;