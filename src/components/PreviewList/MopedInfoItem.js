/* eslint-disable */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { JsonDataContext } from 'context/jsonData';

import { getType } from 'utils';

import { ReactComponent as IconNavigation } from 'i/icons/navigation.svg';
import { ReactComponent as IconClock } from 'i/icons/clock.svg';
import { ReactComponent as IconDocument } from 'i/icons/document_2.svg';
import { ReactComponent as IconArrowRight } from 'i/icons/arrow_right.svg';

const MopedInfoItem = ({
	type,
	value,
	linkMod,
	essaysLink,
}) => {
	const { langApp } = useContext(JsonDataContext);

	const checkTypeValue = itemValue => {
		if (getType(itemValue) === 'Array') {
			return itemValue.join(', ');
		} else if (getType(itemValue) === 'Object') {
			return itemValue[langApp];
		} else {
			return itemValue;
		}
	};

	const preparedType = type && type.toLowerCase();

	const typeText = {
		origin: {
			en: 'Origin',
			de: 'Ursprung',
		},
		year: {
			en: 'Year',
			de: 'Jahr',
		},
		essays: {
			en: 'Essays',
			de: 'Essays',
		},
	};

	let url;

	if (preparedType === 'origin') {
		url = '/map';
	} else if (preparedType === 'year') {
		url = '/timeline';
	} else if (preparedType === 'essays') {
		url = essaysLink;
	}

	return (
		<>
			{type && (
				<div className="moped_info_item">
					<div className="moped_info_icon">
						{preparedType === 'origin' && <IconNavigation className="icon icon-navigation size_mod" />}
						{preparedType === 'year' && <IconClock className="icon icon-clock size_mod" />}
						{preparedType === 'essays' && <IconDocument className="icon icon-document_2 size_mod" />}
					</div>
					{preparedType === 'origin' && <span className="mopen_info_type">{typeText.origin[langApp]}</span>}
					{preparedType === 'year' && <span className="mopen_info_type">{typeText.year[langApp]}</span>}
					{preparedType === 'essays' && <span className="mopen_info_type">{typeText.essays[langApp]}</span>}
					{(linkMod)
						? <Link className="moped_info_value" to={url}>{checkTypeValue(value)}</Link>
						: (
							<div className="moped_info_value">{checkTypeValue(value)}</div>
						)}
					{ false && (<div className="moped_info_icon_point">
							<IconArrowRight className="icon icon-arrow_right size_mod"/>
						</div>
					)}
				</div>
			)}
		</>
	);
};

export default MopedInfoItem;
/* eslint-disable */
