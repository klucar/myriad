var React = require('react');
var ReactBootstrap = require('react-bootstrap')
  , Input = ReactBootstrap.Input
  , Row = ReactBootstrap.Row
  , Col = ReactBootstrap.Col;

// PUT api/clusters/flexup { "profile":"small", "instances":1 }//
// props: profiles
var FlexUpComponent = React.createClass({
  displayName: "FlexUpComponent",

  render: function () {

    // create array of option tags
    var options = [];
    var keys = [];
    for( var key in this.props.profiles ) {
      if( this.props.profiles.hasOwnProperty(key) ) {
        keys.push(key);
      }
    }
    for( var ii = 0; ii < keys.length; ii++) {
      var key = keys[ii];
      var txt = key + '\t' + JSON.stringify(this.props.profiles[key]);
      console.log(txt)
      options.push( <option key={key} value={key}>{txt}</option> );
    }

    return(
      <div>
        <Row>
          <Col md={6}>
            <Input type="select" label='Profile'>
              { options }
            </Input>
          </Col>
          <Col md={4}>
            <Input label="Instances" help="Enter the number of instances to flex up." wrapperClassName="wrapper">
                  <input type="number" size="3" defaultValue="1" min="1" max="999" step="1"/>
            </Input>
          </Col>
        </Row>
        <Row>
          <Col md={2} mdOffset={5} >
            <Input type="submit" value="Flex Up" />
          </Col>
        </Row>

      </div>
   )}


  });

module.exports = FlexUpComponent;
