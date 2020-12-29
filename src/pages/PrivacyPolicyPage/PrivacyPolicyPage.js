import React, { useContext, useEffect, useState } from 'react';
import ReactHtmlParser from 'react-html-parser';

// components
import { TypesInformationItem } from 'components/TypesInformationItem';
import { ListBlock } from 'components/ListBlock';

// content
import APP_DATA from 'utils/jsonAppData';
import { JsonDataContext } from 'context/jsonData';

const PrivacyPolicyPage = () => {
	const [listBlockData, setListBlockData] = useState(null);
	const { appBaseData } = useContext(JsonDataContext);
	const { langApp } = useContext(JsonDataContext);

	useEffect(() => {
		if (appBaseData) {
			setListBlockData(appBaseData);
		}
	}, [appBaseData]);

	return (
		<>
			<section className="section">
				<div className="section_in">
					<div className="privacy_page_head">
						<div className="privacy_page_head_title">
							<h1 className="section_title">{APP_DATA.privacyPolicyPage.privacyPageHead.title}</h1>
						</div>
						<div className="privacy_page_head_content">
							<div className="privacy_page_head_content_col">
								<div className="section_descr">{ReactHtmlParser(APP_DATA.privacyPolicyPage.privacyPageHead.descr)}</div>
							</div>
							<div className="privacy_page_head_content_col">
								<div className="privacy_page_date">{APP_DATA.privacyPolicyPage.privacyPageHead.date}</div>
								<div className="privacy_page_info">
									<div className="section_descr">{ReactHtmlParser(APP_DATA.privacyPolicyPage.privacyPageHead.info)}</div>
								</div>
							</div>
						</div>
					</div>
					<div className="types_information_block">
						<div className="types_information_block_list">
							{APP_DATA.privacyPolicyPage.typesInformation && APP_DATA.privacyPolicyPage.typesInformation.map((item, index) => {
								return (
									(index > 0)
										? <TypesInformationItem itemData={item} key={item.id} v2Mod />
										: (
											<TypesInformationItem itemData={item} key={item.id} />
										)
								);
							})}
						</div>
					</div>
					<div className="types_information_block">
						<div className="types_information_block_list">
							{APP_DATA.privacyPolicyPage.informationBlock && APP_DATA.privacyPolicyPage.informationBlock.map((item) => {
								return <TypesInformationItem itemData={item} key={item.id} />;
							})}
						</div>
					</div>
				</div>
			</section>
			{listBlockData && <ListBlock items={listBlockData.address} title={listBlockData.contacts_title[langApp]} />}
		</>
	);
};

export default PrivacyPolicyPage;
