private - collision
innerPartCollidesWith: arg1 vector: arg2
	^ (self leftVector normal dotProduct: arg2) > 0
		and: [ (self rightVector normal dotProduct: arg2) < 0 ]