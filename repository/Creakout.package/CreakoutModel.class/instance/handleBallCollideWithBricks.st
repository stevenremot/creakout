updating
handleBallCollideWithBricks
	| tmp2 |
	self
		doBricks: [ :arg1 | 
			tmp2 := arg1 collisionVectorWith: ball.
			tmp2
				ifNotNil: [ ball
						direction: ball direction - (2 * tmp2 * (ball direction dotProduct: tmp2)).
					arg1 hit.
					^ self ] ]