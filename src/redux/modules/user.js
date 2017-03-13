import Factory from "../factory";

const Users = new Factory("User");

export const {Create, Load, Update, Remove} = Users;
const {reducer} = Users;
export default reducer;
