const { handleHttpError } = require("../utils/handleError");


/**
 * Array con los roles permitidos
 * @param {*} rol 
 * @returns 
 */
const checkRol = (roles) => (req, res, next) => {
    try {
        const {user} = req;
        console.log({user});
        const rolesByUser = user.role;

        //["admin", "manager", "user"]
        const ckeckValueRol = roles.some((rolSingle) => rolesByUser.includes(rolSingle)); //Esto nos devuelve un True o un False
        if (!ckeckValueRol) {
            handleHttpError(res, "USER_NOT_PERMISSIONS", 403)
            return
        }
        next();
    } catch (e) {
        handleHttpError(res, "ERROR_PERMISSIONS", 403)
    };
};


module.exports = checkRol;