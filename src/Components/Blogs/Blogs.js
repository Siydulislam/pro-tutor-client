import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1>Difference between authorization and authentication.</h1>
            <p>Answer:Though both Authentication and Authorization are used interchangeably, there are some difference between them. In Authentication process, the identity of a user is verified to access the system. On the other hand, Authorization validated the previously verified user. Authentication is done before the authorization process and vice-versa.</p>
            <h1>Why are you using firebase? What other options do you have to implement authentication?</h1>
            <p>Answer: Firebase, backed by google, is a application software that helps developers to develop iOS, Android and web apps. Firebase is used for different types of usage such as Analytics, Authentication, Cloud Messaging, Realtime Database, and more. There are so many options other than Firebase such as Auth0, Passport, MongoDB, Okta, Amazon Cognito, etc.</p>
            <h1>What other services does firebase provide other than authentication?</h1>
            <p>Answer: Besides Authentication, Firebase provides many services. Some are Cloud Messaging, Google Analytics, Hosting, Cloud Storage etc. </p>
        </div>
    );
};

export default Blogs;