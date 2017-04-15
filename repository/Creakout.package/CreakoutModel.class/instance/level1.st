levels
level1
	| tmp2 |
	bricks removeAll.
	tmp2 := self.
	tmp2
		addBrickRadius: 20.0 angle: 0 life: 2;
		addBrickRadius: 20.0 angle: 90 life: 2;
		addBrickRadius: 20.0 angle: 180 life: 2;
		addBrickRadius: 20.0 angle: 270 life: 2