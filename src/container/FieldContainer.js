import { useState } from 'react';
import { eventList } from '../components/data/data';

import { Field } from '../components/index';

const FieldContainer = () => {
	const [fid, setFId] = useState(0);
	const [sid, setSId] = useState(0);
	const [first, setFirst] = useState([]);
	const [second, setSecond] = useState([]);
	const handleFirst = (e) => {
		if (e.superType) {
			setFirst(e.superType.type);
			setFId(e.id);
		} else {
			setFirst(e.events);
			setFId(e.id);
		}
	};

	const handleFirstLeave = () => {
		setFirst([]);
	};

	const handleSecond = (e) => {
		setSId(e.id);
		setSecond(e.events);
	};

	const handleSecondLeave = () => {
		setSecond([]);
	};

	const handleSecondEvent = (e) => {
		setSecond(e.outcomes);
		setSId(e.id);
	};

	return (
		<Field>
			<Field.Inner>
				<Field.FirstContainer onMouseLeave={() => handleFirstLeave()}>
					{eventList.map((e) => {
						if (e.superType) {
							return (
								<Field.FirstDropDown onMouseEnter={() => handleFirst(e)}>
									{e.superType.title}

									{fid === e.id && first.length > 0 && (
										<Field.SecondContainer
											onMouseLeave={() => handleSecondLeave()}>
											{first.map((el) => {
												return (
													<Field.SecondDropDown
														onMouseEnter={() => handleSecond(el)}>
														{el.type}

														{sid === el.id && second.length > 0 && (
															<Field.ThirdContainer>
																{second.map((ell) => {
																	return (
																		<Field.ThirdDropDown>
																			{ell}
																		</Field.ThirdDropDown>
																	);
																})}
															</Field.ThirdContainer>
														)}
													</Field.SecondDropDown>
												);
											})}
										</Field.SecondContainer>
									)}
								</Field.FirstDropDown>
							);
						} else {
							return (
								<Field.FirstDropDown onMouseEnter={() => handleFirst(e)}>
									{e.type}
									{fid === e.id && first.length > 0 && (
										<Field.SecondContainer>
											{first.map((el) => {
												return (
													<Field.SecondDropDown
														onMouseEnter={() => handleSecondEvent(e)}>
														{el}

														{sid === e.id && second.length > 0 && (
															<Field.ThirdContainer>
																{second.map((e) => {
																	return (
																		<Field.ThirdDropDown>
																			{e}
																		</Field.ThirdDropDown>
																	);
																})}
															</Field.ThirdContainer>
														)}
													</Field.SecondDropDown>
												);
											})}
										</Field.SecondContainer>
									)}
								</Field.FirstDropDown>
							);
						}
					})}
				</Field.FirstContainer>
			</Field.Inner>
		</Field>
	);
};

export default FieldContainer;
