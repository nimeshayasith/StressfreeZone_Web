const GoogleStrategy = require('passport-google-oauth20').Strategy
const passport = require('passport')
const User = require('../models/User')
//const { refreshToken } = require('firebase-admin/app')

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback'
},
 async (accessToken, refreshToken, profile, done) =>{
    const {id,displayName,emails} = profile
    try{
     let user = await User.findOne({googleId:id})
     
     if(!user){
        user = await new User({
            googleId:id,
            name: displayName,
            email: emails[0].value
         }).save()
     }

     done(null,user)
    }catch(err){
        done(err,false)
    }
 }   
))

passport.serializeUser((user,done) => {
    done(null,user.id)
})

passport.deserializeUser(async (id,done) => {
    const user = await User.findById(id)
    done(null.user)
})