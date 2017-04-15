private - collision
orbitCollidesWith: aBall vector: aBallVector
	"Check is the ball is in the pad orbit, and in a direction the allows collision"
	| ballRadius isNavigatingInside offset |
	ballRadius := aBallVector r.
	isNavigatingInside := (aBallVector dotProduct: aBall direction) < 0.
	
	(((ballRadius < radius) and: isNavigatingInside)
		or: [ (ballRadius > radius) and: isNavigatingInside not ])
		ifTrue: [ ^ false ].
		
	offset := aBall radius + (self thickness / 2.0).
	
	^((ballRadius - radius)
		between: offset negated
		and: offset).
	