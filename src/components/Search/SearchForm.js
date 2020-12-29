import React, { useContext, useEffect, useState } from 'react';

import { searchByEveryThing } from 'api/search';
import { fieldValidation } from 'utils';
import { JsonDataContext } from 'context/jsonData';
import APP_DATA from 'utils/jsonAppData';

// import { FILTER_LIST } from './constant';

const SearchForm = ({
	isSearchLoading,
	isFormSubmitted,
	setSearchLoading,
	setSearchResult,
	setFilteredSearchResult,
	setFormSubmitted,
	setSearchResultTotalPages,
	showLoadMoreBtn,
}) => {
	const { langApp, globalSearchQuery, setGlobalSearchQuery } = useContext(JsonDataContext);
	const [inputValue, setInputValue] = useState(globalSearchQuery);

	const onChange = e => {
		const { value } = e.target;

		setInputValue(value);
	};

	const onSubmit = async (e, searchQuery) => {
		const preparedSearchQuery = searchQuery || inputValue;

		if (e) {
			e.preventDefault();
		}

		if (fieldValidation(preparedSearchQuery)) {
			try {
				setSearchLoading(true);
				setFormSubmitted(true);

				const res = await searchByEveryThing(preparedSearchQuery);

				const preparedTotalPagesValue = parseInt(res.headers['x-wp-totalpages']);

				if (res && res.data) {
					setSearchResult(res.data);
					setFilteredSearchResult(res.data);
					setSearchLoading(false);
					setGlobalSearchQuery(preparedSearchQuery);
					setSearchResultTotalPages(preparedTotalPagesValue);
					setFormSubmitted(false);

					if (preparedTotalPagesValue > 1) {
						showLoadMoreBtn(true);
					} else {
						showLoadMoreBtn(false);
					}
				}
			} catch (err) {
				setFormSubmitted(false);
				// showAlert(err.message, 'danger');
				setSearchLoading(false);
			}
		}
	};

	useEffect(() => {
		if (fieldValidation(globalSearchQuery) && !isFormSubmitted) {
			onSubmit(null, globalSearchQuery);
			setInputValue(globalSearchQuery);
		}
	}, [globalSearchQuery]);

	return (
		<form className="search_form" onSubmit={onSubmit}>
			<div className="search_form_heading">
				<div className="search_form_input">
					<dl className="form_cell">
						<dt className="form_cell_title">
							<span />
						</dt>
						<dd className="form_field_wrap">
							<label htmlFor="search">
								<input
									className="form_field default_mod search_mod"
									type="text"
									name="search"
									id="search"
									placeholder={APP_DATA.searchPage.searchInputPlaceholder[langApp]}
									disabled={isSearchLoading}
									onChange={onChange}
									defaultValue={inputValue}
									value={inputValue}
								/>
							</label>
						</dd>
					</dl>
				</div>
				<div className="search_form_button">
					<button
						className="btn_v4"
						type="submit"
						disabled={isSearchLoading}
					>
						{APP_DATA.searchPage.searchButton[langApp]}
					</button>
				</div>
			</div>
		</form>
	);
};

export default SearchForm;
