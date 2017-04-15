instance creation
radius: arg1 thickness: arg2 origin: arg3 angle: arg4 width: arg5 color: arg6 bounceFactor: arg7
	| tmp2 |
	tmp2 := self new.
	tmp2
		radius: arg1;
		thickness: arg2;
		origin: arg3;
		angle: arg4;
		width: arg5;
		color: arg6.
	^ tmp2 bounceFactor: arg7