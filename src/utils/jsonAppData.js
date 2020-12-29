import WeekObjectImg from '../i/object/moped_2.jpg';
import WeekObjectImg2 from '../i/object/moped.jpg';
import infoBlockImg from '../i/img3.jpg';
import HeroImg from '../i/hero.jpg';
import VisitImg from '../i/virtual_room.jpg';
import Img1 from '../i/essay.jpg';
import Img2 from '../i/panel.jpg';
import SupportImg1 from '../i/support_1.svg';
import SupportImg2 from '../i/support_2.svg';
import SupportImg3 from '../i/support_3.svg';
import SupportImg4 from '../i/support_4.svg';
import SupportImg5 from '../i/support_5.svg';
import SupportImg6 from '../i/support_6.svg';
import SupportImg7 from '../i/support_7.svg';
import SupportImg8 from '../i/support_8.svg';
import ImgHero from '../i/landing_hero_img.svg';
import ImgDecor from '../i/landing_hero_decor.png';
// import mopedImg from '../i/object/moped.jpg';

const APP_DATA = {
	homePage: {
		heroSliderArray: [
			{
				title: '1700 Years of Jewish Life in German-speaking Lands',
				descr: '<p>2021 marks the 1700th anniversary of a Constantinian edict, the earliest evidence of a Jewish community in the German-speaking world.</p>',
				btnTitle: 'Learn More',
				image: HeroImg,
			},
			{
				title: '1700 Years of Jewish Life in German-speaking Lands',
				descr: '<p>2021 marks the 1700th anniversary of a Constantinian edict, the earliest evidence of a Jewish community in the German-speaking world.</p>',
				btnTitle: 'Learn More',
				image: HeroImg,
			},
		],
		heroProjectContent: {
			text: '<p>The Shared History Project presents 58 objects pertaining to the German Jewish history in the German-speaking territories across the centuries.</p>',
			title: 'New objects will be revealed throughout 2021, Each Sunday, one new object will appear on the website. ',
		},
		exploreOurObjects: {
			title: 'Explore our Objects',
			items: [
				{
					url: '/objects-list',
					title: {
						en: 'By <br> Object',
						de: 'über <br> die Objekte',
					},
				},
				{
					url: '/timeline',
					title: {
						en: 'By <br> TIMELINE',
						de: 'über <br>die Zeitleiste',
					},
				},
				{
					url: '/map',
					title: {
						en: 'By <br> LOCATION',
						de: 'über <br>die Karte',
					},
				},
			],
		},
		upcomingObjectsSection: {
			title: {
				en: 'Upcoming Objects',
				de: 'Upcoming Objects',
			},
			listObjects: [
				{
					id: 278,
					starred: false,
					status: 'publish',
					publish_date: '2020-11-23',
					title: {
						en: 'Simson “Schwalbe” KR 51 Moped',
						de: 'Simson “Schwalbe” KR 51 Moped De',
					},
					object_number: {
						en: 'Object 001',
						de: 'Objekt 001',
					},
					photos: [
						{
							photo: {
								url: WeekObjectImg2,
								alt: 'moped',
							},
						},
					],
					object_image: false,
					text: 'To be published Feb. 23',
					object: [
						{
							type: 'origin',
							value: {
								en: '',
								de: '',
							},
						},
						{
							type: 'year',
							value: '',
						},
						{
							type: 'essays',
							value: [],
						},
					],
				},
				{
					id: 278,
					starred: false,
					status: 'publish',
					publish_date: '2020-11-23',
					title: {
						en: 'Simson “Schwalbe” KR 51 Moped',
						de: 'Simson “Schwalbe” KR 51 Moped De',
					},
					object_number: {
						en: 'Object 002',
						de: 'Objekt 002',
					},
					photos: [
						{
							photo: {
								url: WeekObjectImg2,
								alt: 'moped',
							},
						},
					],
					object_image: false,
					text: 'To be published Feb. 23',
					object: [
						{
							type: 'origin',
							value: {
								en: '',
								de: '',
							},
						},
						{
							type: 'year',
							value: '',
						},
						{
							type: 'essays',
							value: [],
						},
					],
				},
			],
			button: {
				en: 'Object list',
				de: 'Object list',
			},
		},
		bannerArray: {
			title: {
				en: 'Discover all the features, while staying up-to-date with the latest news',
				de: 'Entdecken Sie alle Funktionen und bleiben Sie stets über die neuesten Nachrichten informiert',
			},
			text: {
				en: '<p>In the world full of information and busy moments, we encourage you to sign up to our website.</p><p>This will give you access to our weekly newsletter and an option to download the materials to read them later or use them as an educational support.</p>',
				de: '<p> In einer Welt voller Informationen und geschäftiger Momente empfehlen wir Ihnen, sich auf unserer Website anzumelden. </ p> <p> Auf diese Weise erhalten Sie Zugang zu unserem wöchentlichen Newsletter und können die Materialien herunterladen, um sie zu lesen später oder nutzen Sie sie als pädagogische Unterstützung. </ p> ',
			},
			btnUrl: '#',
			btnTitle: {
				en: 'Sign up',
				de: 'Anmelden',
			},
		},
		upcomingEventsSection: {
			title: {
				en: 'Upcoming Event',
				de: 'Upcoming Event',
			},
			button: {
				en: 'VIEW EVENT',
				de: 'VIEW EVENT',
			},
		},
		weekObjectSection: {
			sectionTitle: {
				en: 'This Week’s Object',
				de: 'Das Objekt dieser Woche',
			},
			title: {
				en: 'Simson "Schwalbe" KR51 Moped',
				de: 'Simson “Schwalbe” KR 51 Moped',
			},
			id: 79,
			image: WeekObjectImg,
			secondImage: WeekObjectImg2,
			objectNumber: {
				en: 'Object 001',
				de: 'Objekt 001',
			},
			description: {
				en: 'The East-German moped that powered the socialist country’s postal service has a cult-following, but few know the story of its Jewish past.',
				de: 'Das ostdeutsche Moped, das den Postdienst des sozialistischen Landes antrieb, hat eine Kult-Anhängerschaft, aber nur wenige kennen die Geschichte seiner jüdischen Vergangenheit.',
			},
			objectInfo: [
				{
					type: 'origin',
					value: {
						en: 'Suhl, Thuringia',
						de: 'Suhl, Thüringia',
					},
				},
				{
					type: 'year',
					value: '1960',
				},
				{
					type: 'essays',
					value: [
						'Joe Black',
						'David Brown',
					],
				},
			],
			btnTitle: {
				en: 'View object',
				de: 'Objekt anzeigen',
			},
		},
		visitVirtualExhibit: {
			title: 'or visit the Virtual Exhibit',
			url: '#',
			btnTitle: {
				en: 'Enter',
				de: 'Eingeben',
			},
			img: VisitImg,
		},
		infoBlockArray: {
			headTitle: {
				en: 'Those behind the<br> Shared History<br> Project',
				de: 'Diejenigen, die hinter dem <br> Shared History <br> Projekt',
			},
			title: {
				en: 'The Shared History Project is possible by The Leo Baeck Institute',
				de: 'Das Shared History Project ist möglich vom Leo Baeck Institute',
			},
			text: {
				en: ['Leo Baeck Institute – New York | Berlin (LBI) in cooperation with the Federal Agency for Civic Education (Bundeszentrale für politische Bildung/bpb) and co-sponsored by the German Foreign Office is pleased to present the Shared History Project.'],
				de: ['Leo Baeck Institut - New York | Berlin (LBI) freut sich, in Zusammenarbeit mit der Bundeszentrale für politische Bildung (bpb) und vom Auswärtigen Amt mitgesponsert das Projekt "Gemeinsame Geschichte" vorzustellen. '],
			},
			btnUrl: 'about',
			btnTitle: {
				en: 'Learn more',
				de: 'Mehr erfahren',
			},
			img: infoBlockImg,
		},
		infoBlockBottomArray: {
			title: {
				en: 'Meet our collaborators',
				de: 'Treffen Sie unsere Mitarbeiter',
			},
			text: {
				en: ['The Shared History Project wouldn’t be possible without the help of key collaborators and the research of many sources.'],
				de: ['Das Shared History-Projekt wäre ohne die Hilfe wichtiger Mitarbeiter und die Recherche vieler Quellen nicht möglich.'],
			},
			btnUrl: '/credits',
			btnTitle: {
				en: 'Learn more',
				de: 'Mehr erfahren',
			},
		},
	},
	objectPopup: {
		viewInTimelineButton: {
			title: {
				en: 'View in Timeline',
				de: 'In der Zeitleiste anzeigen',
			},
			url: '/timeline',
		},
		viewInMapButton: {
			title: {
				en: 'View in Map',
				de: 'In Karte anzeigen',
			},
			url: '/map',
		},
		viewObjectButton: {
			en: 'View Object',
			de: 'Objekt anzeigen',
		},
		readEssaysButton: {
			en: 'Read Essays',
			de: 'Lesen Sie Essays',
		},
	},
	loginPopup: {
		title: {
			en: 'Log In to your account',
			de: 'Log In to your account',
		},
		submitButton: {
			en: 'Log In',
			de: 'Log In',
		},
		warningMessage: {
			en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam placerat suscipit felis sed hendrerit. Etiam condimentum et ipsum vitae consectetur. Etiam volutpat massa vel elit elementum aliquam. Quisque',
			de: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam placerat suscipit felis sed hendrerit. Etiam condimentum et ipsum vitae consectetur. Etiam volutpat massa vel elit elementum aliquam. Quisque',
		},
		resetPasswordTitle: {
			en: 'Can’t remember your Password?',
			de: 'Sie können sich nicht an Ihr Passwort erinnern?',
		},
		resetPasswordLink: {
			en: 'Reset It',
			de: 'Setzen Sie es zurück',
		},
	},
	resetPasswordPopup: {
		title: {
			en: 'Reset password',
			de: 'Reset password',
		},
		submitButton: {
			en: 'Reset',
			de: 'Reset',
		},
	},
	forgotPasswordPopup: {
		submitButton: {
			en: 'Reset',
			de: 'Reset',
		},
	},
	signupPopup: {
		title: {
			en: 'Welcome to SHP',
			de: 'Welcome to SHP',
		},
		description: {
			en: 'Create your account for full access to all features and downloadable materials to read them later or use them as educational support.',
			de: 'DE',
		},
		checkboxText: {
			en: 'Subscribe to our bulletin for news on upcoming objects every week, additional essays, early access to events, and more.',
			de: 'DE',
		},
		loginText: {
			en: 'Already have an account?',
			de: 'Already have an account?',
		},
		loginLink: {
			en: 'Log In',
			de: 'Log In',
		},
		submitButton: {
			en: 'Submit',
			de: 'einreichen',
		},
		warningMessage: {
			en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam placerat suscipit felis sed hendrerit. Etiam condimentum et ipsum vitae consectetur. Etiam volutpat massa vel elit elementum aliquam. Quisque',
			de: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam placerat suscipit felis sed hendrerit. Etiam condimentum et ipsum vitae consectetur. Etiam volutpat massa vel elit elementum aliquam. Quisque',
		},
		privacyTitle: {
			en: 'We will not use your personal data for commercial purposes or share it with anyone',
			de: 'We will not use your personal data for commercial purposes or share it with anyone',
		},
		privacyText: {
			en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam placerat suscipit felis sed hendrerit. Etiam condimentum et ipsum vitae consectetur. Etiam volutpat massa vel elit elementum aliquam. Quisque aliquam lobortis cursus. Ut varius lectus libero, quis dapibus ex laoreet non. Sed ut dolor id eros tempor rutrum. Phasellus id lorem euismod, consequat metus ut, pulvinar mi. Quisque feugiat neque non elit luctus, laoreet sagittis ipsum feugiat. Proin id sagittis est. Morbi in auctor orci.',
			de: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam placerat suscipit felis sed hendrerit. Etiam condimentum et ipsum vitae consectetur. Etiam volutpat massa vel elit elementum aliquam. Quisque aliquam lobortis cursus. Ut varius lectus libero, quis dapibus ex laoreet non. Sed ut dolor id eros tempor rutrum. Phasellus id lorem euismod, consequat metus ut, pulvinar mi. Quisque feugiat neque non elit luctus, laoreet sagittis ipsum feugiat. Proin id sagittis est. Morbi in auctor orci.',
		},
		privacyLink: {
			en: 'Read our Privacy Policy',
			de: 'Read our Privacy Policy',
		},
	},
	essayPage: {
		essayMenu: [
			{
				title: {
					en: 'Back to Object',
					de: 'Back to Object',
				},
				type: 'backToObject',
				url: '#',
			},
			{
				title: {
					en: 'Previous Essay',
					de: 'Previous Essay',
				},
				type: 'previousEssay',
				url: '#',
			},
			{
				title: {
					en: 'Next Essay',
					de: 'Next Essay',
				},
				type: 'textEssay',
				url: '#',
			},
		],
		essayButtonList: [
			{
				url: '/object/',
				title: {
					en: 'Back to Object',
					de: 'Zurück zum Objekt',
				},
			},
			{
				url: '/essay/',
				title: {
					en: 'Previous Essay',
					de: 'Vorheriger Aufsatz',
				},
			},
			{
				url: '/essay/',
				title: {
					en: 'Next Essay',
					de: 'Nächster Aufsatz',
				},
			},
		],
		essayEpochList: [
			{
				id: '',
				title: '4th Century to Middle Ages',
			},
			{
				id: '',
				title: 'Early Modern (1450 - 17th century)',
			},
			{
				id: '',
				title: 'Absolutism (1648 - 1806)',
			},

		],
	},
	objectDashboardPage: {
		essayMenu: [
			{
				title: {
					en: 'Overview',
					de: 'Überblick',
				},
				type: 'overview',
			},
			{
				title: {
					en: 'Essays',
					de: 'Essays',
				},
				type: 'essays',
			},
			{
				title: {
					en: 'Provenance',
					de: 'Herkunft',
				},
				type: 'provenance',
			},
			{
				title: {
					en: 'Description',
					de: 'Beschreibung',
				},
				type: 'description',
			},
			{
				title: {
					en: 'View in Timeline',
					de: 'In der Zeitleiste anzeigen',
				},
				url: '/timeline',
				type: 'timeline',
			},
			{
				title: {
					en: 'View in Map',
					de: 'In Karte anzeigen',
				},
				url: '/map',
				type: 'map',
			},
			{
				title: {
					en: 'View in Virtual Exhibit',
					de: 'Ansicht in virtueller Ausstellung',
				},
				type: 'virtual',
				target: true,
			},
		],
		navigationList: [
			{
				url: '/objects-list',
				title: {
					en: 'Back to Objects',
					de: 'Zurück zu Objekten',
				},
			},
			{
				url: '/object/',
				title: {
					en: 'Previous Object',
					de: 'Vorheriges Objekt',
				},
			},
			{
				url: '/object/',
				title: {
					en: 'Next Object',
					de: 'Nächstes Objekt',
				},
			},
		],
		exploreOtherViews: {
			title: {
				en: 'Explore other Views',
				de: 'Erkunden Sie andere Darstellungen',
			},
			items: [
				{
					url: '/timeline',
					title: {
						en: 'By <br> TIMELINE',
						de: 'über <br>die Zeitleiste',
					},
				},
				{
					url: '/map',
					title: {
						en: 'By <br> LOCATION',
						de: 'über <br>die Karte',
					},
				},
			],
		},
		releaseDateTitle: {
			en: 'Release Date',
			de: 'Veröffentlichungsdatum',
		},
	},
	timelinePage: {
		buttonReadEssayTitle: {
			en: 'Read Essay',
			de: 'Essay lesen',
		},
	},
	objectsListPage: {
		collection: {
			title: {
				en: 'The Collection',
				de: 'Die Sammlung',
			},
			subtitle: {
				en: 'Late Roman Empire to the Middle Ages',
				de: 'Spätrömisches Reich bis zum Mittelalter',
			},
			text: {
				en: ['Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'],
				de: ['Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'],
			},
			btnUrl: '#',
			btnTitle: {
				en: 'Read ESSAY',
				de: 'Aufsatz lesen',
			},
		},
		bannerArray: {
			title: {
				en: 'Stay up-to-date every week. New objects will be revealed throughout 2021.',
				de: 'Bleiben Sie jede Woche auf dem Laufenden. Neue Objekte werden im Laufe des Jahres 2021 enthüllt.',
			},
			text: {
				en: '<p>Subscribe to our bulletin for news on upcoming objects every week, additional essays, early access to events, and more.</p>',
				de: '<p> Abonnieren Sie unser Bulletin, um jede Woche Neuigkeiten zu bevorstehenden Objekten, zusätzliche Aufsätze, frühzeitigen Zugriff auf Veranstaltungen und mehr zu erhalten. </ p>',
			},
			btnUrl: '#',
			btnTitle: {
				en: 'Sign up',
				de: 'Anmelden',
			},
			bottomDescr: {
				en: 'Or <a href="#">Sign Up</a> for additional access to all features.',
				de: 'Oder <a href="#"> Anmelden </a> für zusätzlichen Zugriff auf alle Funktionen.',
			},
		},
		toBePublishedTitle: {
			en: 'To be published',
			de: 'Veröffentlicht werden',
		},
	},
	eventsPage: {
		title: {
			en: 'Events',
			de: 'Veranstaltungen',
		},
		bannerArray: {
			title: {
				en: 'Stay up-to-date every week. New objects will be revealed throughout 2021.',
				de: 'Bleiben Sie jede Woche auf dem Laufenden. Neue Objekte werden im Laufe des Jahres 2021 enthüllt.',
			},
			text: {
				en: '<p>Subscribe to our bulletin for news on upcoming objects every week, additional essays, early access to events, and more.</p>',
				de: '<p> Abonnieren Sie unser Bulletin, um jede Woche Neuigkeiten zu bevorstehenden Objekten, zusätzliche Aufsätze, frühzeitigen Zugriff auf Veranstaltungen und mehr zu erhalten. </ p>',
			},
			btnUrl: '#',
			btnTitle: {
				en: 'Sign up',
				de: 'Anmelden',
			},
			bottomDescr: {
				en: 'Or <a href="#">Sign Up</a> for additional access to all features.',
				de: 'Oder <a href="#"> Anmelden </a> für zusätzlichen Zugriff auf alle Funktionen.',
			},
		},
		institute: {
			institute_title: {
				en: 'About Leo Baeck Institute',
				de: 'Über Leo Baeck Institut',
			},
			institute_subtitle: {
				en: '<p>The Leo Baeck Institute New York | Berlin (LBI) is a research collection that has been devoted to the history and culture of German-speaking Jews for 65 years.</p>\n',
				de: '<p>Das Leo-Baeck-Institut New York | Berlin (LBI) ist eine Forschungssammlung, die sich seit 65 Jahren der Geschichte und Kultur deutschsprachiger Juden widmet.</p>\n',
			},
			institute_left_text: {
				en: '<p>The collection was founded in 1955 by German-Jewish academics and intellectuals out of the bitter experience of the Holocaust, so that it would be available as source material primarily to historians and other scholars for the scholarly study “what was once German Jewry. “ The institute was named after Rabbi Leo Baeck, the last leading representative of the Jewish communities under National Socialism.</p>\n',
				de: '<p>Die Sammlung wurde 1955 von deutsch-jüdischen Akademikern und Intellektuellen aus der bitteren Erfahrung des Holocaust heraus gegründet, damit sie vor allem Historikern und anderen Gelehrten als Ausgangsmaterial für die wissenschaftliche Untersuchung „Was war einst deutsches Judentum?“ Zur Verfügung stand. „Das Institut wurde nach Rabbi Leo Baeck benannt, dem letzten führenden Vertreter der jüdischen Gemeinden im Nationalsozialismus.</p>\n',
			},
			institute_right_text: {
				en: '<p>In addition to the Institute in New York, sister institutes were established in London and Jerusalem. What all locations have in common is that the largest German-Jewish immigrant groups were located there after the Second World War.</p>\n<p>The institutes in London and Jerusalem are mainly devoted to publication activities and the organization of scholarly events, although there is now also a smaller collection in Jerusalem, which is completely recorded in the New York catalogue and is currently being digitized.“</p>\n<p>In 2001, the New York LBI founded a branch of the archive in Berlin, located at the Jewish Museum there, and since then has called itself the Leo Baeck Institute New York | Berlin.</p>\n',
				de: '<p>Neben dem Institut in New York wurden Schwesterinstitute in London und Jerusalem gegründet. Allen Orten ist gemeinsam, dass sich dort nach dem Zweiten Weltkrieg die größten deutsch-jüdischen Einwanderergruppen befanden.</p>\n<p>Die Institute in London und Jerusalem widmen sich hauptsächlich Publikationsaktivitäten und der Organisation wissenschaftlicher Veranstaltungen. In Jerusalem gibt es jetzt auch eine kleinere Sammlung, die vollständig im New Yorker Katalog erfasst ist und derzeit digitalisiert wird. “</p>\n<p>Im Jahr 2001 gründete das New Yorker LBI in Berlin eine Zweigstelle des Archivs, die sich im dortigen Jüdischen Museum befindet, und nennt sich seitdem Leo Baeck Institute New York | Berlin.</p>\n',
			},
			institute_button: {
				title: {
					en: 'Visit website',
					de: 'Besuche die Website',
				},
				link: {
					title: '',
					url: ' http://google.com',
					target: '',
				},
			},
		},
	},
	filters: {
		buttonShowAllFilterLabels: {
			en: 'Filter your search',
			de: 'Filtern Sie Ihre Suche',
		},
		buttonClearAllFilters: {
			en: 'Clear All Filters',
			de: 'Alle Filter löschen',
		},
	},
	popupObject: {
		head: {
			en: 'Object 001',
			de: 'Objekt 001',
		},
		icon: 'heart',
		menu: [
			{
				url: '#',
				title: {
					en: 'View Object',
					de: 'Objekt anzeigen',
				},
			},
			{
				url: '#',
				title: {
					en: 'View in Map',
					de: 'In Karte anzeigen',
				},
			},
			{
				url: '#',
				title: {
					en: 'View in Virtual Exhibit',
					de: 'Ansicht in virtueller Ausstellung',
				},
			},
		],
		img: Img1,
		title: {
			en: 'Simson “Schwalbe” KR 51 Moped',
			de: 'Simson "Schwalbe" KR 51 Moped',
		},
		text: {
			en: 'The East-German moped that powered the socialist country’s postal service has a cult-following, but few know the story of its Jewish past.',
			de: 'Das ostdeutsche Moped, das den Postdienst des sozialistischen Landes angetrieben hat, hat eine Kult-Anhängerschaft, aber nur wenige kennen die Geschichte seiner jüdischen Vergangenheit.',
		},
		table: [
			{
				id: 1,
				type: 'origin',
				value: {
					en: 'Suhl, Thüringia',
					de: 'Suhl, Thüringia',
				},
			},
			{
				id: 2,
				iconMod: 'date_mod',
				type: 'year',
				value: {
					en: '1964',
					de: '1964',
				},
				url: '#',
			},
			{
				id: 3,
				type: 'essays',
				value: {
					en: 'By David Brown, Leo Back Institute',
					de: 'Von David Brown, Leo Back Institute',
				},
			},
		],
	},
	popupHistory: {
		title: {
			en: 'Constantine The Great reigns as Roman Emperor',
			de: 'Konstantin der Große regiert als römischer Kaiser',
		},
		img: Img2,
		imgMod: 'lg_mod',
		text: {
			en: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.',
			de: 'Lorem ipsum dolor sitzen amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore und dolore magna aliquyam erat, sed diam voluptua. Bei Vero Eos und Akkusam und Justo Duo Dolores und Rebum. Stet clita kasd gubergren, kein Meer takimata sanctus est Lorem ipsum dolor sitzen amet. Lorem ipsum dolor sitzen amet, consetetur sadipscing elitr, sed diam nonumy. ',
		},
	},
	PopupCookieSettings: {
		title: {
			en: 'Cookie Settings',
			de: 'Cookie-Einstellungen',
		},
		list: [
			{
				title: {
					en: 'Strictly necessary cookies',
					de: 'Unbedingt notwendige Cookies',
				},
				id: 'necessaryCookies',
				text: {
					en: 'These cookies are essential so that you can move around the website and use its features. Without these cookies services you have asked for cannot be provided.',
					de: 'Diese Cookies sind unerlässlich, damit Sie sich auf der Website bewegen und deren Funktionen nutzen können. Ohne diese von Ihnen angeforderten Cookies können keine Dienste bereitgestellt werden.',
				},
			},
			{
				title: {
					en: 'Functional cookies',
					de: 'Funktionale Cookies',
				},
				id: 'functionalCookies',
				text: {
					en: 'These cookies allow the website to remember choices you make to give you better functionality and personal features.',
					de: 'Mit diesen Cookies kann sich die Website an Ihre Auswahl erinnern, um Ihnen bessere Funktionen und persönliche Funktionen zu bieten.',
				},
			},
			{
				title: {
					en: 'Performance cookies',
					de: 'Leistungscookies',
				},
				id: 'performanceCookies',
				text: {
					en: 'These cookies help to improve the performance of website.',
					de: 'Diese Cookies tragen zur Verbesserung der Leistung der Website bei.',
				},
			},
		],
		btnTitle: {
			en: 'ACCEPT',
			de: 'AKZEPTIEREN',
		},
	},
	PopupPlease: {
		text: {
			en: 'Please, stay tuned for the opening of the virtual exhibit the first week of March',
			de: 'Eröffnung in Kürze - Unsere virtuelle Ausstellung öffnet ihre Pforten für Sie in der ersten Märzwoche.',
		},
		btnUrl: '#',
		btnTitle: {
			en: 'ACCEPT',
			de: 'AKZEPTIEREN',
		},
	},
	PopupWelcome: {
		title: {
			en: 'Thank you for joining us at SHP',
			de: 'Vielen Dank, dass Sie zu SHP gekommen sind',
		},
		subtitle: {
			en: 'Your subscription gives you access to all features on this site:',
			de: 'Mit Ihrem Abonnement erhalten Sie Zugriff auf alle Funktionen dieser Website:',
		},
		list: {
			en: [
				'Create your own list of objects and essays for quick access',
				'Download all reading material',
				'Receive updates for upcoming objects, new reading material, and future events',
			],
			de: [
				'Erstellen Sie Ihre eigene Liste von Objekten und Aufsätzen für den schnellen Zugriff',
				'Laden Sie alles Lesematerial herunter',
				'Erhalten Sie Updates für bevorstehende Objekte, neues Lesematerial und zukünftige Ereignisse',
			],
		},
		text: {
			en: 'Remember to mark <a href="mailto:news@shp.com">news@shp.com</a> as “safe sender” in your email provider, so you get all the updates we’ll be sending you.',
			de: 'Denken Sie daran, <a href="mailto:news@shp.com"> news@shp.com </a> in Ihrem E-Mail-Anbieter als "sicheren Absender" zu markieren, damit Sie alle Updates erhalten, die wir Ihnen senden.',
		},
		button: {
			en: 'continue',
			de: 'fortsetzen',
		},
	},
	credits: {
		supporters: {
			title: 'Supporters',
			list: [
				{
					mod: 'v2_mod',
					title: 'Website and virtual exhibit of the Shared History project',
					content: [
						{
							title: '2021JLID – Jüdisches Leben in Deutschland e.V. with funds of the Federal Ministry of the Interior, Building and Community (BMI)',
							logos: [SupportImg1, SupportImg2],
						},
					],
				},
				{
					mod: 'v2_mod',
					title: 'Physical exhibit',
					content: [
						{
							title: 'Deutscher Bundestag',
							logos: [SupportImg3],
						},
					],
				},
				{
					title: 'Conference',
					content: [
						{
							title: 'Bundeszentrale für politische Bildung (bpb)',
							logos: [SupportImg4],
						},
						{
							title: 'Auwärtiges Amt',
							logos: [SupportImg7],
						},
					],
				},
				{
					mod: 'v2_mod',
					title: 'Additional Support',
					content: [
						{
							title: 'Further Forward Foundation',
							logos: [SupportImg8],
						},
					],
				},
				{
					title: 'Cooperation Partners',
					content: [
						{
							title: '',
							logos: [SupportImg4],
						},
						{
							title: 'Jüdisches Museum Berlin',
							logos: [SupportImg5],
						},
						{
							title: 'MiQua. LVR-Jüdisches Museum im Archäologischen Quartier Köln',
							logos: [SupportImg6],
						},
					],
				},
			],
		},
		partners: {
			title: 'Partner Organizations',
			list: [
				'Arnold Schönberg Center',
				'Biblioteca Apostolica Vaticana',
				'Braunschweigisches Landesmuseum',
				'Deutsches Historisches Museum',
				'Die Geschichtsmuseen der Landeshauptstadt Erfurt',
				'Filmarchive Austria',
				'Fritz Ascher Society',
				'Fritz Bauer Institut',
				'Heinrich Heine Institut in Düsseldorf',
				'Hungarian Jewish Archives',
				'Institut für die Geschichte der deutsche Juden',
				'Israelitische Kultusgemeinde Amberg',
				'Jewish Museum Bratislava',
				'Jewish Museum Prague',
				'Joods Historisch Museum (JHM) Amsterdam',
				'Jüdisches Museum Frankfurt',
				'Jüdisches Museum Hohenems',
				'Jüdisches Museum der Schweiz',
				'Jüdisches Museum Wien',
				'Landesarchiv Baden-Wurttemberg',
				'Leibniz-Institut für Astrophysik Potsdam (AIP)',
				'Leibniz-Institut für jüdische Geschichte und Kultur - Simon Dubnow',
				'Le Musée Historique de la Ville de Strasbourg',
				'Moses Mendelssohn Stiftung',
				'Musée de Cluny, Paris',
				'Museum Augusta Raurica, Kaiseraugst',
				'Museum für Hamburgische Geschichte',
				'Museum für Verhütung und Schwangerschaftsabbruch (MUVS) in Wien',
				'Neue Gallery New York',
				'Paul Ehrlich Institut in Langen',
				'Private Collectors',
				'Rheinisches Landesmuseum Trier',
				'Staatsbibliothek zu Berlin, Musikabteilung mit Mendelssohn-Archiv',
				'State Museum at Majdanek',
				'Stiftung Neue Synagoge Berlin – Centrum Judaicum',
				'Terezín Memorial',
				'The Imperial War Museum',
				'Transkulturelle Geschichte des Judentums Institut für Kulturwissenschaft, Humboldt-',
				'Universität zu Berlin',
				'United States Holocaust Memorial Museum (USHMM)',
				'Universitätsbibliothek Humboldt-Universität zu Berlin,',
				'Wetterau Museum',
				'Yad Vashem - The World Holocaust Remembrance Center',
				'Yeshiva University Museum',
				'Zentralrat der Juden in Deutschland',
			],
		},
		thanks: {
			title: 'Special thanks to:',
			list: [
				{
					title: 'The Shared History Project Team',
					list: [
						'Dr. Magdalena Wrobel',
						'Dr. William H. Weitzer',
						'Sophie Rupp',
						'Milena Rinck',
						'Dr. Frank Mecklenburg',
						'Sally Carroll',
						'David Brown',
						'Dr. Miriam Bistrovic',
					],
				},
				{
					title: 'The entire LBI staff for their contributions, including:',
					list: [
						'Chris Bentley',
						'Miriam Clayton',
						'Renate Evers',
						'Elizabeth Fedden',
						'Tracey Felder',
						'Karen Franklin',
						'Lauren Paustian',
						'Horst Pfhalert',
						'Michael Simonson',
						'Agata Sobczak',
						'Hermann Teifer',
					],
				},
				{
					title: 'Website',
					list: [
						'360 Design',
						'Samson Übersetzungen GmbH',
						'Barbara Ann Schmutzler – Translation',
					],
				},
			],
		},
	},
	searchPage: {
		searchButton: {
			en: 'Search',
			de: 'Suche',
		},
		searchInputPlaceholder: {
			en: 'Search',
			de: 'Suche',
		},
	},
	loadMoreButton: {
		en: 'Load More',
		de: 'Mehr laden',
	},
	virtualRoomSection: {
		title: {
			en: 'or visit the Virtual Room',
			de: 'oder besuchen Sie unsere virtuelle Ausstellung',
		},
		buttonTitle: {
			en: 'Enter',
			de: 'Zugang',
		},
		buttonUrl: '#',
		img: VisitImg,
	},
	weekObjectSection: {
		title: {
			en: 'This Week’s Object',
			de: 'Das Objekt dieser Woche',
		},
		buttonTitle: {
			en: 'View object',
			de: 'Objekt anzeigen',
		},
	},
	privacyPolicyPage: {
		privacyPageHead: {
			title: 'Leo Baeck Institute Privacy Policy',
			descr: '<p>The Leo Baeck Institute (“LBI”) is committed to protecting your privacy, whether you are a user, visitor, and/or donor. </p><p>This Privacy Policy explains what information we collect from you and why. By using our websites (collectively, “Site”), visiting an LBI location, or donating to us, you agree to this policy. You also agree to let us use your email and postal address to communicate with you about our programs, services, fundraising efforts, and more. In pursuit of our commitment to protecting your privacy, we have drawn upon industry best practices and national standards for privacy.</p>',
			date: 'Last updated: November 14, 2019',
			info: '<p>This Privacy Policy may change over time as we deem necessary. Such changes will be announced by indicating on the policy the date it was last updated and/or by placing a notice on our Site.</p>',
		},
		typesInformation: [
			{
				title: 'Types of Information We Collect',
				content: '<p>We collect information about you in three ways: directly from you, from automatically-collected network logs, and through cookies. We typically keep information only for so long as it is needed for the proper operation of LBI and in order to better deliver our services to you. We may retain some information in backup storage systems, hard copy form, or as required by law. We collect different types of information from you depending on your chosen level of engagement with our services and the information needed in order to provide you with access to those services.</p><p>Information that is collected about you may be de-identified and aggregated with information collected about other users, visitors or donors. This de-identified and aggregated information cannot be used to reasonably identify you. This information helps us to administer services, analyze usage, provide security and identify new users of our services. In addition, it helps us to improve your user experience.</p>',
			},
			{
				title: '1. Information You Provide to Us',
				content: '<p>When you send us an email or submit a web form on our Site, you might be sharing certain personally identifying information or sensitive information with us. Web forms are used for many purposes, such as submitting a reference question or making a financial donation. Depending on the context, the information we request in these cases might include your name, physical address, email address, phone number, payment information, and other similar information.</p><p>We are committed to keeping such information only as long as needed in order to provide our services. We offer you the opportunity to review and, when practical, to update, change or delete some information you have provided us. You can do this by emailing us at lbaeck@lbi.cjh.org or by asking our staff to assist you by phone at 1-212-744-6400. Our information storage systems are configured in a way that helps us to protect information from accidental or malicious destruction. To that purpose, the information we collect is also saved in backup storage systems. Therefore, any update, change or deletion you make to your information or preferences may not immediately be reflected in all copies of the information we have and may not be removed from our backup storage systems until overwritten.</p>',
			},
			{
				title: '2. Information We Collect Automatically',
				content: '<p>When you use our Site, our computer servers automatically capture and save information electronically about your usage of our services. Examples of information that we may collect include:</p> <ul> <li>Your Internet Protocol (IP) address</li> <li>Your location</li> <li>Kind of web browser or electronic device that you use</li> <li>Date and time of your visit</li> <li>Website that you visited immediately before arriving at our Site</li> </ul> <p>We use Google Analytics to gain a better understanding of how the Site is being used. To learn more about how Google uses data, visit https://policies.google.com/privacy/partners.</p> </div>',
			},
			{
				title: 'Cookies',
				content: '<p>This section explains how cookies are used when you visit our Site.</p> <p>A cookie is a small text file (often including a unique identifier), that is sent to a user’s browser from a website’s computers and stored on a user’s computer’s hard drive or on a tablet or mobile device. A cookie stores a small amount of data on your computer about your visit to the website.</p> <p>We place and access cookies on your computer; these cookies are known as “first-party cookies”. Cookies may also be placed and accessed by some of our third-party vendors, which are known as “third-party cookies” and are described below. Some cookies are “session cookies,” which means that they are temporary cookies that are only stored on your device while you are visiting our Site. Other cookies are “persistent cookies”, which means that they are stored on your device for a period of time after you leave our Site.</p> <p>To the extent any personal information is collected through first-party cookies, our Privacy Policy applies. Personal information collected through a third-party cookie is subject to the privacy policy of that third party, and not our Privacy Policy.</p> <p>You can choose whether to accept cookies by changing the settings in your browser. However, if you disable this function (or keep this function disabled, as set by default by certain browsers), your experience on the Site may be diminished and some features may not work as intended.</p>',
			},
			{
				title: 'Types of Cookies We Use',
				content: '<p>Essential cookies enable you to navigate the Site and to use its services and features. Without these necessary cookies, the Site will not perform as smoothly for you as we would like it to, and we may not be able to provide certain services or features. This applies most significantly to the web forms on the Site, many of which require cookies in order to function.</p> <p>Analytics cookies collect information about your use of the Site, and enable us to improve the way it works. For example, analytics cookies show us which are the most frequently visited pages on the Site and help us record any difficulties you have with the Site. Analytics cookies allow us to see the overall patterns of usage on the Site, rather than the usage of a single person. We use information from analytics cookies to analyze the Site traffic, but we do not examine this information for individually identifying information.</p>',
			},
			{
				title: 'Managing Cookies',
				content: '<p>You may refuse or accept cookies from the Site at any time by activating settings in your browser. Most browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. If you choose to decline cookies, you may not be able to use interactive features of our Site that depend on cookies. Information about the procedure to follow in order to enable or disable cookies can be found at:</p> <ul> <li>Chrome</li> <li>Firefox</li> <li>Microsoft Edge</li> <li>Safari</li> <li>Safari Mobile (iPhone and iPad)</li> </ul> <p> For more information about other commonly used browsers, please refer to <a href="#">http://www.allaboutcookies.org/manage-cookies/.</a> </p> <p>Please be aware that if cookies are disabled, not all features of the Site may operate as intended.</p> <p> To opt-out of participating in Google Analytics data follow the instructions at <a href="#">https://tools.google.com/dlpage/gaoptout</a>.</p>',
			},
		],
		informationBlock: [
			{
				title: 'Information Shared with Third Parties',
				content: '<p>We may share personal information with third parties who provide services to LBI, such as payment processors and email delivery services. When LBI shares your personal information and other collected information with third party service providers, we require that they use your information only for the purpose of providing services to us and that their terms are consistent with this Privacy Policy.</p>',
			},
			{
				title: 'Complying with Regulatory and Legal Obligations',
				content: '<p>LBI has a legitimate interest in complying with certain legal obligations and interests which, from time to time, may require the disclosure of your personal information. LBI will not disclose your personal information to legal authorities except where such disclosure is by lawful request, including to meet legitimate national security or law enforcement demands (including a subpoena, court order, or other lawful legal demand by a legal authority with lawful jurisdiction).</p>',
			},
			{
				title: 'Our Ongoing Commitment to Data Security',
				content: '<p>Security is important to us and we know it is important to you. LBI follows generally accepted standards to protect your personal information when processing, transferring, and storing your personal information by restricting your personal data when we do not need to access it and by keeping your personal data only as necessary to perform our legitimate work.</p>',
			},
			{
				title: 'Our Partner Organization',
				content: '<p>LBI is a partner organization of the Center for Jewish History (“CJH”). Given the interrelationship between the two organizations, it is possible that in the course of using LBI services, the Privacy Policy of CJH may also come into effect. For more information, please refer to the CJH Privacy Policy.</p>',
			},
		],
	},
	themeSwitch: {
		en: 'Reading Mode',
		de: 'Lesemodus',
	},
	readEssaysButton: {
		en: 'Read Essays',
		de: 'Lesen Sie Essays',
	},
	landingPage: {
		img1: ImgHero,
		img2: ImgDecor,
		buttonTitle: {
			en: 'Enter',
			de: 'Eingeben',
		},
	},
};

export default APP_DATA;
