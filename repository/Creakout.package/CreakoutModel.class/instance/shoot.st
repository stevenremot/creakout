game phases
shoot
	phase = #aiming
		ifFalse: [ ^ self ].
	phase := #ballMoving.
	ball direction: pad aimingDirection