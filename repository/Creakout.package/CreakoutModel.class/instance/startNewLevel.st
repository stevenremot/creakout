game phases
startNewLevel
	currentLevel := currentLevel + 1.
	currentLevel > self levels size
		ifTrue: [ phase := #victory.
			^ self ].
	self perform: (self levels at: currentLevel).
	self startAiming