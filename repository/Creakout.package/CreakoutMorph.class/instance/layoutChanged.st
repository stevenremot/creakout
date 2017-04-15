recategorized
layoutChanged
	super layoutChanged.
	self fitSurface
		ifTrue: [ surface := AthensCairoSurface extent: self extent ]