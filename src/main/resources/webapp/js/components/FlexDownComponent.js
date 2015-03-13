var React = require('react');
var ReactBootstrap = require('react-bootstrap')
  , Input = ReactBootstrap.Input
  , Row = ReactBootstrap.Row
  , Col = ReactBootstrap.Col
  , Button = ReactBootstrap.Button;

// PUT api/clusters/flexdown { "instances":1 }//
// props: profiles
var FlexDownComponent = React.createClass({
  displayName: "FlexDownComponent",

  render: function () {

    //TODO: get current number of instances available to flex down from the status to set max flex down value
    return(
      <div>
        <Row>
          <Col md={4} mdOffset={1} >
            <Input label="Instances" help="Enter the number of instances to flex down." wrapperClassName="wrapper">
                  <input type="number" size="3" defaultValue="1" min="1" max="999" step="1"/>
            </Input>
          </Col>
        </Row>
        <Row>
          <Col md={2} mdOffset={5} >
              <Button bsStyle="primary" bsSize="large">Flex Down</Button>
          </Col>
        </Row>

      </div>
   )}


  });

module.exports = FlexDownComponent;
