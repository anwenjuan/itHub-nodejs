exports.showSignin = (req,res) =>{
    res.render("signin.html")
}
exports.handleSignin = (req,res) =>{
    res.end(handleSignin)
}
exports.showSignup = (req,res) =>{
    res.render('signup.html')
}
exports.handleSignup = (req,res) =>{
    res.end(handleSignup)
}
exports.handleSignout = (req,res) =>{
    res.end(handleSignout)
}