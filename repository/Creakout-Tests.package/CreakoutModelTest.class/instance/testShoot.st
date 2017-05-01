tests
testShoot
	self assert: (CreakoutModel new shoot phase)
		equals: #ballMoving