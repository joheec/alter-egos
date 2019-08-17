import auth0 from 'auth0-js';
import config from './auth_config.json';

class Auth {
  constructor() {
    this.auth0 = new auth0.WebAuth({
      domain: config.domain,
      audience: `https://${config.domain}/userinfo`,
      clientID: config.clientId,
      redirectUri: window.location.origin + '/member',
      responseType: 'id_token',
    });
  }

  getIdToken = () => this.idToken;

  isAuthenticated = () => new Date().getTime() < this.expiresAt;

  login = () => this.auth0.authorize();

  handleAuthentication = () => (
    new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (err) return reject(err);
        if (!authResult || !authResult.idToken) {
          return reject(err);
        }
        this.idToken = authResult.idToken;
        this.expiresAt = authResult.idTokenPayload.exp * 1000;
        resolve();
      })
    })
  );

  logout = () => {
    this.idToken = null;
    this.expiresAt = null;
  };
}

const auth0Client = new Auth();

export default auth0Client;
