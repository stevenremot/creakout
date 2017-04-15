collision
collisionVectorWith: aBall
	| ballVector leftVector rightVector offset leftCenter rightCenter |
	ballVector := aBall position - origin.
	
	(self orbitCollidesWith: aBall vector: ballVector)
		ifFalse: [ ^ nil ].
		
	leftVector := self leftVector.
	rightVector := self rightVector.
	offset := aBall radius + (thickness / 2.0).
	
	(self innerPartCollidesWith: aBall vector: ballVector)
		ifTrue: [ ^ self computeInnerBounceAngleWith: aBall vector: ballVector ]
		ifFalse: [ leftCenter := leftVector * radius.
			rightCenter := rightVector * radius.
			((leftCenter - ballVector) r <= offset)
				ifTrue: [ ^ self computeOuterBounceAngleBetween: leftCenter and: aBall vector: ballVector ].
			((rightCenter - ballVector) r <= offset)
				ifTrue: [ ^ self computeOuterBounceAngleBetween: rightCenter and: aBall vector: ballVector ]].
			
	^ nil