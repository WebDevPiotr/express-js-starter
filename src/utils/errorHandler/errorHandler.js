export default function (error, req, res, next) {
    const responseBody = {
        name: error.name || '',
        status: error.statusCode || 500,
        message: error.message || 'Internal server error',
    }

    res.status(responseBody.status).json(responseBody)
}