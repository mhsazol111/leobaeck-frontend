import React, { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';

// import { ReactComponent as IconFilter2 } from 'i/icons/filter_1.svg';

import { JsonDataContext } from 'context/jsonData';
import { getType, uncheckAllFilterOption, generateRandomString } from 'utils';
import APP_DATA from 'utils/jsonAppData';
import FilterActionButton from './FilterActionButton';
import FilterSelect from './FilterSelect';
import FilterLabelList from './FilterLabelList';

const Filters = ({
	allObjects,
	allFilteredObjects,
	setAllFilteredObjects,
	mapFilter,
	collectionFilter,
	v2Mod,
	v3Mod,
}) => {
	const { langApp } = useContext(JsonDataContext);
	const { filtersData, setFiltersData } = useContext(JsonDataContext);
	const [updatedFiltersData, setUpdatedFiltersData] = useState({});

	const [isFilterLabelsOpen, setFilterLabelsOpen] = useState(false);
	const [isFilterApplied, setFilterApplied] = useState(false);

	const toggleFilterLabelsVisibility = () => {
		setFilterLabelsOpen(!isFilterLabelsOpen);
	};

	const clearAllFilters = () => {
		const copiedObjectsList = [...allObjects];
		const updatedFilterData = uncheckAllFilterOption(updatedFiltersData);

		setFilterLabelsOpen(false);
		setAllFilteredObjects(copiedObjectsList);
		setUpdatedFiltersData(updatedFilterData);
		setFilterApplied(false);
	};

	const filtersWrapClasses = classNames('filters_wrap', {
		v2_mod: v2Mod,
		v3_mod: v3Mod,
	});

	const updateFilterData = () => {
		const updatedFilters = {};

		Object.keys(filtersData).map(filter => {
			if (collectionFilter && filter === 'object_type') {
				return false;
			}

			if (mapFilter && filter !== 'tags' && filter !== 'location') {
				return false;
			}

			const selectType = filter;
			const selectTitle = filtersData[filter].title;
			const selectOptions = getType(filtersData[filter].options) === 'Array' ? filtersData[filter].options : [];
			const updatedSelectFilter = {};

			updatedSelectFilter[selectType] = {
				title: selectTitle,
			};

			const res = selectOptions.map(option => {
				const optionId = option.ID !== undefined ? option.ID : generateRandomString(6);
				return {
					...option,
					ID: optionId,
					type: selectType,
					checked: false,
				};
			});

			updatedSelectFilter[selectType].options = res;
			updatedFilters[selectType] = updatedSelectFilter[selectType];

			return updatedSelectFilter;
		});

		setUpdatedFiltersData(updatedFilters);
	};

	useEffect(() => {
		if (filtersData) {
			updateFilterData();
		}
	}, [filtersData]);

	return (
		<>
			<div className={filtersWrapClasses}>
				<div className="filters_list_w">
					{/* <button className="filters_mob_btn" type="button">
						{searchBtnTitle}
						<div className="filters_icon">
							<IconFilter2 className="icon icon-filter_1 size_mod" />
						</div>
					</button> */}
					<div className="filters_list">
						<FilterActionButton
							title={APP_DATA.filters.buttonShowAllFilterLabels[langApp]}
							onClick={toggleFilterLabelsVisibility}
						/>
						{updatedFiltersData ? (
							Object.keys(updatedFiltersData).map((filter, index) => {
								return (
									<div className="filters_item select_mod" key={index}>
										<FilterSelect
											key={index}
											title={updatedFiltersData[filter].title}
											selectType={filter}
											allObjects={allObjects}
											options={updatedFiltersData[filter].options}
											allFilteredObjects={allFilteredObjects}
											setAllFilteredObjects={setAllFilteredObjects}
											isFilterLabelsOpen={isFilterLabelsOpen}
											setFilterLabelsOpen={setFilterLabelsOpen}
											updatedFiltersData={updatedFiltersData}
											setUpdatedFiltersData={setUpdatedFiltersData}
											setFilterApplied={setFilterApplied}
										/>
									</div>
								);
							})
						) : null}
						{isFilterApplied ? (
							<FilterActionButton
								title={APP_DATA.filters.buttonClearAllFilters[langApp]}
								onClick={clearAllFilters}
								clearMod
							/>
						) : null}
					</div>
				</div>
				{isFilterLabelsOpen ? (
					<FilterLabelList
						labelList={updatedFiltersData}
						isFilterLabelsOpen={isFilterLabelsOpen}
						allObjects={allObjects}
						allFilteredObjects={allFilteredObjects}
						setAllFilteredObjects={setAllFilteredObjects}
						setFilterLabelsOpen={setFilterLabelsOpen}
						setUpdatedFiltersData={setUpdatedFiltersData}
						setFilterApplied={setFilterApplied}
					/>
				) : null}
			</div>
		</>
	);
};

export default Filters;
