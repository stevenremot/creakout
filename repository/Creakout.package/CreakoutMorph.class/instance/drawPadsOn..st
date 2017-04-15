drawing
drawPadsOn: arg1
	| tmp1 tmp2 |
	tmp1 := self boardSize / 2 - self padRadius.
	tmp2 := self boardSize / 2.
	(arg1 setStrokePaint: Color lightGray)
		width: (1 / self ratio) asFloat.
	arg1
		drawShape:
			(arg1
				createPath: [ :arg2 | 
					| tmp4 |
					tmp4 := arg2.
					tmp4
						moveTo: tmp1 @ tmp2;
						cwArcTo: (2 * self padRadius) @ 0 angle: Float pi;
						cwArcTo: (-2 * self padRadius) @ 0 angle: Float pi ]).
	model pad doPads: [ :arg3 | self drawBrick: arg3 on: arg1 ]