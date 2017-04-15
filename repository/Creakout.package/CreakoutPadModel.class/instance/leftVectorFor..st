accessing
leftVectorFor: arg1
	| tmp1 |
	tmp1 := (self leftAngleFor: arg1) degreesToRadians.
	^ tmp1 cos @ tmp1 sin