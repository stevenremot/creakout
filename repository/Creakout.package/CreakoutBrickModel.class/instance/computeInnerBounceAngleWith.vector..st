private - collision
computeInnerBounceAngleWith: arg1 vector: arg2
	| tmp1 tmp2 |
	tmp2 := arg2 angle - angle degreesToRadians.
	tmp1 := arg2 angle - (tmp2 * bounceFactor).
	(arg2 dotProduct: arg1 direction) > 0
		ifTrue: [ tmp1 := tmp1 + Float pi ].
	^ tmp1 cos @ tmp1 sin