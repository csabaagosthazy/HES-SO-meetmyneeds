/// Retrieve last events
export const getLastEvents = async (connection) => {
    var data = [
        {
            method: "events.get",
            params: {
                limit: 20,
            },
        },
    ];
    const res = await connection.api(data).then(function (res, err) {
        // convert pryv.Event objects to plain data for display
        return res[0].events;
    });

    return res;
};

export const createEvent = async (connection, content) => {
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
    });
};
