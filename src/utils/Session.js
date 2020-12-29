import Cookies from 'js-cookie';

class Session {
	sessionObj = null;

	static getSession = () => {
		if (this.sessionObj == null) {
			this.sessionObj = new Session();
		}
		return this.sessionObj;
	}

	isLoggedIn = () => {
		const sessionToken = this.getToken();
		return sessionToken !== false;
	}

	setToken = (_token) => {
		Cookies.set('_tkn', _token, { expires: 1 });
	}

	getToken = () => {
		const sessionToken = Cookies.get('_tkn');
		return (sessionToken && sessionToken !== '') ? sessionToken : false;
	}

	removeToken = () => {
		Cookies.remove('_tkn');
		return true;
	}
}

export default Session;
