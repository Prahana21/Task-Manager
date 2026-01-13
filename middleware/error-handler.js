const errorHandlerMiddleware = (err, req, res, next) => {
    console.log(error)
    return res.status(500).json({msg : 'Something went wrong try again later'})
}
module.exports = errorHandlerMiddleware
