updating
updateRotationSpeed: milliseconds
	| targetSpeed rotationForce |
	targetSpeed := self maxRotationSpeed
		* rotationDirection.
	rotationForce := targetSpeed = 0
		ifTrue: [ 2.0 ]
		ifFalse: [ 1.0 ].
	rotationSpeed := rotationSpeed
		+
			(milliseconds * rotationForce
				* (targetSpeed - rotationSpeed) sign)
		min: (rotationSpeed max: targetSpeed)
		max: (rotationSpeed min: targetSpeed)