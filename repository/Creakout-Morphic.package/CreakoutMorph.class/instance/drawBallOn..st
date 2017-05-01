drawing
drawBallOn: aCanvas
	| left right |
	left := model ball position - ((model ball radius)@0).
	right := model ball position + ((model ball radius)@0).
	
	aCanvas setPaint: self ballColor;
		drawShape: (aCanvas createPath: [ :builder |
			builder
				absolute;
				moveTo: left;
				cwArcTo: right angle: CreakoutMath pi;
				cwArcTo: left angle: CreakoutMath pi])