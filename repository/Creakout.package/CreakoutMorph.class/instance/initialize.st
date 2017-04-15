initialization
initialize
	super initialize.
	self color: self backgroundColor.
	surface := AthensCairoSurface extent: 800 @ 800.
	self startStepping