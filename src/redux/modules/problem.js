import Factory from "../factory";

const Problem = new Factory("Problem");

export const {Create, Load, Update, Remove} = Problem;
const {reducer} = Problem;
export default reducer;
