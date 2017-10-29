module.exports = function(req, res) {

    let jsonString = '';

    req.on('data', function (data) {
        jsonString += data;
    });

    req.on('end', function () {
        const reqJSON = JSON.parse(jsonString);
        console.log(reqJSON);
        setTimeout(function () {
            return res.json({
                id: 23
            });
        }, 2000);
    });
}

