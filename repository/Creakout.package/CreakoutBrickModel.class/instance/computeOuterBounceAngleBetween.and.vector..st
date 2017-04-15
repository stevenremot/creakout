private - collision
computeOuterBounceAngleBetween: aCenter and: aBall vector: aBallVector
	"Assume there is a collision with the ball in the outer part, and compute the new direction of the ball
	after bounce"
	^ (aBallVector - aCenter) normalized