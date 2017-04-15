accessing
aimingPositionFor: arg1
	^ self center
		+
			(Point
				r: self radius - (self thickness / 2.0) - arg1 radius
				degrees: (self centerAngleFor: 1))