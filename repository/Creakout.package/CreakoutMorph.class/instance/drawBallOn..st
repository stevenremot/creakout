drawing
drawBallOn: arg1
	| tmp1 tmp2 tmp4 |
	tmp1 := model ball position - (model ball radius @ 0).
	tmp2 := model ball position + (model ball radius @ 0).
	tmp4 := arg1.
	tmp4
		setPaint: self ballColor;
		drawShape:
			(arg1
				createPath: [ :arg2 | 
					| tmp6 |
					tmp6 := arg2.
					tmp6
						absolute;
						moveTo: tmp1;
						cwArcTo: tmp2 angle: Float pi;
						cwArcTo: tmp1 angle: Float pi ])