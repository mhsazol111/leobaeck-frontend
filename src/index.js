import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main_global.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { JsonDataState } from 'context/jsonData';
import { AuthState } from 'context/auth';
import { AnimationState } from 'context/animation';
import { UiState } from 'context/ui';
import { ScrollToTop } from 'components/ScrollToTop';
import App from './App';
import reportWebVitals from './reportWebVitals';

const historyInstance = createBrowserHistory();

ReactDOM.render(
	<React.StrictMode>
		<Router history={historyInstance}>
			<ScrollToTop>
				<AuthState>
					<UiState>
						<JsonDataState>
							<AnimationState>
								<App />
							</AnimationState>
						</JsonDataState>
					</UiState>
				</AuthState>
			</ScrollToTop>
		</Router>
	</React.StrictMode>,
	document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
