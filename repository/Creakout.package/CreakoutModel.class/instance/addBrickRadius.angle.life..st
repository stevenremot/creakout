level creation
addBrickRadius: arg1 angle: arg2 life: arg3
	bricks
		add:
			(CreakoutTargetBrickModel
				radius: arg1
				origin: self boardCenter
				angle: arg2
				life: arg3
				onDead: [ :arg4 | self handleBrickDead: arg4 ])