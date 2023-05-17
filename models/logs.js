const mongoose = require('mongoose');

const logsSchema = new mongoose.Schema (
    {
        title: {type: String, require: true},
        entry: {type: String, require: true},
        shipIsBroken: {type: Boolean, default: true}
    },
    {
        timestamps: true
    }
)

const Logs = mongoose.model('Logs', logsSchema);

module.exports = Logs;
