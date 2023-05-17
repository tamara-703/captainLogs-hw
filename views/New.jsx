const React = require('react');

class New extends React.Component {

    render()
    {
        return (
            <div>
                <form action='/logs' method='POST'>
                    Title: <input type='text' name='title'></input><br></br>
                    Entry: <textarea type='textarea' name='entry'></textarea><br></br>
                    Is the ship broken? <input type='checkbox' name='shipIsBroken'></input><br></br>
                    <input type='submit' name='submitButton' value='SUBMIT'></input>

                </form>
            </div>
        )
    }
}

module.exports = New;
