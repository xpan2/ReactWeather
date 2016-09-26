var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function () {
//     var {temp, location} = this.props;
//
//     return (
//       <div>
//         <p>It is {temp} in {location}.</p>
//       </div>
//     );
//   }
// });

var WeatherMessage = ({temp, location}) => {
  return (
    <div>
      <h3 className="text-center">It is now {temp} in {location}.</h3>
    </div>
  );
};

module.exports = WeatherMessage;
