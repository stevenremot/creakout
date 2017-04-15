initialization
initPads
	| tmp1 |
	pads := Array new: self numberOfPads.
	tmp1 := self numberOfPads.
	1 to: tmp1 do: [ :tmp2 | 
		| tmp4 |
		tmp4 := CreakoutBrickModel new.
		tmp4
			angle: 0;
			bounceFactor: 4.0;
			color: self padColor;
			width: self padWidth;
			thickness: self thickness;
			origin: self center.
		pads at: tmp2 put: (tmp4 radius: self radius) ]