instance creation
center: arg1
	| tmp2 |
	tmp2 := self basicNew.
	tmp2 center: arg1.
	^ tmp2 initialize