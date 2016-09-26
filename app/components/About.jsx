var React = require('react');

// var About = React.createClass({
//   render: function () {
//     return (
//       <h3>About Component</h3>
//     );
//   }
// });

// stateless component
var About = (props) => {
  return (
    <div>
      <h3>About</h3>
      <p>Welcome about page!</p>
    </div>
  );
};

module.exports = About;
