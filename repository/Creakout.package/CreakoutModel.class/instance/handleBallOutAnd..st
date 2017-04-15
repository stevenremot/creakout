updating
handleBallOutAnd: aBlock
	(ball isInRect: ((0@0) extent: (self boardSize)@(self boardSize)))
				ifTrue: aBlock
				ifFalse: [ 
					lives := lives - 1.
					(lives = 0)
						ifTrue: [ self lose ]
						ifFalse: [ self startAiming ]].