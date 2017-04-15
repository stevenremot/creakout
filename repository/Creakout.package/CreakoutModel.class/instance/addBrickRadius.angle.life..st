level creation
addBrickRadius: aRadius angle: anAngle life: aLife
	bricks
		add:
			(CreakoutTargetBrickModel
				radius: aRadius
				origin: self boardCenter
				angle: anAngle
				life: aLife
				onDead: [ :brick | self handleBrickDead: brick ])