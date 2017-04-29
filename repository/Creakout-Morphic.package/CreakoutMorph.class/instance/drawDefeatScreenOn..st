drawing
drawDefeatScreenOn: aCanvas
	aCanvas setPaint: Color black;
		setFont: StandardFonts defaultFont.
	aCanvas pathTransform translateBy: 25@50.
	aCanvas drawString: 'You lost...'.