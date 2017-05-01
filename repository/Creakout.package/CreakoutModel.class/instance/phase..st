private-accessing
phase: aPhase
	phase := aPhase.
	phaseChangeBlock
		ifNotNil: [ phaseChangeBlock value: aPhase ]