as yet unclassified
start
	| tmp1 tmp2 tmp3 |
	tmp2 := CreakoutModel new.
	tmp3 := CreakoutMorph new model: tmp2.
	tmp1 := StandardWindow new.
	tmp1
		title: 'Creakout';
		addMorph: tmp3 fullFrame: (0 @ 0 corner: 1 @ 1) asLayoutFrame;
		openInWorld