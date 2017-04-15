levels
level2
	| tmp2 |
	bricks removeAll.
	tmp2 := self.
	tmp2
		addBrickRadius: 25.0 angle: 0 life: 4;
		addBrickRadius: 25.0 angle: 120 life: 4;
		addBrickRadius: 25.0 angle: 240 life: 4;
		addBrickRadius: 10.0 angle: 0 life: 6;
		addBrickRadius: 10.0 angle: 180 life: 6