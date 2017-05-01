tests
testPhaseChangeListener
	| newPhase model |
	newPhase := nil.
	
	model := CreakoutModel new.
	model onPhaseChangeDo: [ :phase | newPhase := phase ].
	model shoot.
	
	self assert: newPhase equals: #ballMoving.