accessing
direction: arg1
	| tmp1 |
	tmp1 := arg1 r.
	tmp1 = 0
		ifTrue: [ direction := arg1 ]
		ifFalse: [ direction := arg1 / tmp1 ]