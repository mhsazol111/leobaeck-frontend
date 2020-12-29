import React, { useState, useContext } from 'react';

import { Filters } from 'components/Filters';

import { Alert, useAlert } from 'components/Alert';

import { JsonDataContext } from 'context/jsonData';
import { searchByEveryThing } from 'api/search';
import { Spinner } from 'components/Spinner';
import { SearchForm, SearchResultList } from 'components/Search';
import { LoadMoreButton } from 'components/Buttons';

const SearchPage = () => {
	const { globalSearchQuery } = useContext(JsonDataContext);
	const [searchResult, setSearchResult] = useState(false);
	const [filteredSearchResult, setFilteredSearchResult] = useState(false);
	const [alert, showAlert, hideAlert] = useAlert();
	const [currentSearchResultPage, setCurrentSearchResultPage] = useState(1);
	const [isFormSubmitted, setFormSubmitted] = useState(false);
	const [isSearchLoading, setSearchLoading] = useState(false);
	const [loadMoreBtn, showLoadMoreBtn] = useState(false);
	const [isLoadingMore, setLoadingMore] = useState(false);
	const [searchResultTotalPages, setSearchResultTotalPages] = useState(0);

	const mergeSearchResult = newSearchResult => {
		const mergedSearchResult = [...searchResult, ...newSearchResult];

		setSearchResult(mergedSearchResult);
		setFilteredSearchResult(mergedSearchResult);
	};

	const loadMoreSearchResult = async () => {
		const updatedSearchResultPage = currentSearchResultPage + 1;

		if (updatedSearchResultPage <= searchResultTotalPages) {
			try {
				setLoadingMore(true);
				const res = await searchByEveryThing(globalSearchQuery, updatedSearchResultPage);

				if (res && res.data.length) {
					mergeSearchResult(res.data);
					setCurrentSearchResultPage(updatedSearchResultPage);
					setLoadingMore(false);

					// hide load more button if no search pages available
					if (updatedSearchResultPage === searchResultTotalPages) {
						showLoadMoreBtn(false);
					}
				} else {
					setLoadingMore(false);
					showLoadMoreBtn(false);
				}
			} catch (e) {
				throw new Error(e.message);
			}
		}
	};

	console.log('search result', filteredSearchResult);

	return (
		<>
			<section className="section">
				<div className="section_in">
					<div className="section_side width_v5_mod">
						<SearchForm
							isFormSubmitted={isFormSubmitted}
							isSearchLoading={isSearchLoading}
							setSearchResult={setSearchResult}
							setFilteredSearchResult={setFilteredSearchResult}
							setSearchLoading={setSearchLoading}
							setFormSubmitted={setFormSubmitted}
							setSearchResultTotalPages={setSearchResultTotalPages}
							showLoadMoreBtn={showLoadMoreBtn}
						/>
						{/* <div className="search_filters">
							<Filters
								allObjects={searchResult}
								allFilteredObjects={filteredSearchResult}
								setAllFilteredObjects={setFilteredSearchResult}
							/>
						</div> */}
						{alert.visible ? (
							<Alert
								alert={alert}
								hide={hideAlert}
							/>
						) : null}
						{!isSearchLoading ? (
							filteredSearchResult && filteredSearchResult.length ? (
								<SearchResultList
									result={filteredSearchResult}
								/>
							) : (
								filteredSearchResult && !filteredSearchResult.length && (
									<h2 className="section_title size_v2_mod center_lvl_mod">No result</h2>
								)
							)
						) : (
							isFormSubmitted && (
								<Spinner />
							)
						)}
						{filteredSearchResult.length && loadMoreBtn ? (
							<div className="search_result_btn">
								<LoadMoreButton
									isDisabled={isSearchLoading}
									isLoading={isLoadingMore}
									onClick={loadMoreSearchResult}
								/>
							</div>
						) : null}
					</div>
				</div>
			</section>
		</>
	);
};

export default SearchPage;
