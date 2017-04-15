updating
update: arg1
	self width > self targetWidth
		ifTrue: [ self
				width: (self width - (self shrinkSpeed * arg1 / 1000.0) max: self targetWidth) ].
	self width = 0
		ifTrue: [ deadBlock value: self ]