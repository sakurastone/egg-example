const Service = require("egg").Service;

class UserService extends Service {
    async getUserName(username) {
        const { app } = this;
        try {
            const result = await app.mysql.get("user", { username });
            return result;
        } catch (error) {
            console.log(error);
            return null;
        }
        
    }
    async register(params) {
        const {app} = this
        try {
            const result = await app.mysql.insert("user",params)
            return result
        } catch(error) {
            console.log(error)
            return null
        }
    }
}
module.exports = UserService
