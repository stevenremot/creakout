drawing
drawVictoryScreenOn: aCanvas
	aCanvas setPaint: Color black;
		setFont: StandardFonts defaultFont.
	aCanvas pathTransform translateBy: 27@50.
	aCanvas drawString: 'You win!'.