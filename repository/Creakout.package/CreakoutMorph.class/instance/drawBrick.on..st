drawing
drawBrick: arg1 on: arg2
	| tmp1 tmp2 tmp3 tmp4 tmp5 tmp6 tmp7 |
	tmp1 := arg1 width degreesToRadians.
	tmp2 := arg1 leftAngle degreesToRadians.
	tmp3 := arg1 rightAngle degreesToRadians.
	tmp4 := tmp2 cos @ tmp2 sin.
	tmp5 := tmp3 cos @ tmp3 sin.
	tmp6 := arg1 radius - (arg1 thickness / 2.0).
	tmp7 := tmp6 + arg1 thickness.
	arg2 setPaint: arg1 color.
	arg2 pathTransform
		restoreAfter: [ arg2 pathTransform translateBy: self boardCenter.
			arg2
				drawShape:
					(arg2
						createPath: [ :arg3 | 
							| tmp9 |
							tmp9 := arg3.
							tmp9
								absolute;
								moveTo: tmp4 * tmp6;
								cwArcTo: tmp4 * tmp7 angle: Float pi;
								cwArcTo: tmp5 * tmp7 angle: tmp1;
								cwArcTo: tmp5 * tmp6 angle: Float pi;
								ccwArcTo: tmp4 * tmp6 angle: tmp1 ]) ]