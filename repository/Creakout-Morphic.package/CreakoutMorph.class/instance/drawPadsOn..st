drawing
drawPadsOn: aCanvas
	| x y |
	x := self boardSize / 2 - self padRadius.
	y := self boardSize / 2.
	
	(aCanvas 
		setStrokePaint: Color lightGray)
		width: (1 / self ratio) asFloat.
	aCanvas drawShape: (aCanvas createPath: [ :builder | 
			builder 
				moveTo: x@y;
				cwArcTo: (2 * self padRadius)@0 angle: Float pi;
				cwArcTo: (-2 * self padRadius)@0 angle: Float pi.]).
	
	model pad doPads: [ :pad | self drawBrick: pad on: aCanvas ]