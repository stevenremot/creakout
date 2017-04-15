initialization
initPads
	pads := Array new: self numberOfPads.
	1 to: self numberOfPads do: [ :padNumber | 
		pads
			at: padNumber
			put:
				(CreakoutBrickModel new
					angle: 0;
					bounceFactor: 4.0;
					color: self padColor;
					width: self padWidth;
					thickness: self thickness;
					origin: self center;
					radius: self radius) ]