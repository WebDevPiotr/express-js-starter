class BadRequestException extends Error {
    constructor(message) {
        super(message)
        this.name = "Bad request"
        this.statusCode = 400
    }
}

export default BadRequestException