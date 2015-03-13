var React = require('react');
var TaskListComponent = require('../components/TaskListComponent');
var changeCase = require('change-case');

// localhost:8192/api/state
//{"pendingTasks":[],"stagingTasks":[],"activeTasks":[],"killableTasks":[]}

var TasksComponent = React.createClass({
  displayName: "TasksComponent",

  _prettyName: function( name ) {
    name = changeCase.sentenceCase(name);
    name = changeCase.titleCase(name);
    return name;
  },

  render: function () {

    var taskTypes = [];
    var keys = [];
    // gather the keys, so task lists can be sorted
    for (var key in this.props.tasks) {
      if (this.props.tasks.hasOwnProperty(key)) {
        console.log("found key: " + key);
        keys.push(key);
      }
    }
    keys.sort();
    console.log('Sorted Keys: ' + keys);
    for (var ii=0; ii<keys.length; ii++) {
       var key = keys[ii];
       console.log('processing key: ' + key);
       taskTypes.push( <TaskListComponent key={key} name={this._prettyName(key)} taskNames={this.props.tasks[key]} /> );
       taskTypes.push( <hr key={'hr_'+key} /> );
    }

    return (<div>{taskTypes}</div>);

    //return(
    //  <h1>{JSON.stringify(this.props.tasks)}</h1>
    //)
   }

});

module.exports = TasksComponent;
