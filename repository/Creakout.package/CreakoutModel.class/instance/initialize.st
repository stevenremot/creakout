initialization
initialize
	pad := CreakoutPadModel center: self boardCenter.
	ball := CreakoutBallModel new.
	bricks := Set new.
	lives := 3.
	currentLevel := 0.
	self startNewLevel