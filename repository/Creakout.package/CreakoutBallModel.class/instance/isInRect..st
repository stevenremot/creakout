testing
isInRect: aRect
	| halfInnerRect innerRect |
	halfInnerRect := (self radius)@(self radius).
	innerRect := (self position - halfInnerRect) rectangle: (self position + halfInnerRect).
	^aRect containsRect: innerRect.