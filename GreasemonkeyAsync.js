// GreasemonkeyAsync.js by memset0

class GreasemonkeyAsync {
	read() {
		return GM.getValue(this.source, '')
			.then(data => {
				if (data === '') {
					return GM.setValue(this.source, this.serialize(this.defaultValue))
						.then(() => this.defaultValue)
				} else {
					return this.deserialize(data)
				}
			})
	}

	write(data) {
		return GM.setValue(this.source, this.serialize(data))
	}

	constructor(
		source, {
			defaultValue = {},
			serialize = JSON.stringify,
			deserialize = JSON.parse
		} = {}
	) {
		this.source = source
		this.defaultValue = defaultValue
		this.serialize = serialize
		this.deserialize = deserialize
	}
}
