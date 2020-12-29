import { JsonDataContext } from 'context/jsonData';
import React, { useContext } from 'react';
import { setItemToLocalStorage } from 'utils';

const HeaderLangList = ({
	langList,
}) => {
	const { langApp, setLangApp } = useContext(JsonDataContext);
	const handleOnClick = language => {
		const preparedLanguageValue = language.toLowerCase();

		setItemToLocalStorage('user-language', preparedLanguageValue);
		setLangApp(preparedLanguageValue);
	};

	return (
		<ul className="header_lang_list">
			{langList.map(({
				title,
			}, index) => {
				const activeClass = title.toLowerCase() === langApp ? 'active_mod' : '';
				return (
					<li className="header_lang_item" key={index}>
						<button
							className={`header_lang_link ${activeClass}`}
							type="button"
							onClick={() => handleOnClick(title)}
						>
							{title}
						</button>
					</li>
				);
			})}
		</ul>
	);
};

export default HeaderLangList;
