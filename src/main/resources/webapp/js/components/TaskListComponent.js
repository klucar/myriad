var React = require('react');

var TaskListComponent = React.createClass({
  displayName: "TaskListComponent",

  render: function () {

    // props: name, tasks
    var html = [];
    html.push( <h2>{this.props.name}</h2> );
    for( var ii=0; ii < tasks.length; ii ++ ) {
      html.push(<pre>{tasks[ii]}</pre>);
    }

    return (html);
   }

});

module.exports = TaskListComponent;
