testing
collidesWithBall: arg1
	| tmp2 |
	self
		doPads: [ :arg2 | 
			tmp2 := arg2 collisionVectorWith: arg1.
			tmp2 ifNotNil: [ ^ tmp2 ] ].
	^ nil