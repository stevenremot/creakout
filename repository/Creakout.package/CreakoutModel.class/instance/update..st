updating
update: milliseconds
	self ifEnd: [ ^ self ].
	pad update: milliseconds.
	phase = #aiming
		ifTrue: [ ball position: (pad aimingPositionFor: ball) ]
		ifFalse: [ ball update: milliseconds.
			self
				handleBallOutAnd: [ self handleBallCollidesWithPadAnd: [ self handleBallCollideWithBricks ] ] ].
	self doBricks: [ :brick | brick update: milliseconds ]
	