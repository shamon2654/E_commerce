

module.exports = (theFunc) => (req, res, next) => {//higherOrderFunctoin is use as a function passed an argument is  a function
    Promise.resolve(theFunc(req,res,next).catch(next))
}