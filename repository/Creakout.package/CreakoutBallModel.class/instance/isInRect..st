testing
isInRect: arg1
	| tmp1 tmp2 |
	tmp1 := self radius @ self radius.
	tmp2 := self position - tmp1 rectangle: self position + tmp1.
	^ arg1 containsRect: tmp2