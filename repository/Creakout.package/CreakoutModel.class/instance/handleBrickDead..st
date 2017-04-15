game phases
handleBrickDead: arg1
	| tmp2 |
	tmp2 := bricks.
	tmp2
		remove: arg1;
		ifEmpty: [ self startNewLevel ]