const getLocation = () => {
	try {
		return window.location.pathname
	} catch (e) {
		return ""
	}
}
export const currentLocation = getLocation


const getPath = () => {
	try {
		var path = getLocation().split("/")
		path.shift()
		return path
	} catch (e) {
		return ""
	}
}
export const currentPath = getPath


const getSlug = () => {
	try {
		return getPath().join(".")
	} catch (e) {
		return ""
	}
}
export const currentSlug = getSlug
