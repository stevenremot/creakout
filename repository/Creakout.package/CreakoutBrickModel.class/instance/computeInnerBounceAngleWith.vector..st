private - collision
computeInnerBounceAngleWith: aBall vector: aBallVector
	"Assume there is a collision with the ball in the inner part, and compute the new direction of the ball
	after bounce"

	| bounceAngle bounceOffset |
	bounceOffset := (aBallVector angle - angle degreesToRadians).
		
	bounceAngle := aBallVector angle - (bounceOffset * bounceFactor).
	(aBallVector dotProduct: aBall direction) > 0
		ifTrue: [ bounceAngle := bounceAngle + CreakoutMath pi ].
	^ bounceAngle cos @ bounceAngle sin