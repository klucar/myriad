var React = require('react');

//{"small":{"cpu":"1","mem":"1100"}}

var ProfileComponent = React.createClass({
  displayName: "ProfileComponent",


  // props: profile
  render: function () {

    return(
      <div>
        <h3>Profile: {this.props.name}</h3>
        <div className="well">
          <h5>CPU: {this.props.profile.cpu}</h5>
          <h5>MEM: {this.props.profile.mem}</h5>
        </div>
      </div>
   )}


  });

module.exports = ProfileComponent;
