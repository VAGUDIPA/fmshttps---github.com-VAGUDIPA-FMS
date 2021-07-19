import React from "react";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h1>FMS</h1>
            <ui className="list-unstyled">
              <li>Course</li>
              <li>Faculty</li>
              <li>Partcipant</li>
            </ui>
          </div>

          {/* Column2 */}
          <div className="col">
            <h1>Explore</h1>
            <ui className="list-unstyled">
              <li>Home</li>
              <li>About</li>
              <li>Carriers</li>
            </ui>
          </div>

          {/* Column3 */}
          <div className="col">
            <h1>Follow</h1>
            <ui className="list-unstyled">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
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
    </div>
  );
}

export default Footer;
