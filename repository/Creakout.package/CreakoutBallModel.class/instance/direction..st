accessing
direction: aVector
	| radius |
	radius := aVector r.
	
	radius = 0
		ifTrue: [ direction := aVector ]
		ifFalse: [ direction := aVector / radius ]