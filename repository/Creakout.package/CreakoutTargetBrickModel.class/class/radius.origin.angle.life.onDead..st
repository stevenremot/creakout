instance creation
radius: arg1 origin: arg2 angle: arg3 life: arg4 onDead: arg5
	| tmp2 |
	tmp2 := self new.
	tmp2
		radius: arg1;
		thickness: self defaultThickness;
		origin: arg2;
		angle: arg3;
		color: self randomColor;
		bounceFactor: self defaultBounceFactor;
		life: arg4;
		onDead: arg5.
	^ tmp2 initWidth