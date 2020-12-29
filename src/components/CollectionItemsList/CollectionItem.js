import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { getType } from 'utils';
import { ReactComponent as IconLike } from 'i/icons/like.svg';
import { JsonDataContext } from 'context/jsonData';
import { toggleStarred } from 'api/object';
import { ReactComponent as IconNavigation } from 'i/icons/navigation.svg';
import { ReactComponent as IconClock } from 'i/icons/clock.svg';
import { ReactComponent as IconDocument } from 'i/icons/document_2.svg';
import { ReactComponent as IconArrowRight } from 'i/icons/arrow_right.svg';

const CollectionItem = ({ item }) => {
	const { langApp } = useContext(JsonDataContext);

	const {
		date,
		type,
		id,
		objectInfo,
		photoUrl: imageUrl,
		postStatus,
	} = item;

	let {
		title,
		objectNumber,
	} = item;

	const buttonsList = [{
		title: {
			en: 'VIEW OBJECT',
			de: 'VIEW OBJECT',
		},
		id: 'view-object',
		postTypes: [
			'object',
			'essay',
		],
	}, {
		title: {
			en: 'DOWNLOAD',
			de: 'DOWNLOAD',
		},
		id: 'download',
		postTypes: [
			'essay',
		],
	}];

	title = title[langApp];
	objectNumber = (objectNumber && objectNumber[langApp]) || '';

	const handleStarredClick = async e => {
		e.preventDefault();

		const cnfrm = window.confirm('Are you sure you want to remove this object?');
		if (cnfrm) {
			const { status, message } = await toggleStarred(id);
			if (status === 'SUCCESS') {
				window.location.reload();
			}
		}
	};

	const getFormattedDate = () => {
		const dt = new Date(date);
		return dt.toLocaleDateString('en-US', {
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		});
	};

	const getItemInfoType = itemType => {
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
		return typeText[itemType][langApp];
	};

	const getItemInfoValue = itemValue => {
		if (getType(itemValue) === 'Array') {
			return itemValue.join(', ');
		} else if (getType(itemValue) === 'Object') {
			return itemValue[langApp];
		} else {
			return itemValue;
		}
	};

	return (
		<>
			<div className="saved_object_list_item">
				<div className="saved_object">
					<div className="saved_object_checkbox">
						<IconLike
							className="icon icon-like size_mod current_mod"
							onClick={handleStarredClick}
						/>
					</div>
					<div className="saved_object_w_img">
						<img
							className="saved_object_img"
							src={imageUrl}
							alt={title}
						/>
					</div>
					<div className="saved_object_w_descr">
						<div className="saved_object_heading">
							<span className="saved_object_subtitle">{objectNumber}</span>
							<span className="saved_object_subtitle right_lvl_mod">{getFormattedDate()}</span>
						</div>
						{/* TODO : add class 'doc_mod' */}
						<h3 className="saved_object_name">{title}</h3>
						{objectInfo && (
							<div className="moped_info_table offset_v1_mod">
								{objectInfo.map(infoItem => {
									return (
										<div className="moped_info_item">
											<div className="moped_info_icon">
												{infoItem.type === 'origin' && <IconNavigation className="icon icon-navigation size_mod" />}
												{infoItem.type === 'year' && <IconClock className="icon icon-clock size_mod" />}
												{infoItem.type === 'essays' && <IconDocument className="icon icon-document_2 size_mod" />}
											</div>
											<span className="mopen_info_type">{getItemInfoType(infoItem.type)}</span>
											<div className="moped_info_value">{getItemInfoValue(infoItem.value)}</div>
											<div className="moped_info_icon_point">
												<IconArrowRight className="icon icon-arrow_right size_mod" />
											</div>
										</div>
									);
								})}
							</div>
						)}
						{buttonsList && (
							<div className="saved_object_buttons">
								{buttonsList.map((btn) => {
									if (btn.postTypes.indexOf(type) < 0) return null;
									return (
										<Link
											key={btn.id}
											className="saved_object_button btn_v4"
											to={`/${postStatus === 'future' ? 'future-object' : type}/${id}`}
										>
											{btn.title[langApp]}
										</Link>
									);
								})}
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default CollectionItem;
