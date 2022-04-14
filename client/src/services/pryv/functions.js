/// Retrieve last events
export const getLastEvents = async (connection) => {
    console.log("Getting events...");
    var data = [
        {
            method: "events.get",
            params: {
                limit: 20,
            },
        },
    ];
    connection.api(data).then(function (res, err) {
        // convert pryv.Event objects to plain data for display
        console.log(res[0].events);
    });
};

export const createEvent = async (connection, content) => {
    console.log(connection);
    console.log("Creating event...");
    const params = {
        streamId: "meet_my_needs_store",
        type: "note/txt",
        content: content,
    };
    var data = [
        {
            method: "events.create",
            params,
        },
    ];
    connection.api(data).then(function (res, err) {
        if (err) {
            console.log("...error: " + JSON.stringify(err));
        }
        console.log("...event created: " + JSON.stringify(res));
    });
};
