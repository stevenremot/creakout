instance creation
radius: aRadius origin: aPoint angle: anAngle life: aLife onDead: aBlock
	^ self new
		radius: aRadius;
		thickness: self defaultThickness;
		origin: aPoint;
		angle: anAngle;
		color: self randomColor;
		bounceFactor: self defaultBounceFactor;
		life: aLife;
		onDead: aBlock;
		initWidth.