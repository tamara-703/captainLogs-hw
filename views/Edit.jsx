const React = require("react");

class Edit extends React.Component {
  render() {
    return (

        <form action={`/logs/${this.props.log._id}?_method=PUT`} method='POST'>
          Title:{" "}
          <input
            type="text"
            name="title"
            defaultValue={this.props.log.title}
          ></input>
          Entry:{" "}
          <textarea
            type="textarea"
            name="entry"
            defaultValue={this.props.log.entry}
          ></textarea>
          Status:{" "}
          {this.props.log.shipIsBroken ? (
            <input type="checkbox" name="shipIsBroken" defaultChecked></input>
          ) : (
            <input type="checkbox" name="shipIsBroken"></input>
          )}
          <input type="submit" value='SUBMIT CHANGES'></input>
        </form>
    );
  }
}


module.exports = Edit;
