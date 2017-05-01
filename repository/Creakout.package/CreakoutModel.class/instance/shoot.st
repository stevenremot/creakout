game phases
shoot
	phase = #aiming
		ifFalse: [ ^ self ].
		
	self phase: #ballMoving.
	ball direction: pad aimingDirection