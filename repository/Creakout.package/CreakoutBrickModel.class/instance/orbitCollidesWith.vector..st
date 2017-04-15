private - collision
orbitCollidesWith: arg1 vector: arg2
	| tmp1 tmp2 tmp3 |
	tmp1 := arg2 r.
	tmp2 := (arg2 dotProduct: arg1 direction) < 0.
	((tmp1 < radius and: tmp2) or: [ tmp1 > radius and: tmp2 not ])
		ifTrue: [ ^ false ].
	tmp3 := arg1 radius + (self thickness / 2.0).
	^ tmp1 - radius between: tmp3 negated and: tmp3