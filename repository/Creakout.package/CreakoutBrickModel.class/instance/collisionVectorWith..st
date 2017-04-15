collision
collisionVectorWith: arg1
	| tmp1 tmp2 tmp3 tmp4 tmp5 tmp6 |
	tmp1 := arg1 position - origin.
	(self orbitCollidesWith: arg1 vector: tmp1)
		ifFalse: [ ^ nil ].
	tmp2 := self leftVector.
	tmp3 := self rightVector.
	tmp4 := arg1 radius + (thickness / 2.0).
	(self innerPartCollidesWith: arg1 vector: tmp1)
		ifTrue: [ ^ self computeInnerBounceAngleWith: arg1 vector: tmp1 ].
	tmp5 := tmp2 * radius.
	tmp6 := tmp3 * radius.
	(tmp5 - tmp1) r <= tmp4
		ifTrue: [ ^ self computeOuterBounceAngleBetween: tmp5 and: arg1 vector: tmp1 ].
	(tmp6 - tmp1) r <= tmp4
		ifTrue: [ ^ self computeOuterBounceAngleBetween: tmp6 and: arg1 vector: tmp1 ].
	^ nil