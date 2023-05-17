const React = require('react');

class Index extends React.Component {

    render()
    {
        const { logs } = this.props;

        return (
            <div>
                <a href='/logs/new'>Create new log</a><br></br>
                Collecting logs ...
                    {
                        logs ? logs.map((log, i) => {
                            return (
                                <div>
                                <ul>
                                    <li>
                                        <a href={`/logs/${log._id}`}>{log.title}</a>
                                    </li>
                                    <form action={`/logs/${log._id}?_method=DELETE`} method='POST'>
                                        <input type='submit' value='DELETE'></input>
                                    </form>
                                    <a href={`/logs/${log._id}/edit`}>Edit this log</a>
                                </ul>
                                </div>

                            )
                        })
                    : <div>No logs found. <a href='/'>Return to homepage</a></div>}
            </div>
        )
    }
}

module.exports = Index;
