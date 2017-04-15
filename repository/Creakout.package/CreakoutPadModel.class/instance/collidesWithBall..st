testing
collidesWithBall: aBall
	| bounceVector |
	self doPads: [  :aPad |
		bounceVector := aPad collisionVectorWith: aBall.
		bounceVector ifNotNil: [ ^ bounceVector ] ].
	^nil