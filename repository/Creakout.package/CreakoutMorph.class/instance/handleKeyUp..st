event handling
handleKeyUp: anEvent
	| keyValue rotationDirection |
	keyValue := anEvent keyValue.
	rotationDirection := 0.
	
	keyValue = 28
		ifTrue: [  rotationDirection := rotationDirection - 1 ].
	
	keyValue = 29
		ifTrue: [ rotationDirection := rotationDirection + 1 ].
		
	keyValue = 30
		ifTrue: [ model shoot ].
		
	model pad rotationDirection: model pad rotationDirection - rotationDirection.
	
	model ifEnd: [ model restart ]
		
	