drawing
drawBrick: aBrick on: aCanvas
	| width leftAngle rightAngle left right minRad maxRad |
	width := aBrick width degreesToRadians.
	
	
	leftAngle := aBrick leftAngle degreesToRadians.
	rightAngle := aBrick rightAngle degreesToRadians.
	
	left := leftAngle cos @ leftAngle sin.
	right := (rightAngle cos)@(rightAngle sin).
	
	minRad := aBrick radius - (aBrick thickness / 2.0).
	maxRad := minRad + aBrick thickness.
	
	aCanvas setPaint: aBrick color.
	aCanvas pathTransform restoreAfter: [ 
		aCanvas pathTransform translateBy: self boardCenter.
		aCanvas drawShape: (aCanvas createPath: [ :builder |
			builder
				absolute;
				moveTo: left * minRad;
				cwArcTo: left * maxRad angle: CreakoutMath pi;
				cwArcTo: right * maxRad angle: width;
				cwArcTo: right * minRad angle: CreakoutMath pi;
				ccwArcTo: left * minRad angle: width.
			])]