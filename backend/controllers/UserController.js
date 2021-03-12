const notiResData = require('../class/notiResData');
const { userPassword } = require('./../class/userClass');
const User = require('./../class/userClass');
const userModle = require('./../models/UserModel')

class UserController {
    login =(req, res)=> {
        res.json('user here');
    }
    register =async (req,res) => {
        try {
            let userPost = User;
            userPost.userName = res.locals.userHash.userName;
            userPost.userPassword = res.locals.userHash.userPassword;
            userPost.userEmail = req.body.data.userEmail;
            let checkUserPost = new Promise(function(myResolve, myReject) {
                if (!userPost.userName || !userPost.userPassword){
                    myReject()
                }
                else{
                    myResolve();
                }
            });
            checkUserPost.then(
                async (value,data) =>{ 
                    /* code if successful */
                    let findUserName= await userModle.find( {userName: userPost.userName});
                    let findEmaile= await userModle.find({userEmail: userPost.userEmail});
                    if(findUserName.length>0){
                        notiResData.customResNoti(req,res,401,{
                            Error:'Username already exists '
                        });
                    }
                    else if(findEmaile.length>0){
                        notiResData.customResNoti(req,res,401,{
                            Error:'Email already exists '
                        });
                    }
                    else{
                        await userModle.create(userPost);
                        notiResData.customResNoti(req,res,200);
                    }
                },
                async (error,value,data)=>{
                    /* code if some error */ 
                    notiResData.customResNoti(req,res,400,{
                        Error:'username or password is not valid '
                    });
                }
            );
        } 
        catch (error) {
            res.error(error)
        }
    }
}

module.exports = new UserController