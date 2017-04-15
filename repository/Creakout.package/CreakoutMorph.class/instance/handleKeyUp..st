event handling
handleKeyUp: arg1
	| tmp1 tmp2 |
	tmp1 := arg1 keyValue.
	tmp2 := 0.
	tmp1 = 28
		ifTrue: [ tmp2 := tmp2 - 1 ].
	tmp1 = 29
		ifTrue: [ tmp2 := tmp2 + 1 ].
	tmp1 = 30
		ifTrue: [ model shoot ].
	model pad rotationDirection: model pad rotationDirection - tmp2.
	model ifEnd: [ model restart ]