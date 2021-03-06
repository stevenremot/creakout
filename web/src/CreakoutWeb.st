Smalltalk createPackage: 'CreakoutWeb'!
(Smalltalk packageAt: 'CreakoutWeb') imports: {'amber/jquery/Wrappers-JQuery'. 'amber/web/Web'. 'silk/Silk'}!
Object subclass: #CreakoutScreen
	instanceVariableNames: ''
	package: 'CreakoutWeb'!

!CreakoutScreen class methodsFor: 'screen handling'!

handlePhase: aPhase
	aPhase = #victory
		ifTrue: [ ^ self showSuccess ].
		
	aPhase = #defeat
		ifTrue: [ ^ self showFailure ].
	
	^ self hide
!

hide
	| visibleScreen |
	visibleScreen := (document querySelector: '.screen.visible').
	visibleScreen ifNotNil: [ visibleScreen classList remove: 'visible' ]
!

showFailure
	(document getElementById: 'failure-screen') classList add: 'visible'
!

showSuccess
	(document getElementById: 'success-screen') classList add: 'visible'
! !

Object subclass: #CreakoutWeb
	instanceVariableNames: ''
	package: 'CreakoutWeb'!
!CreakoutWeb commentStamp!
Main entry point for the creakout web code!

!CreakoutWeb class methodsFor: 'starting'!

start
	| model canvas |
	model := CreakoutModel new.
	
	canvas := CreakoutWebCanvas new
		model: model;
		width: window innerWidth
		height: window innerHeight;
		attachTo: document body.
		
	CreakoutWebKeyboardHandler new
		model: model;
		start.
		
	CreakoutWebLoop new
		block: [ canvas render ];
		frequency: 1000 / 60;
		start.
		
	CreakoutWebLoop new
		block: [ :millis | model update: millis ];
		frequency: 1000 / 120;
		start.
		
	model onPhaseChangeDo: [ :phase | CreakoutScreen handlePhase: phase ].
		
	window addEventListener: 'resize' block: [
		canvas width: window innerWidth
			   height: window innerHeight
    ].
! !

Object subclass: #CreakoutWebCanvas
	instanceVariableNames: 'canvas context model'
	package: 'CreakoutWeb'!
!CreakoutWebCanvas commentStamp!
I am in charge of rendering a CreakoutModel class on a canvas.!

!CreakoutWebCanvas methodsFor: 'accessing'!

ballColor
	^ Color h: 217 s: 0.7 v: 0.7
!

boardSize
	^ model boardSize
!

model: aModel
	model := aModel
!

padRadius
	^ model pad radius
!

ratio
	^ (canvas width min: canvas height) / self boardSize
!

width: aWidth height: aHeight
	canvas width: aWidth;
		height: aHeight.
! !

!CreakoutWebCanvas methodsFor: 'dom'!

attachTo: aNode
	aNode appendChild: canvas.
! !

!CreakoutWebCanvas methodsFor: 'initialization'!

initialize
	canvas := document createElement: 'canvas'.
	canvas style
		position: 'absolute';
		left: 0;
		right: 0;
		top: 0;
		bottom: 0.

	context := canvas getContext: '2d'.
! !

!CreakoutWebCanvas methodsFor: 'rendering'!

drawBall
	context
		save;
		fillStyle: self ballColor;
		beginPath;
		arc: model ball position x
			y: model ball position y
			radius: model ball radius
			startAngle: 0
			endAngle: 2 * Number pi;
		fill;
		restore.
!

drawBrick: aBrick
	| width leftAngle rightAngle left right minRad maxRad |
	width := aBrick width / 180 * Number pi.
	
	leftAngle := aBrick leftAngle / 180 * Number pi.
	rightAngle := aBrick rightAngle / 180 * Number pi.
	
	left := leftAngle cos @ leftAngle sin.
	right := (rightAngle cos)@(rightAngle sin).
	
	minRad := aBrick radius - (aBrick thickness / 2.0).
	maxRad := minRad + aBrick thickness.
	
	context save;
		fillStyle: aBrick color;
		
		translate: (self boardSize / 2) y: (self boardSize /2);
		beginPath;
		arc: (left x * aBrick radius)
			y: (left y * aBrick radius)
			radius: aBrick thickness / 2
			startAngle: leftAngle
			endAngle: leftAngle + Number pi
			antiCw: true;
			
		arc: 0 
			y: 0
			radius: maxRad
			startAngle: leftAngle
			endAngle: rightAngle;

		arc: (right x * aBrick radius)
			y: (right y * aBrick radius) 
			radius: aBrick thickness / 2
			startAngle: rightAngle
			endAngle: rightAngle + Number pi;
			
		arc: 0 
			y: 0
			radius: minRad
			startAngle: rightAngle
			endAngle: leftAngle
			antiCw: true;
			
		fill;
		restore.
	"aCanvas pathTransform restoreAfter: [ 
		aCanvas pathTransform translateBy: self boardCenter.
		aCanvas drawShape: (aCanvas createPath: [ :builder |
			builder
				absolute;
				moveTo: left * minRad;
				cwArcTo: left * maxRad angle: Float pi;
				cwArcTo: right * maxRad angle: width;
				cwArcTo: right * minRad angle: Float pi;
				ccwArcTo: left * minRad angle: width.
			])]"
!

drawBricks
	model doBricks: [ :brick | self drawBrick: brick ]
!

drawPads
	| x y |
	x := self boardSize / 2.
	y := self boardSize / 2.
	
	context
		save;
		strokeStyle: 'lightgray';
		lineWidth: 1 / self ratio;
		beginPath;
		arc: x
		  y: y
		  radius: self padRadius
		  startAngle: 0
		  endAngle: 2 * Number pi;
		stroke.
		
	model pad doPads: [ :pad | self drawBrick: pad ].
	
	context restore.
!

render
	context save.
	self renderBackground.
	context scale: self ratio y: self ratio.
	self drawPads;
		drawBricks;
		drawBall.
	context restore.
!

renderBackground
	context
		fillStyle: 'white';
		fillRect: 0
			y: 0
			width: context canvas width
			height: context canvas height.
! !

Object subclass: #CreakoutWebKeyboardHandler
	instanceVariableNames: 'model'
	package: 'CreakoutWeb'!

!CreakoutWebKeyboardHandler methodsFor: 'accessing'!

model: aModel
	model := aModel
! !

!CreakoutWebKeyboardHandler methodsFor: 'event handling'!

onKeyDown: anEvent
	| keyValue rotationDirection |
	keyValue := anEvent key.
	rotationDirection := 0.
	
	keyValue = 'ArrowLeft'
		ifTrue: [  rotationDirection := rotationDirection - 1 ].
	
	keyValue = 'ArrowRight'
		ifTrue: [ rotationDirection := rotationDirection + 1 ].
		
	model pad rotationDirection: (model pad rotationDirection + rotationDirection).
!

onKeyUp: anEvent
	| keyValue rotationDirection |
	keyValue := anEvent key.
	rotationDirection := 0.
	
	keyValue = 'ArrowLeft'
		ifTrue: [  rotationDirection := rotationDirection - 1 ].
	
	keyValue = 'ArrowRight'
		ifTrue: [ rotationDirection := rotationDirection + 1 ].
		
	keyValue = 'ArrowUp'
		ifTrue: [ model shoot ].
		
	model pad rotationDirection: model pad rotationDirection - rotationDirection.
	
	model ifEnd: [ model restart ]
!

start
	window 
		addEventListener: 'keydown' block: [ :evt | self onKeyDown: evt ];
		addEventListener: 'keyup' block: [ :evt | self onKeyUp: evt ].
! !

Object subclass: #CreakoutWebLoop
	instanceVariableNames: 'isRunning frequency lastMillis counter block'
	package: 'CreakoutWeb'!

!CreakoutWebLoop methodsFor: 'accessing'!

block: aBlock
	block := [ :millis |
		self runIteration: aBlock millis: millis ]
!

frequency: aNumber
	frequency := aNumber
! !

!CreakoutWebLoop methodsFor: 'initialization'!

initialize
	isRunning := false.
	frequency := 0.
! !

!CreakoutWebLoop methodsFor: 'running'!

runIteration: aBlock millis: millis
	lastMillis ifNil: [
		lastMillis := millis.
		counter := 0.
		window requestAnimationFrame: block.
		^ self
	].
	
	counter := counter + (millis - lastMillis).
	lastMillis := millis.
	
	[ counter >= frequency ] whileTrue: [
		counter := counter - frequency.
		aBlock value: frequency.
	].

	isRunning ifTrue: [
		window requestAnimationFrame: block
	].
!

start
	block ifNotNil: [
		isRunning := true.
		lastMillis := nil.
		window requestAnimationFrame: block.
	]
!

stop
	isRunning := false
! !

