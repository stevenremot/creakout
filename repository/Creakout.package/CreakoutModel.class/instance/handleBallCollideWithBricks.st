updating
handleBallCollideWithBricks
	| bounceVector |
	self
		doBricks: [ :brick | 
			bounceVector := brick collisionVectorWith: ball.
			bounceVector
				ifNotNil: [ 
					ball direction: (ball direction - (2 * bounceVector * (ball direction dotProduct: bounceVector))).
					brick hit.
					^ self ] ]