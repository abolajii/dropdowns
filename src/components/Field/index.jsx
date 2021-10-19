import React from 'react';

import {
	Container,
	FirstContainer,
	FirstDropdown,
	Inner,
	SecondContainer,
	SecondDropdown,
	ThirdContainer,
	ThirdDropdown,
} from './styles';

const Field = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

Field.Inner = function FieldInner({ children, ...restProps }) {
	return <Inner {...restProps}>{children}</Inner>;
};

Field.FirstContainer = function FieldFirstContainer({
	children,
	...restProps
}) {
	return <FirstContainer {...restProps}>{children}</FirstContainer>;
};

Field.FirstDropDown = function FieldFirstDropDown({ children, ...restProps }) {
	return <FirstDropdown {...restProps}>{children}</FirstDropdown>;
};

Field.SecondContainer = function FieldSecondContainer({
	children,
	...restProps
}) {
	return <SecondContainer {...restProps}>{children}</SecondContainer>;
};

Field.SecondDropDown = function FieldSecondDropDown({
	children,
	...restProps
}) {
	return <SecondDropdown {...restProps}>{children}</SecondDropdown>;
};

Field.ThirdContainer = function FieldThirdContainer({
	children,
	...restProps
}) {
	return <ThirdContainer {...restProps}>{children}</ThirdContainer>;
};

Field.ThirdDropDown = function FieldThirdDropDown({ children, ...restProps }) {
	return <ThirdDropdown {...restProps}>{children}</ThirdDropdown>;
};

export default Field;
