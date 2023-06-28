export interface UserModel {
    userID: string,
    fullName?: string,
    userName: string,
    email: string,
    password: string,
    favouriteSandwiches?: string[],
    favouriteDiets?: string[],
    absolutelyWillNotEat?: string[],

}