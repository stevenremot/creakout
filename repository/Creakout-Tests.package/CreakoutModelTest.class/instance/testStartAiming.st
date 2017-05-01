tests
testStartAiming
	self assert: (CreakoutModel new shoot startAiming phase)
		equals: #aiming