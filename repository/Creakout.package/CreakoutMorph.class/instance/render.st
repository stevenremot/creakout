drawing
render
	surface
		drawDuring: [ :arg1 | 
			| tmp2 tmp4 tmp6 |
			surface clear.
			arg1 pathTransform loadIdentity.
			tmp2 := arg1.
			tmp2
				setPaint: self backgroundColor;
				drawShape: (0 @ 0 corner: self extent).
			arg1 pathTransform scaleBy: self ratio.
			tmp4 := model.
			tmp4
				ifVictory: [ self drawVictoryScreenOn: arg1.
					^ self ];
				ifDefeat: [ self drawDefeatScreenOn: arg1.
					^ self ].
			tmp6 := self.
			tmp6
				drawPadsOn: arg1;
				drawBallOn: arg1;
				drawBricksOn: arg1 ]