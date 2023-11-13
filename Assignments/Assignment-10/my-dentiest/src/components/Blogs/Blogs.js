import React from "react";

const Blogs = () => {
  return (
    <div style={{ backgroundColor: "#FAF9F6" }} className="text-dark p-5">
      <div className="container">
        <div className="mb-5">
          <h2>1.Difference between authorization and authentication</h2>
          <h4>Authentication: </h4>
          <ul>
            <li>
              Authentication the process of identify the users. It verifies who
              the user is
            </li>
            <li>
              Authentication works through passwords, one-time pins, biometric
              information, and other information provided or entered by the
              user.
            </li>
            <li>
              Authentication is the first step of a good identity and access
              management process.{" "}
            </li>
            <li>
              Authentication is visible to and partially changeable by the user.{" "}
            </li>
          </ul>
          <h4>Authorization</h4>
          <ul>
            <li>
              Authorization determine the users role. Its check the user role
              weather it is admin or user.
            </li>
            <li>Authorization determines what resources a user can access.</li>
            <li>Authorization always takes place after authentication.</li>
            <li>Authorization is not visible to or changeable by the user.</li>
          </ul>
        </div>

        <div className="mb-5 mt-5">
          <h2>
            2. Why are you using firebase? What other options do you have to
            implement authentication?
          </h2>
          <p>
            I am using firebase because it provides authentication of a website
            and it is totally free.I can make login and signup or registration
            and hosting this on the internet very easily using firebase. It
            provides the services for various platforms. It provides not only
            authentication login, signup but also there are lots of features
          </p>
          <h5>
            There are some alternatives of firebase to implement authentication
            these are:
          </h5>
          <ul>
            <li>
              Parse. Parse is a complete open-source application stack and
              backend framework that offers a collection of tools and features
              to help you develop your apps.{" "}
            </li>
            <li>Back4App</li>
            <li>AWS Amplify</li>
            <li>Kuzzle</li>
            <li>Couchbase</li>
            <li>RxDB</li>
            <li>Flutter</li>
            <li>NativeScript</li>
          </ul>
        </div>
        <div>
          <h2>
            3. What other services does firebase provide other than
            authentication?
          </h2>
          <p>
            Firebase not only provides authentication but also it provides lot
            of services. I am providing some of these below:
          </p>
          <ul>
            <li>Cloud Firestore</li>
            <li>Real time Database</li>
            <li>Cloud Functions</li>
            <li>Hosting</li>
            <li>Cloud Storage</li>
            <li>Google Analytics</li>
            <li>Cloud Messaging</li>
            <li>Dynamic Links</li>
            <li>Dynamic Links</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
