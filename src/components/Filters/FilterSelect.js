import React, { useContext, useState } from 'react';

import { JsonDataContext } from 'context/jsonData';
import { CheckBox } from 'components/Form';
import {
	filterByTypeId,
	filterByAllActiveOptions,
	toggleFilterCheckedOption,
	filterByObjectType,
	getType,
} from 'utils';

const FilterSelect = ({
	title,
	selectType,
	options,
	allObjects,
	allFilteredObjects,
	setAllFilteredObjects,
	isFilterLabelsOpen,
	setFilterLabelsOpen,
	updatedFiltersData,
	setUpdatedFiltersData,
	setFilterApplied,
}) => {
	const [isDropDownOpen, setDropDownOpen] = useState(false);
	const { langApp } = useContext(JsonDataContext);

	const toggleDropDownState = () => setDropDownOpen(!isDropDownOpen);

	const checkBoxOnChange = (type, id, checked, value) => {
		const updatedFilterList = toggleFilterCheckedOption(updatedFiltersData, type, id, checked);

		if (!checked) {
			if (selectType === 'object_type') {
				const filteredObjectList = filterByObjectType(allFilteredObjects, value, id);

				setAllFilteredObjects(filteredObjectList);
			} else {
				const filteredObjectList = filterByTypeId(allFilteredObjects, updatedFilterList, selectType, id);

				setAllFilteredObjects(filteredObjectList);
			}
			if (!isFilterLabelsOpen) {
				setFilterLabelsOpen(true);
				setFilterApplied(true);
			}
		} else {
			const updatedObjectList = filterByAllActiveOptions(allObjects, updatedFilterList, selectType);

			setAllFilteredObjects(updatedObjectList);
		}

		setUpdatedFiltersData(updatedFilterList);
	};

	return (
		<div className="filter_select">
			<button
				type="button"
				className="filter_select_title"
				onClick={toggleDropDownState}
			>
				{title}
			</button>
			{isDropDownOpen && (
				<div className="filter_select_dropdown">
					<ul className="filters_select_list">
						{options.map(({
							value,
							ID,
							checked,
							type,
						}, index) => {
							const preparedCheckBoxName = `${selectType}_${ID}`;
							const preparedValue = getType(value) === 'Object' ? value[langApp] : value;
							return (
								<li className="filters_select_item" key={index}>
									<CheckBox
										title={preparedValue}
										id={preparedCheckBoxName}
										name={preparedCheckBoxName}
										checked={checked}
										onChange={() => checkBoxOnChange(type, ID, checked, preparedValue)}
										v2Mod
									/>
								</li>
							);
						})}
					</ul>
				</div>
			)}
		</div>
	);
};

export default FilterSelect;
