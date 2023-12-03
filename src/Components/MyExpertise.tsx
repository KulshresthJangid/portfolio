import React from "react";
import "../public/css/expertise.css";
import { frontEnd } from "../public/images/frontend";
import { backendImg } from "../public/images/backend";

const MyExpertise = () => {
  return (
    <>
      <section
        id="expertise" className="expertises"
        // style={{
        //   width: "100%",
        //   background: "",
        //   display: "flex",
        //   justifyContent: "center",
        // }}
        style={{
          minHeight: "20vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 style={{marginBottom: '90px', fontWeight: 'bold'}}>My Expertises</h1>
        <div
          className="main-expertise"
          style={{
            display: "flex",
            alignContent: "center",
          }}
        >
          <div
            className="software-development-expertise expertise"
            style={{ borderRightWidth: "2px" }}
          >
            <div className="heading">
              <img
                className="expertise-icon"
                src={frontEnd}
                alt="image of backend"
              />
              <div className="content-heading">
                <h1>
                  <strong>Backend Development</strong>
                </h1>
                <h2>Spring Boot, NodeJs, MeteorJs, Django</h2>
              </div>
            </div>
            <div className="content">
              <p>
                Specialized in designing and implementing backend architectures,
                I bring a wealth of experience in \
                <strong> Spring Boot, NodeJs, MeteorJs, Django</strong> to
                deliver efficient and high-performance solutions.
              </p>
            </div>
          </div>
          <div
            className="backend-development-expertise expertise"
            style={{ borderLeftWidth: "2px" }}
          >
            <div className="heading">
              <img
                className="expertise-icon"
                style={{ height: "50px" }}
                src={backendImg}
                alt="image of backend"
              />
              <div className="content-heading">
                <h1>
                  <strong>Frontend Development</strong>
                </h1>
                <h2>ReactJs, AngularJs</h2>
              </div>
              <h1></h1>
            </div>
            <div className="content">
              <p>
                Proficient in a range of front-end technologies, including
                <strong> ReactJs, AngularJs, VueJs</strong>, I leverage the
                latest tools to create responsive and dynamic web applications.
              </p>
            </div>
          </div>
          <div
            className="frontend-development-expertise expertise"
            style={{ borderLeftWidth: "1px" }}
          >
            <div className="heading">
              <img
                className="expertise-icon"
                src="/images/backend.png"
                alt="image of backend"
              />
              <div className="content-heading">
                <h1>
                  <strong>App Development</strong>
                </h1>
                <h2>Flutter, React Native</h2>
              </div>
            </div>
            <div className="content">
              <p>
                Experienced in integrating third-party APIs, services, and
                hardware components, I ensure that apps not only meet user
                expectations but also seamlessly interact with external systems.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyExpertise;
