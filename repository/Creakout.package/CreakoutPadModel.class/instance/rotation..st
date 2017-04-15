accessing
rotation: arg1
	| tmp1 |
	tmp1 := self numberOfPads.
	1 to: tmp1 do: [ :tmp2 | (pads at: tmp2) angle: arg1 + ((tmp2 - 1) * self padGap) ]