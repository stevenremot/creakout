updating
update: arg1
	self ifEnd: [ ^ self ].
	pad update: arg1.
	phase = #aiming
		ifTrue: [ ball position: (pad aimingPositionFor: ball) ]
		ifFalse: [ ball update: arg1.
			self
				handleBallOutAnd: [ self
						handleBallCollidesWithPadAnd: [ self handleBallCollideWithBricks ] ] ].
	self doBricks: [ :arg2 | arg2 update: arg1 ]