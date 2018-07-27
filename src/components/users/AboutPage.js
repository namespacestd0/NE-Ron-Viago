import React from 'react';

class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <p>This application uses React, Redux, React Router and a variety of other helpful libraries.</p>
        <p>It works in this mock educational institution with a manager and a teaching staff.
          When a new customer enters its contact information on the homepage, the manager may see the information in its page and assign its order to the teaching staff.
          When the teaching staff checks off a lesson, they may click the button to update the remaining hours in the system.
          Managers are able to add, edit, delete any student record. The managers' page is not hidden on the navigation bar to demonstrate the program.
        </p>
        <p>Xinghua Zhou</p>
      </div>
    );
  }
}

export default AboutPage;
