accessing
rightVectorFor: aPad
	| angle |
	angle := (self rightAngleFor: aPad) degreesToRadians.
	^(angle cos)@(angle sin)