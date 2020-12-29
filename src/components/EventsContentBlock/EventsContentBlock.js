import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const EventsContentBlock = ({
	title,
	rowTitle,
	descrCol1,
	descrCol2,
	btnTitle,
	btnUrl,
}) => {
	return (
		<>
			<section className="section">
				<div className="section_in">
					<div className="section_title decor_mod offset_mod">{ ReactHtmlParser(title)}</div>
					<div className="section_side width_v5_mod">
						{rowTitle && (
							<div className="section_row right_offset_mod">
								<div className="section_col col_2_mod">
									<h3 className="section_title size_v2_mod offset_v4_mod">{ ReactHtmlParser(rowTitle)}</h3>
								</div>
							</div>
						)}
						<div className="section_row right_offset_mod">
							{descrCol1 && (
								<div className="section_col col_2_mod">
									<div className="section_descr">{ ReactHtmlParser(descrCol1)}</div>
								</div>
							)}
							{descrCol2 && (
								<div className="section_col col_2_mod">
									<div className="section_descr offset_v2_mod">
										{ ReactHtmlParser(descrCol2)}
									</div>
									 {btnTitle && <a className="btn_v4" rel="noreferrer" href={btnUrl} target="_blank">{btnTitle}</a>}
								</div>
							)}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default EventsContentBlock;
