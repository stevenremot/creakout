updating
handleBallCollidesWithPadAnd: arg1
	| tmp1 |
	tmp1 := pad collidesWithBall: ball.
	tmp1
		ifNotNil: [ ball direction: tmp1.
			^ self ].
	arg1 value