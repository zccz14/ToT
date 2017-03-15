import Immutable from "immutable";
import config from "../config";

class ProblemListUtil {
  static fromJS(problemList) {
    return Immutable.fromJS(problemList)
  }

  static getTitle(problemList) {
    if (!problemList) {
      return "No Title";
    }
    return problemList.get('title') || problemList.title || "No Title";
  }

  static getCoverURL(problemList) {
    if (!problemList) {
      return config.coverURL;
    }
    problemList = Immutable.fromJS(problemList);
    return problemList.get('coverUrl') || problemList.coverUrl || config.coverURL;
  }
}

export default ProblemListUtil;