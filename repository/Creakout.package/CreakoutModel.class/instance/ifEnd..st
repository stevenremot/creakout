accessing
ifEnd: arg1
	| tmp2 |
	tmp2 := self.
	tmp2
		ifDefeat: arg1;
		ifVictory: arg1