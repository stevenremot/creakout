game phases
handleBrickDead: aBrick
	bricks remove: aBrick;
		ifEmpty: [ self startNewLevel ]