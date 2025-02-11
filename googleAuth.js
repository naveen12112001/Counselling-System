import { gapi } from "gapi-script";

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
const API_KEY = import.meta.env.VITE_API_KEY;
const SCOPES = "https://www.googleapis.com/auth/calendar.events";

export const initializeGapi = () => {
  return new Promise((resolve, reject) => {
    gapi.load("client:auth2", async () => {
      try {
        await gapi.client.init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          scope: SCOPES,
          discoveryDocs: [
            "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
          ],
        });
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  });
};

export const signIn = async () => {
  try {
    await initializeGapi();
    const authInstance = gapi.auth2.getAuthInstance();
    await authInstance.signIn();
  } catch (error) {
    console.error("Google Sign-In Error:", error);
  }
};
