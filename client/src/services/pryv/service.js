import React, { useContext, useState, useEffect } from "react";
import Pryv from "pryv";

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}
//set up auth request for the application
// See: https://api.pryv.com/reference/#auth-request
const authRequest = {
    requestingAppId: "MeetMyNeedsApp",
    languageCode: "fr", // optional (default english)
    requestedPermissions: [
        {
            streamId: "meet_my_needs_store",
            defaultName: "meet_my_needs_store",
            level: "manage",
        },
    ],
    clientData: {
        "app-web-auth:description": {
            type: "note/txt",
            content: "This is a consent message.",
        },
    },
};
//cors in local
const serviceInfoJson = {
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

//context used to handle auth
const AuthProvider = ({ children }) => {
    const [connection, setConnection] = useState(null);
    const [loading, setLoading] = useState(false);

    //possible states=> 'LOADING','INITIALIZED','NEED_SIGNIN','ACCEPTED','SIGNOUT'
    const pryvAuthStateChange = (state) => {
        // called each time the authentication state changed
        switch (state.id) {
            case "INITIALIZED":
                setLoading(false);
                break;
            case "ACCEPTED":
                setConnection(new Pryv.Connection(state.apiEndpoint));
                break;
            case "SIGNOUT":
                setConnection(null);
                break;
        }
    };

    //auth settings
    //https://api.pryv.com/reference/#service-info
    const authSettings = {
        spanButtonID: "pryv-button", // span id the DOM that will be replaced by the Service specific button
        onStateChange: pryvAuthStateChange, // event Listener for Authentication steps
        authRequest,
    };

    const login = (email, password) => {
        //do login
    };

    const initalize = async () => {
        //initalize pryv auth
        const auth = await Pryv.Auth.setupAuth(authSettings, null, serviceInfoJson);
    };

    const logout = () => {
        //do logout
        setConnection(null);
    };

    const value = {
        connection,
        initalize,
        login,
        logout,
    };

    return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};

export default AuthProvider;
