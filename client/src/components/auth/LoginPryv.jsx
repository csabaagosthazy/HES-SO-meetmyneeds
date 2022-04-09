import React from "react";
import Pryv from "pryv";

var serviceInfoUrl = "https://api.pryv.com/lib-js/demos/service-info.json";
//cors in local
let serviceInfoJson = {
  register: "https://reg.pryv.me",
  access: "https://access.pryv.me/access",
  api: "https://{username}.pryv.me/",
  name: "Pryv Lab",
  home: "https://www.pryv.com",
  support: "https://pryv.com/helpdesk",
  terms: "https://pryv.com/pryv-lab-terms-of-use/",
  eventTypes: "https://api.pryv.com/event-types/flat.json",
  assets: {
    definitions: "https://pryv.github.io/assets-pryv.me/index.json",
  },
};

const LoginPryv = () => {
  const [connection, setConnection] = React.useState(null);
  const [note, setNote] = React.useState("");
  const [value, setValue] = React.useState("");

  const pryvAuthStateChange = (state) => {
    // called each time the authentication state changed
    console.log("##pryvAuthStateChange", state);
    if (state.id === Pryv.Auth.AuthStates.AUTHORIZED) {
      setConnection(new Pryv.Connection(state.apiEndpoint));
      console.log("# Browser succeeded for user " + connection.apiEndpoint);
    }
    if (state.id === Pryv.Auth.AuthStates.SIGNOUT) {
      setConnection(null);
      console.log("# Logout");
    }
  };

  const authSettings = {
    spanButtonID: "pryv-button", // span id the DOM that will be replaced by the Service specific button
    onStateChange: pryvAuthStateChange, // event Listener for Authentication steps
    authRequest: {
      // See: https://api.pryv.com/reference/#auth-request
      requestingAppId: "lib-js-test",
      languageCode: "fr", // optional (default english)
      requestedPermissions: [
        {
          streamId: "test",
          defaultName: "test",
          level: "manage",
        },
      ],
      clientData: {
        "app-web-auth:description": {
          type: "note/txt",
          content: "This is a consent message.",
        },
      },
      // referer: 'my test with lib-js', // optional string to track registration source
    },
  };

  React.useEffect(async () => {
    const auth = await Pryv.Auth.setupAuth(authSettings, null, serviceInfoJson);
    console.log(auth);
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
      streamId: "test",
      type: "note/txt",
      content: note,
    });
  };

  const createValueEvent = () => {
    createEvent({
      streamId: "test",
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
