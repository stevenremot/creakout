updating
handleBallCollidesWithPadAnd: aBlock
	| bounceVector |
	bounceVector := pad collidesWithBall: ball.
	bounceVector
		ifNotNil: [ ball direction: bounceVector.
			^ self ].
	aBlock value