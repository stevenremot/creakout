accessing
aimingPositionFor: aBall
	^self center 
		+
		(Point 
			r: (self radius - (self thickness / 2.0) - aBall radius)
			degrees: (self centerAngleFor: 1))