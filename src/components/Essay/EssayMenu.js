import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { JsonDataContext } from 'context/jsonData';

const EssayMenu = ({
	menuList,
	activeTab,
	setActiveTab,
	objectId,
}) => {
	const history = useHistory();
	const { langApp, showPopupByKey } = useContext(JsonDataContext);

	const onClick = (type, url, target) => {
		if (type === 'map' || type === 'timeline') {
			window.open(`${url}#${objectId}`, '_blank');
			return false;
		}

		if (url) {
			if (target) {
				window.open(url, '_blank');
				return false;
			}

			history.push(url);
			return null;
		}

		if (type === 'virtual') {
			showPopupByKey('virtualExhibit');

			return null;
		}

		const preparedType = type.toLowerCase();

		setActiveTab(preparedType);

		return null;
	};

	return (
		<ul className="essay_menu">
			{menuList && menuList.map(({
				title,
				type,
				url,
				target,
			}, index) => {
				return (
					<li className="essay_menu_item" key={index}>
						<button
							type="button"
							className={`essay_menu_item_link ${type && activeTab === type.toLowerCase() ? 'active_mod' : ''}`}
							onClick={() => onClick(type, url, target)}
						>
							{title[langApp]}
						</button>
					</li>
				);
			})}
		</ul>
	);
};

export default EssayMenu;
