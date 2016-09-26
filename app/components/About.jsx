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
      <h1 className="text-centered">About</h1>
      <p>This is a weather app built on React!</p>
      <p>
        Here are some of the tools I used:
      </p>
      <ol>
        <li>
          <a href="https://facebook.github.io/react">React</a>Javascript
            framework
        </li>
        <li>
          <a href="https://openweathermap.org">Open Weather Map</a>Used to
            search weather data by city
        </li>
      </ol>
    </div>
  );
};

module.exports = About;
