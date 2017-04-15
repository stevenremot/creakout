drawing
drawVictoryScreenOn: arg1
	| tmp2 |
	tmp2 := arg1.
	tmp2
		setPaint: Color black;
		setFont: StandardFonts defaultFont.
	arg1 pathTransform translateBy: 27 @ 50.
	arg1 drawString: 'You win!'