import Factory from "../factory";

const ProblemList = new Factory("ProblemList");

export const {Create, Load, Update, Remove} = ProblemList;
const {reducer} = ProblemList;
export default reducer;
