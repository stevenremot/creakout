updating
update: milliseconds
	self rotate: (milliseconds / 1000.0 * rotationDirection * self maxRotationSpeed)