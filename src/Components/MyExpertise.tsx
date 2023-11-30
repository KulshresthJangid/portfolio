import React from "react";
import "../public/css/expertise.css";

const MyExpertise = () => {
  return (
    <>
      <section
        className="expertises"
        style={{
          width: "100%",
          background: "",
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <div
          className="main-expertise"
          style={{
            display: "flex",
            alignContent: "center",
          }}
        >
          <div className="software-development-expertise expertise" style={{borderRightWidth: '2px'}}>
            <div className="heading">
              <img className="expertise-icon" src="/images/backend.png" alt="image of backend" />
              <h1><strong>Backend Development</strong></h1>
            </div>
            <div className="content">
              <p>
                Experience in both functional and OOP: Java, Python, JavaScript,
                TypeScript.
              </p>
            </div>
          </div>
          <div className="backend-development-expertise expertise" style={{borderLeftWidth: '2px'}}>
            <div className="heading">
              <img className="expertise-icon" style={{height: '50px'}} src="/images/frontend.png" alt="image of backend" />
              <h1>Frontend Development</h1>
            </div>
            <div className="content">
              <p>
                Experience in both functional and OOP: Java, Python, JavaScript,
                TypeScript.
              </p>
            </div>
          </div>
          <div className="frontend-development-expertise expertise" style={{borderLeftWidth: '1px'}}>
            <div className="heading">
              <img className="expertise-icon" src="/images/backend.png" alt="image of backend" />
              <h1>Backend Development</h1>
            </div>
            <div className="content">
              <p>
                Experience in both functional and OOP: Java, Python, JavaScript,
                TypeScript.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyExpertise;
