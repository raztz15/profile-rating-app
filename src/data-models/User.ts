export class UserDataModel {
    username: string
    email: string
    password: string

    constructor(userObj: any) {
        this.username = userObj.username
        this.email = userObj.email
        this.password = userObj.password
    }
}