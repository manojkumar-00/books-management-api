const express = require('express');
const { PingCheck, UserController } = require('../../controllers');
const { UserMiddlewares } = require('../../middlewares');

const userRouter = express.Router();


/**
 * /api/v1/user/ping
 */

userRouter.get('/ping', PingCheck('AUTH API is live...'));


/**
 * /api/v1/user/admin
 */
userRouter.get('/admin',
    UserMiddlewares.checkAuth,
    UserMiddlewares.isAdmin,
    PingCheck('Admin User'));


/**
 * POST Request -> /api/v1/user/register/
 * Request Body -> {name:"Manoj Kumar", email:"a@b.com",password:'123455'}
 */

userRouter.post(
    '/register',
    UserMiddlewares.validateRegisterRequest,
    UserController.register
);


/**
 * POST Request -> /api/v1/user/login/
 * Request Body -> {email:"a@b.com",password:'123455'}
 */

userRouter.post('/login',
    UserMiddlewares.validateLoginRequest,
    UserController.login
)


/**
 * POST Request -> /api/v1/user/role/
 * Request Body -> {role:"admin",userId:1}
 */

userRouter.post('/role',
    UserMiddlewares.checkAuth,
    UserMiddlewares.isAdmin,
    UserController.addRoleToUser
)


/**
 * DELETE Request -> /api/v1/user/role/
 * Request Body -> {role:"admin",userId:1}
 */

userRouter.delete('/role',
    UserMiddlewares.checkAuth,
    UserMiddlewares.isAdmin,
    UserController.revokeUserRole
)

module.exports = userRouter;