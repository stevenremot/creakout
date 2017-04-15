accessing
rotation: aNumber
	1 to: self numberOfPads do: [ :padNumber |
		(pads at: padNumber) angle: aNumber + ((padNumber - 1) * self padGap) ]