class UnauthenticatedException extends Error {
    constructor(message) {
        super(message)
        this.name = "Unauthenticated"
        this.statusCode = 401
    }
}

export default UnauthenticatedException