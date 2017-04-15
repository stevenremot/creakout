instance creation
radius: aRadius origin: aPoint angle: anAngle life: aLife
	^ self new
		radius: aRadius;
		thickness: self defaultThickness;
		origin: aPoint;
		angle: anAngle;
		color: self randomColor;
		bounceFactor: self defaultBounceFactor;
		life: aLife;
		initWidth.