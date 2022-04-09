import React, { useState } from "react";
import Pryv from "pryv";
//https://api.pryv.com/guides/app-guidelines/#auto-configuration

// if we know the user
const pryvApiEndpoint = "https://cl1qgox76000g7zd39kzagcsu@meetmy.pryv.me";

//secondly if we know the user name
const pryvServiceInfoUrl = "https://reg.pryv.me/service/info"; //def

const initalizePryv = async () => {
  const TAG = "init pryv";

  console.log(TAG);
  const authSettings = {
    authRequest: {
      // See: https://api.pryv.com/reference/#auth-request
      requestingAppId: "meet-my-need-test",
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
  // To avoid CORS problem in local environment we use json and not the url
  let serviceInfoUrl = null; // 'https://api.pryv.com/lib-js/demos/service-info.json';
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
  let authService = null;
  try {
    authService = await Pryv.Auth.setupAuth(authSettings, serviceInfoJson);
  } catch (e) {
    console.log(TAG, "Error:", e);
  }
  return authService;
};

export default initalizePryv;
