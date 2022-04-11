import React from "react";
import Pryv from "pryv";
import { useAuth } from "../../services/pryv/service";

const LoginPryv = () => {
    const { connection } = useAuth();
    const [note, setNote] = React.useState("");
    const [value, setValue] = React.useState("");

    React.useEffect(async () => {
        //const auth = await Pryv.Auth.setupAuth(authSettings, null, serviceInfoJson);
        //console.log(auth);
    }, []);

    /// Retrieve last events
    const getLastEvents = () => {
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

    const createEvent = (data) => {
        console.log(connection);
        if (!connection) {
            return alert("Please sign in first.");
        }
        console.log("Creating event...");
        var data = [
            {
                method: "events.create",
                params: data,
            },
        ];
        connection.api(data).then(function (res, err) {
            if (err) {
                console.log("...error: " + JSON.stringify(err));
            }
            console.log("...event created: " + JSON.stringify(res));
            getLastEvents();
        });
    };

    const createNoteEvent = () => {
        createEvent({
            streamId: "meet_my_needs_store",
            type: "note/txt",
            content: note,
        });
    };

    const createValueEvent = () => {
        createEvent({
            streamId: "meet_my_needs_store",
            type: "count/generic",
            content: value,
        });
    };

    const login = () => {
        console.log("login");
    };
    return (
        <div>
            <h1>Pryv value form</h1>
            <p>This example lets the user sign in, then enter notes and values.</p>

            <p> Log in using app-web-auth3 UI </p>
            <p>
                <span id="pryv-button"></span> <strong>⇠ sign in here</strong>
                <br />
            </p>

            <h5>Notes</h5>
            <input
                type="text"
                id="create-note"
                placeholder="Content"
                value={note}
                onChange={(e) => setNote(e.target.value)}
            />
            <button onClick={createNoteEvent}>Save Note</button>

            <h5>Numerical Value</h5>
            <input
                type="text"
                id="create-value"
                placeholder="Content"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button onClick={createValueEvent}>Save Value</button>
        </div>
    );
};
export default LoginPryv;
