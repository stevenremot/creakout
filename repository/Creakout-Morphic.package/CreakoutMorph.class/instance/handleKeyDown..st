event handling
handleKeyDown: anEvent
	| keyValue rotationDirection |
	keyValue := anEvent keyValue.
	rotationDirection := 0.
	
	(self leftKeys includes: keyValue)
		ifTrue: [  rotationDirection := rotationDirection - 1 ].
	
	(self rightKeys includes: keyValue)
		ifTrue: [ rotationDirection := rotationDirection + 1 ].
		
	model pad rotationDirection: (model pad rotationDirection + rotationDirection).
		
	