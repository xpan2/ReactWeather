var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var locationRef = this.refs.location;
    var location = locationRef.value;
    if (location.length > 0) {
      locationRef.value = '';
      this.props.onSearch(location);
    }
  },

  render: function () {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div><input type="text" ref="location" placeholder="Enter city name"/></div>
          <div><button>Get Weather</button></div>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
