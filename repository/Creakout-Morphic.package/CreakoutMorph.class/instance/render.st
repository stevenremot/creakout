drawing
render
	surface
		drawDuring: [ :canvas | 
			surface clear.
			canvas pathTransform loadIdentity.
			canvas
				setPaint: self backgroundColor;
				drawShape: (0 @ 0 corner: self extent).
			canvas pathTransform scaleBy: self ratio.
			model
				ifVictory: [ self drawVictoryScreenOn: canvas.
					^ self ];
				ifDefeat: [ self drawDefeatScreenOn: canvas.
					^ self ].
			self
				drawPadsOn: canvas;
				drawBallOn: canvas;
				drawBricksOn: canvas ]