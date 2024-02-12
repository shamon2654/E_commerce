

module.exports = (theFunc) => (req, res, next) => {//A higher order function is a function that calls another function as an argument
    Promise.resolve(theFunc(req,res,next).catch(next))
}