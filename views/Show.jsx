const React = require("react");

class Show extends React.Component {
  render() {
    const { log } = this.props;

    console.log("found log: " + log);

    return (
      <div>
        {log ? (
          <div>
            <ul>
              <li>Ship name: {log.title}</li>
              <li>Entry: {log.entry}</li>
              {log.shipIsBroken ? (
                <li>Status: the ship needs fixing</li>
              ) : (
                <li>Status: the ship is in good condition</li>
              )}
              <li>Created: {log.createdAt.toTimeString()}</li>
              <li>Updated: {log.updatedAt.toTimeString()}</li>
            </ul>
            <br></br>
            <a href='/logs'>Back</a>
          </div>
        ) : (
          <div>no information found</div>
        )}
      </div>
    );
  }
}

module.exports = Show;
