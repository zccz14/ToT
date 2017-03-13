import Factory from "../factory";

const Submission = new Factory("Submission");

export const {Create, Load, Update, Remove} = Submission;
const {reducer} = Submission;
export default reducer;
