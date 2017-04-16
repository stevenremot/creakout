updating
update: milliseconds
	self
		updateRotationSpeed: milliseconds;
		rotate:
			milliseconds / 1000.0 * rotationSpeed