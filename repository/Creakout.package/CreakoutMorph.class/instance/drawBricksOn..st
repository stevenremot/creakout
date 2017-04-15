drawing
drawBricksOn: aCanvas
	model doBricks: [ :brick | self drawBrick: brick on: aCanvas ].