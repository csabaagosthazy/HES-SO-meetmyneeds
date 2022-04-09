import React, { useContext, useState, useEffect } from "react";
import Pryv from "pryv";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}
//Dev notes
//user auth
//https://api.pryv.com/reference/#service-info
/* let authSettings = {
  spanButtonID: 'pryv-button', // span id the DOM that will be replaced by the Service specific button
  onStateChange: pryvAuthStateChange, // event Listener for Authentication steps
  authRequest: { // See: https://api.pryv.com/reference/#auth-request
    requestingAppId: 'lib-js-test',
    languageCode: 'fr', // optional (default english)
    requestedPermissions: [
      {
        streamId: 'test',
        defaultName: 'test',
        level: 'manage'
      }
    ],
    clientData: {
      'app-web-auth:description': {
        'type': 'note/txt', 'content': 'This is a consent message.'
      }
    },
    // referer: 'my test with lib-js', // optional string to track registration source
  }
}; */

//context used to handle auth
const AuthProvider = ({ children }) => {
  //test
  //const service = new Pryv.Service('https://reg.pryv.me/service/info');
  //const apiEndpoint = await service.apiEndpointFor(username, token);
  //const connection = new Pryv.Connection(apiEndpoint);
  //const authSettings;
  //const service;
  //const serviceInfo = service.infoSync();
  //const [authState, setAuthState] = useState(null);
  //const [connection, setConnection] = useState(null);

  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signup = (email, password) => {
    //do signup
    const user = {
      id: "userId",
      role: "user",
    };
    //do login
    setCurrentUser(user);
    return user;
  };

  const login = (email, password) => {
    //do login
    const user = {
      id: "userId",
      role: "user",
    };
    setCurrentUser(user);

    return user;
  };

  const logout = () => {
    //do logout
    setCurrentUser(null);
    console.log("signed out");

    return "signed out";
  };

  const resetPassword = (email) => {
    //do reset password
    return "password reset";
  };

  const updateEmail = (email) => {
    //do update email
    return "user email updated";
  };

  const updatePassword = (password) => {
    //do update password
    return "user password updated";
  };

  useEffect(() => {
    setLoading(false);
    //setup an event listener to check the user is still signed in
    const unsubscribe = async (user) => {
      setCurrentUser(user);
      setLoading(false);
    };

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};

export default AuthProvider;
