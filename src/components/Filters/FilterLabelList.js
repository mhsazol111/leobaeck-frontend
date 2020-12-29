import React, { useState, useEffect, useContext } from 'react';
import { toggleFilterCheckedOption, getType, filterByAllActiveOptions } from 'utils';
import { ReactComponent as IconClose2 } from 'i/icons/close_2.svg';
import { JsonDataContext } from 'context/jsonData';

const FilterLabelList = ({
	labelList,
	allObjects,
	setAllFilteredObjects,
	isFilterLabelsOpen,
	setFilterLabelsOpen,
	setUpdatedFiltersData,
	setFilterApplied,
}) => {
	const [activeFilterList, setActiveFilterList] = useState([]);
	const { langApp } = useContext(JsonDataContext);
	const onClick = (type, id, checked) => {
		const updatedFilterList = toggleFilterCheckedOption(labelList, type, id, checked);
		const updatedObjectList = filterByAllActiveOptions(allObjects, updatedFilterList);

		setUpdatedFiltersData(updatedFilterList);
		setAllFilteredObjects(updatedObjectList);

		// // hide filter labels block if no labels
		if (updatedObjectList.length === allObjects.length && isFilterLabelsOpen) {
			setFilterLabelsOpen(false);
			setFilterApplied(false);
		}
	};

	const selectCheckedOption = () => {
		const selectedCheckedOptionArray = [];

		Object.keys(labelList).forEach(select => {
			const selectOptions = labelList[select].options;
			if (selectOptions) {
				selectOptions.forEach(option => {
					if (option.checked) selectedCheckedOptionArray.push(option);

					return null;
				});
			}
		});

		setActiveFilterList(selectedCheckedOptionArray);
	};

	useEffect(() => {
		if (labelList) {
			selectCheckedOption();
		}
	}, [labelList]);

	return (
		<ul className="filter_label_list">
			{activeFilterList && activeFilterList.length ? (
				activeFilterList.map(({
					value,
					ID,
					type,
					checked,
				}) => {
					const preparedValue = getType(value) === 'Object' ? value[langApp] : value;
					return (
						<li className="filter_label_list_item" key={ID}>
							<button
								className="filter_label"
								type="button"
								onClick={() => onClick(type, ID, checked)}
							>
								{preparedValue}
								<span className="filter_label_icon">
									<IconClose2 className="icon icon-close_2 size_mod color_mod" />
								</span>
							</button>
						</li>
					);
				})
			) : null}
		</ul>
	);
};

export default FilterLabelList;
