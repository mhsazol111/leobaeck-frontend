/* eslint-disable guard-for-in */
export const getPageBySlug = (allPages, pageSlug) => {
	const resultPage = allPages.filter(({ slug }) => {
		if (slug === pageSlug) return true;

		return false;
	});

	return resultPage;
};

export const fieldValidation = fieldValue => {
	if (fieldValue.trim() === '') {
		return false;
	}

	return true;
};

export const passwordValidation = (fieldName, fieldValue, canBeBlank = false) => {
	if (fieldValue.trim() === '' && !canBeBlank) {
		return `${fieldName} is required`;
	}

	return null;
};

export const checkFilterLabelExist = (labelArray, labelId) => {
	let isLabelExist = false;

	labelArray.forEach(label => {
		if (label.id === labelId) {
			isLabelExist = true;
		}
	});

	return isLabelExist;
};

export const deleteLabelFromList = (labelArray, labelId) => {
	const updatedArray = labelArray.filter(({
		id,
	}) => {
		if (id !== labelId) {
			return true;
		}

		return false;
	});

	return updatedArray;
};

export const nameValidation = (fieldName, fieldValue) => {
	if (fieldValue.trim() === '') {
		return `${fieldName} is required`;
	}
	if (/[^a-zA-Z0-9 -]/.test(fieldValue)) {
		return 'Invalid characters';
	}
	if (fieldValue.trim().length < 3) {
		return `${fieldName} needs to be at least three characters`;
	}
	return null;
};

export const emailValidation = email => {
	if (
		/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
			email,
		)
	) {
		return null;
	}
	if (email.trim() === '') {
		return 'Email is required';
	}
	return 'Please enter a valid email';
};

export const phoneValidation = (fieldName, fieldValue) => {
	if (fieldValue.trim() === '') {
		return `${fieldName} is required`;
	}

	if (!(/^[0-9]+$/.test(fieldValue))) {
		return 'Invalid characters';
	}

	return null;
};

export const checkboxValidation = (fieldName, fieldValue) => {
	if (typeof fieldValue !== 'boolean') {
		return `${fieldName} is invalid`;
	}

	return null;
};

export const filterEventsById = (allEvents, eventId) => {
	const preparedEventId = parseInt(eventId);
	const event = allEvents.filter(({ ID }) => {
		if (ID === preparedEventId) return true;

		return false;
	});

	return event[0];
};

export const getType = (obj) => {
	const type = Object.prototype.toString.call(obj);

	if (type === '[object Object]') {
		return 'Object';
	} else if (type === '[object Array]') {
		return 'Array';
	} else if (type === '[object Boolean]') {
		return 'Boolean';
	} else if (type === '[object Number]') {
		return 'Number';
	} else {
		return 'Literal';
	}
};

export const getPathNameFromUrl = url => {
	const pathName = new URL(url).pathname;

	return pathName;
};

// cookies
export const setCookie = (name, cookieValue, cookieProps) => {
	const props = cookieProps || {};
	let exp = props.expires;

	if (typeof exp === 'number' && exp) {
		const d = new Date();
		d.setTime(d.getTime() + exp * 1000);
		props.expires = d;
		exp = props.expires;
	}

	if (exp && exp.toUTCString) { props.expires = exp.toUTCString(); }
	const value = encodeURIComponent(cookieValue);
	let updatedCookie = `${name} = ${value}`;

	// REFACTOR
	// eslint-disable-next-line no-restricted-syntax
	// eslint-disable-next-line guard-for-in
	// eslint-disable-next-line no-restricted-syntax
	for (const propName in props) {
		updatedCookie += `; ${propName}`;
		const propValue = props[propName];
		if (propValue !== true) {
			updatedCookie += `=${propValue}`;
		}
	}

	document.cookie = updatedCookie;
};

export const getCookie = (name) => {
	const matches = document.cookie.match(new RegExp(
		`(?:^|; )${name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1')}=([^;]*)`,
	));
	return matches ? decodeURIComponent(matches[1]) : undefined;
};

export const stripTags = htmlString => {
	const div = window.document.createElement('div');
	div.innerHTML = htmlString;
	return div.textContent || div.innerText || '';
};

export const deleteCookie = (name) => {
	setCookie(name, null, { expires: -1 });
};

export const getAllCheckedOptionId = filterSelects => {
	const optionsId = [];

	Object.keys(filterSelects).forEach(label => {
		filterSelects[label].options.forEach(option => {
			if (option.checked) optionsId.push(option.ID);
		});
	});

	return optionsId;
};

export const isOptionTypeMath = (filterSelects, objectType) => {
	let isTypeMath = false;

	Object.keys(filterSelects).forEach(label => {
		filterSelects[label].options.forEach(option => {
			if (option.checked && option.value === objectType) {
				isTypeMath = true;
			}
		});
	});

	return isTypeMath;
};

export const isCheckedOptionIdMatch = (checkedOptionsArray, objectIdArray) => {
	const isMatch = checkedOptionsArray.every(i => objectIdArray.includes(i));

	return isMatch;
};

// filter by tags, time_period, location id
export const filterByTypeId = (objectList, filterList, type) => {
	const allCheckedOptionId = getAllCheckedOptionId(filterList);

	const filteredList = objectList.filter(item => {
		let isTypeIdMatch;

		if (item.taxonomies) {
			isTypeIdMatch = isCheckedOptionIdMatch(allCheckedOptionId, item.taxonomies[type]);
		} else {
			isTypeIdMatch = isCheckedOptionIdMatch(allCheckedOptionId, item[type]);
		}

		if (isTypeIdMatch) {
			return true;
		}

		return false;
	});

	return filteredList;
};

// export const filterByAllActiveOptions = (objectList, labelList) => {
// 	// const checkLabels = objectItem => {
// 	// 	const result = [];
// 	// 	Object.keys(labelList).forEach(label => {
// 	// 		const labelOptions = labelList[label].options;

// 	// 		labelOptions.forEach(option => {
// 	// 			if (option.type === 'object_type') {
// 	// 				if (option.checked && option.value === objectItem.subtype) {
// 	// 					result.push(true);
// 	// 				}
// 	// 			}	else {
// 	// 				let isIdMatch;
// 	// 				const preparedOptionId = option.ID ? option.ID : 0;

// 	// 				if (objectItem.taxonomies) {
// 	// 					isIdMatch = objectItem.taxonomies[option.type].includes(preparedOptionId);
// 	// 				} else {
// 	// 					isIdMatch = objectItem[option.type].includes(preparedOptionId);
// 	// 				}

// 	// 				if (option.checked && isIdMatch) {
// 	// 					result.push(isIdMatch);
// 	// 				}
// 	// 			}
// 	// 		});
// 	// 	});

// 	// 	return result;
// 	// };

// 	const filteredList = objectList.filter(objectItem => {
// 		const result = checkLabels(objectItem);

// 		if (result.length && result.every(Boolean)) {
// 			return true;
// 		}

// 		return false;
// 	});

// 	return filteredList.length ? filteredList : objectList;
// };

export const filterByAllActiveOptions = (objectList, filterList, type) => {
	const allCheckedOptionId = getAllCheckedOptionId(filterList);

	const filteredList = objectList.filter(item => {
		let isItemMatch;

		if (type === 'object_type') {
			isItemMatch = isOptionTypeMath(filterList, item.subtype);
		} else {
			if (item.taxonomies) {
				isItemMatch = isCheckedOptionIdMatch(allCheckedOptionId, item.taxonomies[type]);
			} else {
				isItemMatch = isCheckedOptionIdMatch(allCheckedOptionId, item[type]);
			}
		}

		if (isItemMatch) {
			return true;
		}

		return false;
	});

	return filteredList.length ? filteredList : objectList;
};

export const filterByObjectType = (objectList, optionType) => {
	const preparedOptionTypeValue = optionType.toLowerCase();

	const filteredList = objectList.filter(({
		subtype,
	}) => {
		if (subtype === preparedOptionTypeValue) return true;

		return false;
	});

	return filteredList;
};

// toggle checked property inside filter objects
export const toggleFilterCheckedOption = (filterData, checkBoxType, checkBoxId, checkBoxState) => {
	const updatedFilterData = { ...filterData };

	Object.keys(updatedFilterData).forEach(filter => {
		const filterOptions = updatedFilterData[filter].options;

		if (filter === checkBoxType) {
			filterOptions.forEach((option, index) => {
				if (checkBoxId === option.ID) {
					const updatedFilterOption = { ...option, checked: !checkBoxState };
					filterOptions[index] = updatedFilterOption;
				}
			});
		}
	});

	return updatedFilterData;
};

export const uncheckAllFilterOption = filterData => {
	const clonedFilterData = { ...filterData };
	const allFilterOptions = {};

	Object.keys(clonedFilterData).forEach(select => {
		const selectOptions = clonedFilterData[select].options;

		const updatedSelectOptions = selectOptions.map(option => {
			return {
				...option,
				checked: false,
			};
		});

		allFilterOptions[select] = {
			...clonedFilterData[select],
			options: updatedSelectOptions,
		};
	});

	return allFilterOptions;
};

export const getRandomInt = (min, max) => {
	return Math.floor(Math.random() * (max - min)) + min;
};

export const getRandomChar = string => {
	return string[getRandomInt(0, string.length - 1)];
};

export const generateRandomString = length => {
	const chars = 'abcdefghyjklmnopqrstuvwxyz0123456789!@#$%^&*()';
	let res = '';

	for (let i = 0; i < length; i += 1) {
		res += getRandomInt(1, 2) === 1 ? getRandomChar(chars).toUpperCase() : getRandomChar(chars);
	}

	return res;
};

export const sortByYear = data => {
	const clonedData = [...data];

	clonedData.sort((a, b) => {
		return a.year - b.year;
	});

	return clonedData;
};

export const spliceSplit = (str, index, count, add) => {
	const ar = str.split('');
	ar.splice(index, count, add);

	return ar.join('');
};

export const setItemToLocalStorage = (keyName, keyValue) => {
	window.localStorage.setItem(keyName, keyValue);
};

export const getItemFromLocalStorage = keyName => {
	return window.localStorage.getItem(keyName);
};

export const removeItemFromLocalStorage = keyName => {
	window.localStorage.removeItem(keyName);
};

export const toTitleCase = str => {
	return str.replace(/\w\S*/g, txt => {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});
};

export const checkAuthorName = name => {
	const { en, de } = name;
	if (en.trim() === 'by' || de.trim() === 'von') return false;

	return true;
};
