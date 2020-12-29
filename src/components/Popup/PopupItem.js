import React, { useContext } from 'react';
import { JsonDataContext } from 'context/jsonData';

// components
import { ReactComponent as IconHeart } from 'i/icons/heart.svg';
import { EssayMenu } from 'components/Essay';
import MopedInfoItem from '../PreviewList/MopedInfoItem';

// content

const PopupInput = ({ content }) => {
	const {
		head,
		title,
		titleMod,
		menu,
		img,
		imgMod,
		dateDescr,
		date,
		text,
		table,
		button,
	} = content;
	const { langApp } = useContext(JsonDataContext);

	return (
		<>
			<div className="panel_item">
				{head && (
					<div className="essay_sidebar_head">
						<div className="essay_sidebar_title">{head[langApp]}</div>
						<div className="essay_slidebad_like">
							<IconHeart className="icon icon-heart size_mod" />
						</div>
					</div>
				)}
				{title && <h3 className={`section_title size_v2_mod offset_mod ${titleMod}`}>{title[langApp]}</h3>}
				{menu && <EssayMenu menuList={menu} />}
				<div className={`panel_img_wrap ${imgMod}`}>
					<img className="panel_img" src={img} alt={title[langApp]} />
				</div>
				{dateDescr && <div className="panel_date_descr">{dateDescr[langApp]}</div>}
				{date && <div className="panel_date">{date[langApp]}</div>}
				{text && <div className="panel_text">{text[langApp]}</div>}
				{table && (
					<div className="moped_info_table offset_mod">
						{table.map(({ type, value, id }) => {
							return <MopedInfoItem type={type} value={value} key={id} />;
						})}
					</div>
				)}
				{button && <a className="btn_base">{button[langApp]}</a>}
			</div>
		</>
	);
};

export default PopupInput;
