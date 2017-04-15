accessing
leftVectorFor: aPad
	| angle |
	angle := (self leftAngleFor: aPad) degreesToRadians.
	^(angle cos)@(angle sin)