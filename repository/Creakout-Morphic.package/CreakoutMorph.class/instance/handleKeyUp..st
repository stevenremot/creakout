event handling
handleKeyUp: anEvent
	| keyValue rotationDirection |
	keyValue := anEvent keyValue.
	rotationDirection := 0.
	
	(self leftKeys includes: keyValue)
		ifTrue: [  rotationDirection := rotationDirection - 1 ].
	
	(self rightKeys includes: keyValue)
		ifTrue: [ rotationDirection := rotationDirection + 1 ].
		
	(self shootKeys includes: keyValue)
		ifTrue: [ model shoot ].
		
	model pad rotationDirection: model pad rotationDirection - rotationDirection.
	
	model ifEnd: [ model restart ]
		
	