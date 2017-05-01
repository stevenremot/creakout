updating
handleBallCollideWithBricks
	| bounceVector |
	self
		doBricks: [ :brick | 
			bounceVector := brick collisionVectorWith: ball.
			bounceVector
				ifNotNil: [ ball
						direction: ball direction - (bounceVector * 2 * (ball direction dotProduct: bounceVector)).
					brick hit.
					^ self ] ]