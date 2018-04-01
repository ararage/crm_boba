
function verifyTokenAdmin(req,res,next){
    if(req.user.role === 'ROLE_ADMIN'){
        next()
    }else{
        res.status(401).send({message:"You don't have enough permissions"})
    }
}

module.exports = {
    verifyTokenAdmin
}