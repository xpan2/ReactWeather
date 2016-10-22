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
          <div><input type="search" ref="location" placeholder="Search weather by city"/></div>
          <div><button className="button expanded hollow">Get Weather</button></div>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
