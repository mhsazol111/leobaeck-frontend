import React, { useContext, useEffect, useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Helmet } from 'react-helmet';
import { Link, useLocation } from 'react-router-dom';
import dateFormat from 'dateformat';
import { NavBlock } from 'components/NavBlock';

import { JsonDataContext } from 'context/jsonData';
import { getSingleEssay, getAllEssay } from 'api/data';
import { checkAuthorName, stripTags } from 'utils';

// components
import { ReactComponent as IconHeart } from 'i/icons/heart.svg';
import { EssayMenu, EssayLinks, EssayPageNav } from 'components/Essay';
import { ThemeSwitcher } from 'components/ThemeSwitcher';
import { Alert, useAlert } from 'components/Alert';
import { EssayEpochList } from 'components/EssayEpochList';

import { ReactComponent as IconFacebook } from 'i/icons/facebook.svg';
import { ReactComponent as IconTwitter } from 'i/icons/twitter.svg';
import { ReactComponent as IconMail } from 'i/icons/envelope.svg';

// content
import APP_DATA from 'utils/jsonAppData';
import { ESSAY_ARRAY } from './constant';

const EssayPage = props => {
	const [essayData, setEssayData] = useState(null);
	const [epochEssay, setEpochEssay] = useState(null);
	const [isEssayLoaded, setEssayLoaded] = useState(false);
	const [isFetchError, setFetchError] = useState(false);
	const [updateEssay, setUpdateEssay] = useState(false);
	const { langApp, allEssayData, setAllEssayData } = useContext(JsonDataContext);
	const [alert, showAlert, hideAlert] = useAlert();
	const location = useLocation();
	const [prevLocation, setPrevLocation] = useState('');

	const getEssayById = allEssay => {
		const currentPageEssay = allEssay.filter(item => {
			if (item.id === parseInt(props.match.params.slug)) {
				return true;
			}

			return false;
		});

		const getAllEpochEssay = () => {
			const preparedEpochEssay = allEssay.filter(item => {
				if (item.acf.show_in_timeline[0] === 'true') {
					return true;
				}

				return false;
			});

			return preparedEpochEssay;
		};

		if (currentPageEssay.length) {
			setEssayData(currentPageEssay[0]);

			if (currentPageEssay[0].acf.show_in_timeline[0] === 'true') {
				const res = getAllEpochEssay();
				setEpochEssay(res);
			} else {
				setEpochEssay(null);
			}
		}
	};

	const fetchAllEssay = async () => {
		try {
			const res = await getAllEssay();

			setAllEssayData(res.data);
			getEssayById(res.data);
			setEssayLoaded(true);
		} catch (err) {
			showAlert(err.message, 'danger');
			setEssayLoaded(false);
			setFetchError(true);
		}
	};

	useEffect(() => {
		fetchAllEssay();
	}, []);

	useEffect(() => {
		if (isEssayLoaded && prevLocation !== location.pathname) {
			getEssayById(allEssayData);
			setPrevLocation(location.pathname);
		}
	}, [location, isEssayLoaded]);

	console.log(essayData);

	return (
		essayData && (
			<>
				{essayData.title && (
					<Helmet>
						<title>{essayData.title[langApp]}</title>
					</Helmet>
				)}
				<section className="section">
					<div className="section_in">
						<div className="essay">
							<div className="essay_col sidebar_mod">
								{epochEssay && epochEssay.length ? (
									<>
										<div className="essay_sidebar_head">
											<div className="essay_sidebar_title">Epoch Introductory Essay</div>
											<div className="essay_slidebad_like">
												{/* <IconHeart className="icon icon-heart size_mod" /> */}
											</div>
										</div>
										<div className="essay_epoch_list_w">
											<EssayEpochList
												listItems={epochEssay}
												pageSlugId={props.match.params.slug}
											/>
										</div>
									</>
								) : (
									<>
										{essayData.object_info && (
											<>
												<div className="essay_sidebar_head">
													<div className="essay_sidebar_title">{essayData.object_info.object_number[langApp]}</div>
													<div className="essay_slidebad_like">
														{/* <IconHeart className="icon icon-heart size_mod" /> */}
													</div>
												</div>
												<Link
													className="section_title offset_v2_mod size_v2_mod"
													to={`/object/${essayData.object_info.id}`}
												>
													{ReactHtmlParser(essayData.object_info.title[langApp])}
												</Link>
												{essayData.object_info.image && essayData.object_info.image.url && (
													<div className="essay_preview">
														<div className="essay_preview_img_wrap">
															<img className="essay_preview_img" src={essayData.object_info.image.url} alt={essayData.object_info.image.alt} />
														</div>
													</div>
												)}
											</>
										)}
										{essayData.object_info.essays && essayData.object_info.essays.length > 0 && (
											<EssayLinks
												linkList={essayData.object_info.essays}
												pageSlug={props.match.params.slug}
												offsetMod
											/>
										)}
									</>
								)}
								<div className="essay_sidebar_bottom">
									{
										essayData.object_info.download
										&& essayData.object_info.download.link
										&& essayData.object_info.download.link[langApp]
										&& (
											<a
												className="btn_v4"
												download={essayData.object_info.download.title[langApp]}
												href={essayData.object_info.download.link[langApp].url}
												target={essayData.object_info.download.link[langApp].target}
											>
												{essayData.object_info.download.title[langApp]}
											</a>
										)
									}
									<ul className="social_list essay_mod">
										<li className="social_item">
											<a href={`https://www.facebook.com/sharer.php?u=${window.location.href}%2F&text=${stripTags(essayData.title[langApp])}`} target="_blank" rel="noreferrer" className="social_link essay_mod" data-show-count="false">
												<IconFacebook className="icon icon-twitter size_mod" />
											</a>
										</li>
										<li className="social_item">
											<a href={`https://twitter.com/intent/tweet?url=${window.location.href}%2F&text=${stripTags(essayData.title[langApp])}`} target="_blank" rel="noreferrer" className="social_link essay_mod" data-show-count="false">
												<IconTwitter className="icon icon-twitter size_mod" />
											</a>
										</li>
										<li className="social_item">
											<a href={`mailto:?subject=${stripTags(essayData.title[langApp])}&body=Visit this site ${window.location.href}`} target="_blank" rel="noreferrer" className="social_link essay_mod" data-show-count="false">
												<IconMail className="icon icon-twitter size_mod" />
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div className="essay_col content_mod">
								<div className="essay_menu_wrap">
									{!epochEssay && (
										<EssayPageNav
											navList={APP_DATA.essayPage.essayButtonList}
											navLinks={essayData.nav_links}
											objectId={essayData.object_info.id}
										/>
									)}
									<div className="essay_theme">
										<ThemeSwitcher />
									</div>
								</div>
								<div className="essay_block">
									<div className="essay_head">
										<div className="essay_head_top">
											<h2 className="section_title size_v2_mod limit_mod">{ReactHtmlParser(essayData.title[langApp])}</h2>
											<div className="essay_date">{dateFormat(essayData.date, 'mediumDate', true)}</div>
										</div>
										{essayData.object_info.author && checkAuthorName(essayData.object_info.author) && (
											<div className="essay_head_author">{essayData.object_info.author[langApp]}</div>
										)}
									</div>
									<div className="essay_content_wrap">
										<div className="essay_content">
											{ReactHtmlParser(essayData.acf[langApp])}
										</div>
									</div>
								</div>
							</div>
						</div>
						{!epochEssay && (
							<NavBlock
								navList={APP_DATA.essayPage.essayButtonList}
								navLinks={essayData.nav_links}
								objectId={essayData.object_info.id}
							// setUpdatePage={setUpdateEssay}
							/>
						)}
					</div>
				</section>
			</>
		)
	);
};

export default EssayPage;
