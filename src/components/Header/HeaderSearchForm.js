import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { JsonDataContext } from 'context/jsonData';
import { fieldValidation } from 'utils';

import { ReactComponent as IconSearch } from 'i/icons/search.svg';

const HeaderSearchForm = () => {
	const { setGlobalSearchQuery } = useContext(JsonDataContext);
	const [inputValue, setInputValue] = useState('');
	const history = useHistory();

	const onChange = e => {
		setInputValue(e.target.value);
	};

	const onSubmit = async (e) => {
		e.preventDefault();

		if (fieldValidation(inputValue)) {
			setInputValue('');
			setGlobalSearchQuery(inputValue);
			history.push('/search');
		}
	};

	return (
		<form className="header_search_form" onSubmit={onSubmit}>
			<div className="header_search_field">
				<dl className="form_cell form_cell_v1_mod">
					<dt className="form_cell_title form_v1_mod hline_hide_mod">
						<span>header search</span>
					</dt>
					<dd className="form_field_wrap form_v1_mod hline_hide_mod">
						<label htmlFor="header_search2">
							<input
								className="form_field default_mod"
								type="text"
								id="header_search2"
								value={inputValue}
								onChange={onChange}
							/>
						</label>
					</dd>
				</dl>
			</div>
			<button className="header_search_btn" type="button">
				<IconSearch className="icon icon-search size_mod" />
			</button>
		</form>
	);
};

export default HeaderSearchForm;
