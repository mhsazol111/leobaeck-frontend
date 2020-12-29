import React, {
	useContext,
	useEffect,
	useState,
	useRef,
} from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { Transition, TransitionGroup } from 'react-transition-group';

import { PopupObject } from 'components/Popup';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { Cookies } from 'components/Cookies';
import ProtectedRoute from 'ProtectedRoute';
import { JsonDataContext } from 'context/jsonData';
import * as PAGES from './pages';
import * as POPUPS from './components/Popup';
import { AnimationContext } from './context/animation';

function App() {
	const {
		appPopups,
		setMobileMenuOpen,
		isLandingPopupVisible,
		pagesData,
	} = useContext(JsonDataContext);
	const { windowWidth } = useContext(AnimationContext);
	const [isTimelinePage, setIsTimelinePage] = useState(false);
	const location = useLocation();

	useEffect(() => {
		setIsTimelinePage(location.pathname === '/timeline' && !isTimelinePage);
		if (windowWidth < 1024) {
			setMobileMenuOpen(false);
		}
	}, [location]);

	return (
		pagesData && (
			<>
				<Header />
				<div className="wrapper">
					<div className={`base ${isTimelinePage ? 'timeline_mod' : ''}`}>
						<Switch location={location}>
							<Route component={PAGES.HomePage} path="/" exact />
							<Route component={PAGES.EventsPage} path="/events" />
							<Route component={PAGES.EventPage} path="/event/:slug" />
							<Route component={PAGES.TimelinePage} path="/timeline" />
							<Route component={PAGES.ObjectsListPage} path="/objects-list" />
							<Route component={PAGES.AboutPage} path="/about" />
							<Route component={PAGES.EssayPage} path="/essay/:slug" />
							<Route component={PAGES.TemplatePage} path="/page/:slug" />
							<Route component={PAGES.SearchPage} path="/search" />
							<Route component={PAGES.MapPage} path="/map" />
							<Route component={PAGES.ObjectDashboardPage} path="/object/:slug" />
							<Route component={PAGES.FutureObjectDashboardPage} path="/future-object/:slug" />
							<Route component={PAGES.Credits} path="/credits" />
							<Route component={PAGES.PrivacyPolicyPage} path="/privacy-policy" />
							<Route component={PAGES.HomePage} path="/reset-password/:resetToken" exact />

							<ProtectedRoute component={PAGES.MyCollectionPage} path="/my-collection" />
							<ProtectedRoute component={PAGES.MyAccountPage} path="/my-account" />
						</Switch>
					</div>
					<Footer
						isTimelinePage={isTimelinePage}
					/>
					<POPUPS.PopupLogin isOpen={appPopups.logIn.isOpen} />
					<POPUPS.PopupResetPassword />
					<POPUPS.PopupSignup isOpen={appPopups.signUp.isOpen} />
					<POPUPS.PopupWelcome isOpen={appPopups.welcome.isOpen} />
					<POPUPS.PopupCalendar isOpen={appPopups.calendar.isOpen} />
					<PopupObject
						isOpen={appPopups.object.isOpen}
						isTimelinePage={isTimelinePage}
					/>
					<Cookies />
					<POPUPS.PopupCookieSettings isOpen={appPopups.cookies.isOpen} />
					<POPUPS.PopupPlease isOpen={appPopups.virtualExhibit.isOpen} />
					<POPUPS.PopupLanding isOpen={isLandingPopupVisible} />
				</div>
			</>
		)

	);
}

export default App;
