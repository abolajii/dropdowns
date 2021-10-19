export const eventList = [
	{
		id: 1,
		superType: {
			title: 'GK actions',
			type: [
				{
					id: 1,
					type: 'Catches',
					events: ['Simple', 'Complex'],
					outcomes: [],
				},
				{
					id: 2,
					type: 'Saves',
					events: ['OneVone', 'InsideBox', 'OutsideBox'],
					outcomes: [],
				},
			],
		},
		type: 'Goal Keepers',
		events: '',
		outcomes: [],
	},
	{
		id: 2,
		superType: {
			title: 'Def actions',
			type: [
				{
					id: 1,
					type: 'Tackle',
					events: ['Successful', 'Unsuccessful'],
					outcomes: [],
				},
				{
					id: 2,
					type: 'Block',
					events: [],
					outcomes: [],
				},
				{
					id: 3,
					type: 'Duel',
					events: ['Won Aerial', 'Won Ground'],
					outcomes: [],
				},
				{
					id: 4,
					type: 'Clearance',
					events: ['Goal Line', 'Under Pressure'],
					outcomes: [],
				},
				{
					id: 5,
					type: 'Foul',
					events: ['Opp Half', 'Own Half'],
					outcomes: ['Successful', 'Unsuccessful'],
				},
			],
		},
		type: '',
		events: [],
		outcomes: [],
	},
	{
		id: 3,
		type: 'Pass',
		events: ['Long', 'Line break', 'Short'],
		outcomes: ['Successful', 'Unsuccessful'],
	},
	{
		id: 4,
		type: 'Set Piece',
		events: ['Freekick', 'Corner', 'Penalty'],
		outcomes: [],
	},

	{
		id: 5,
		type: 'Possession',
		events: ['Dribble', 'Ball progression'],
		outcomes: ['Successful', 'Unsuccessful'],
	},
	{
		id: 6,
		type: 'Final Ball',
		events: ['Assists', 'Chances created'],
		outcomes: [],
	},
	{
		id: 7,
		type: 'Goal',
		events: ['Header', '1v1', 'Outside box', 'Inside box'],
		outcomes: [],
	},
	{
		id: 8,
		type: 'Card',
		events: ['Dissent', 'Foul'],
		outcomes: ['Red', 'Yellow'],
	},
];
