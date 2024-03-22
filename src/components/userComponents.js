import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logger.js";
import User from "../models/user.js";
import UserService from "../services/userService.js";

console.log("user components yüklendi")

let logger1= new MongoLogger()
let userService = new UserService(logger1)


let user1 = new User(1,"Taha","Yakıt","Çanakkale")
let user2 = new User(2,"Selim","Koç","Adana")
userService.add(user1)
userService.add(user2)

console.log(userService.list())
console.log(userService.getById(2))



// userService.add()
// userService.list()



