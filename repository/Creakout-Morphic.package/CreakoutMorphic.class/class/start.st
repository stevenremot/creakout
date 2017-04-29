as yet unclassified
start
	| window model morph |
	model := CreakoutModel new.
	morph := CreakoutMorph new model: model.
	
	window := StandardWindow new.
	window
		title: 'Creakout';
		addMorph: morph fullFrame: ((0@0 corner: 1@1) asLayoutFrame);
		openInWorld.