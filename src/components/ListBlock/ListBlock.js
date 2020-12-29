import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const ListBlock = ({ title, items }) => {
	return (
		<>
			<section className="section">
				<div className="section_in">
					<div className="section_side width_v1_mod">
						  <div className="section_title decor_mod">{ ReactHtmlParser(title)}</div>
						 <div className="list_block">
							{items.map((item) => {
								return (
									<div className="list_item" key={item.id}>
										<div className="list_col title_mod">
											<div className="section_title size_v2_mod">{item.city}</div>
										</div>
										<div className="list_col list_mod">
											<div className="section_descr list_mod">{ ReactHtmlParser(item.address)}</div>
										</div>
										<div className="list_col list_mod">
											 <ul className="contact_link_list">
												 {item.phones.map((linkItem) => {
													return (
														<li className="contact_link_item" key={linkItem.id}>
															<a className="contact_link" href={`tel:${linkItem.phone}`}>{linkItem.phone}</a>
														</li>
													);
												})}
											 </ul>
										</div>
										<div className="list_col list_mod">
											<ul className="contact_link_list">
												<li className="contact_link_item">
													<a className="contact_link" href={`mailto:${item.email}`}>{item.email}</a>
												</li>
											</ul>
										</div>
									</div>
								);
							})}
						 </div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ListBlock;
