import React, { useContext, useState, useEffect } from 'react';
import { JsonDataContext } from 'context/jsonData';

// content
import APP_DATA from 'utils/jsonAppData';

// components
import { ListBlock } from 'components/ListBlock';

const Credits = () => {
	const { langApp } = useContext(JsonDataContext);
	const { pagesData } = useContext(JsonDataContext);
	const { appBaseData } = useContext(JsonDataContext);

	const [listBlockData, setListBlockData] = useState(null);

	useEffect(() => {
		if (appBaseData) {
			setListBlockData(appBaseData);
		}
	}, [appBaseData]);

	return (
		<>
			<section className="section">
				<div className="section_in">
					<h2 className="section_title offset_mod">{APP_DATA.credits.supporters.title}</h2>
					<div className="section_side width_v5_mod">
						<div className="credit_list">
							{APP_DATA.credits.supporters.list.map((item) => {
								const mod = item.content.length === 1 ? 'v2_mod' : '';
								return (
									<div className={`credit_item ${mod || ''}`}>
										<div className="credit_title">{item.title}</div>
										<div className="credit_content">
											{item.content.map((subitem) => {
												return (
													<div className="credit_content_item">
														<div className="credit_content_title">{subitem.title}</div>
														{subitem.logos && (
															<div className={`credit_content_logos ${subitem.logos.length > 1 ? 'multiple_mod' : ''}`}>
																{subitem.logos.map((imgSrc) => {
																	return (
																		<div className="credit_content_logo_wrap">
																			<img className="credit_content_logo" src={imgSrc} alt="#" />
																		</div>
																	);
																})}
															</div>
														)}
														{subitem.text && <div className="credit_content_text">{subitem.text}</div>}
													</div>
												);
											})}
										</div>
									</div>
								);
							})}
						</div>
						<div className="credit_partner_list_wrap">
							<div className="credit_block_title">{APP_DATA.credits.partners.title}</div>
							<ul className="credit_partner_list">
								{APP_DATA.credits.partners.list.map((item) => {
									return (
										<li className="credit_partner_list_item">{item}</li>
									);
								})}
							</ul>
						</div>
					</div>
				</div>
			</section>
			<section className="section">
				<div className="section_in">
					<h2 className="section_title offset_mod">{APP_DATA.credits.thanks.title}</h2>
					<div className="section_side width_v5_mod">
						<div className="credit_thanks_list">
							{APP_DATA.credits.thanks.list && APP_DATA.credits.thanks.list.map((item) => {
								return (
									<div className="credit_thanks_item" key={item.id}>
										<div className="credit_thanks_item_in">
											<div className="credit_thanks_head">
												<h3 className="credit_thanks_head_title">{item.title}</h3>
											</div>
											<ul className="credit_thanks_inner_list">
												{item.list && item.list.map((innerItem) => {
													return (
														<li className="credit_thanks_inner_item" key={innerItem.id}>{innerItem}</li>
													);
												})}
											</ul>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</section>
			{listBlockData && <ListBlock items={listBlockData.address} title={listBlockData.contacts_title[langApp]} />}
		</>
	);
};

export default Credits;
