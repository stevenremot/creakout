accessing
rightVectorFor: arg1
	| tmp1 |
	tmp1 := (self rightAngleFor: arg1) degreesToRadians.
	^ tmp1 cos @ tmp1 sin