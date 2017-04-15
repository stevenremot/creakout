private - collision
innerPartCollidesWith: aBall vector: aBallVector
	"Assume the ball is in the pad orbit, and check whether the ball collides with the ""inner"" part
	of the pad (inner part = pad without the circles)"
	^ (self leftVector normal dotProduct: aBallVector) > 0
		and: [ (self rightVector normal dotProduct: aBallVector) < 0 ]