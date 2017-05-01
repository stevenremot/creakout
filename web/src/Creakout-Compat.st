Smalltalk createPackage: 'Creakout-Compat'!
Object subclass: #Color
	instanceVariableNames: ''
	package: 'Creakout-Compat'!
!Color commentStamp!
A simple polyfill of the Color object to be compatible with the Pharo implementation of Creakout!

!Color class methodsFor: 'instance creation'!

h: h s: s l: l
	^ 'hsl('
		, h asString
		, ','
		, (s * 100) asString
		, '%,'
		, (l * 100) asString
		, '%)'
!

h: h s: s v: v
	| doubleL newSat |
	doubleL := (2 - s) * v.
	newSat := (doubleL < 1)
		ifTrue: [ s * v / doubleL ]
		ifFalse: [ s * v / (2 - doubleL) ].
		
	^ self
	 h: h
	 s: newSat
	 l: doubleL / 2
!

r: r g: g b: b
	^ 'rgb('
	    , (r * 255) asString
		, ','
		, (g * 255) asString
		, ','
		, (b * 255) asString
		, ')'
! !

Object subclass: #CreakoutMath
	instanceVariableNames: ''
	package: 'Creakout-Compat'!
!CreakoutMath commentStamp!
I am a compatibility layer between Pharo and Amber for Math!

!CreakoutMath class methodsFor: 'constants'!

pi
	^ Number pi
! !

Object subclass: #Rectangle
	instanceVariableNames: 'origin corner'
	package: 'Creakout-Compat'!

!Rectangle methodsFor: 'accessing'!

corner
	^corner
!

corner: aPoint
	corner := aPoint
!

origin
	^origin
!

origin: aPoint
	origin := aPoint
! !

!Rectangle methodsFor: 'testing'!

containsRect: aRect
	"Answer whether aRect is within the receiver (OK to coincide)."

	^ aRect origin >= origin and: [aRect corner <= corner]
! !

!Rectangle class methodsFor: 'instance creation'!

point: origin point: corner
	^ Rectangle new origin: origin; corner: corner
! !

!Number methodsFor: '*Creakout-Compat'!

between: min and: max
	^ (self >= min) and: [ self <= max ]
!

degreesToRadians
	^ self / 180 * Number pi
!

min: min max: max
	^ (self min: min) max: max
! !

!Point methodsFor: '*Creakout-Compat'!

angle
	^ window Math atan2: y x: x
!

dotProduct: aPoint
	^ (x * aPoint x) + (y * aPoint y)
!

extent: extent
	^ Rectangle
		point: self
		point: self + extent.
!

normal
	"Answer a Point representing the unit vector rotated 90 deg clockwise. For the zero point return -1@0."

	| n d |
	n := y negated @ x.
	(d := (n x * n x + (n y * n y))) = 0
		 ifTrue: [ ^ -1 @0 ].
	^ n / d sqrt
!

normalized
	| r |
	r := self r.
	
	r = 0
		ifTrue: [ ^ Point x: 0 y: 0 ]
		ifFalse: [ ^ Point x: x / r y: y / r ]
!

r
	^ ((x * x) + (y * y)) sqrt
!

rectangle: aPoint
	^ Rectangle
		point: self
		point: aPoint.
! !

