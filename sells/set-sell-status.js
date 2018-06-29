const db = require('../database/db');
const findStatus = require('../status/find-status');

module.exports = function(sell, statusname) {
    return new Promise(function(resolve) {
        findStatus(statusname).then(function (status) {
            let query = 'update sells set status_id=' + status + ' where id = ' + sell;
            db.query(query, function (error, sells) {
                if (error) throw error;
                console.log('sell ' + sell + ' is complete');
                resolve();
            });
        });
    });
}
