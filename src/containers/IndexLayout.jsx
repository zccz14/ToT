import React, {Component} from "react";
import {connect} from "react-redux";
import {Tabs, Tab} from "material-ui/Tabs";
import Paper from "material-ui/Paper";
import AppBar from "material-ui/AppBar";
import SignInBox from "../components/SignInBox";
import SignUpBox from "../components/SignUpBox";
import ProblemListCard from "../components/ProblemListCard";
import * as SessionActions from "../redux/modules/session";
import Fetch from "../utils/fetch";
import "./index.css";
import co from "co";
import * as ProblemListActions from "../redux/modules/problem_list";
import UserUtil from "../utils/user";
import Immutable from "immutable";

class Index extends Component {
  componentWillMount() {
    if (this.props.Session.get('user')) {
      this.props.router.push('/dashboard');
    } else {
      this.fetchProblemLists();
    }
  }

  onSignIn = (args) => {
    const {dispatch, router} = this.props;
    co(function*() {
      dispatch(SessionActions.SignIn());
      const res = yield Fetch("POST")("/users/sign-in")(args);
      if (res.status === 200) {
        const data = Immutable.fromJS(yield res.json());
        dispatch(SessionActions.SignInSuccess(data));
        dispatch(SessionActions.MessageAppend(`Hi, ${UserUtil.getNickname(data)}`));
        router.push('/dashboard');
      } else if (res.status === 400) {
        const error = yield res.json();
        dispatch(SessionActions.SignInFailed(error));
        dispatch(SessionActions.MessageAppend(`Bad Request: ${error.message}`));
      } else if (res.status === 404) {
        const data = yield res.json();
        dispatch(SessionActions.SignInFailed(data));
        dispatch(SessionActions.MessageAppend(`Umm, no such user ${args.username}`));
      } else if (res.status === 403) {
        const data = yield res.json();
        dispatch(SessionActions.SignInFailed(data));
        dispatch(SessionActions.MessageAppend(`Wrong username or password`));
      }
    });
  };

  onSignUp = (argSignUp) => {
    const {dispatch, router} = this.props;
    co(function*() {
      dispatch(SessionActions.SignUp());
      const res = yield Fetch("POST")("/users/sign-up")(argSignUp);
      switch (res.status) {
        case 201: {
          // Sign Up Success
          const user = UserUtil.fromJS(yield res.json());
          dispatch(SessionActions.SignUpSuccess(user));
          dispatch(SessionActions.MessageAppend(`Welcome freshman, ${UserUtil.getNickname(user)}`));
          router.push('/dashboard');
          break;
        }
        case 400: {
          // Bad Request
          const data = yield res.json();
          dispatch(SessionActions.SignUpFailed(data));
          dispatch(SessionActions.MessageAppend(`Bad request: ${data}`));
          break;
        }
        case 409: {
          // Duplicate
          const data = yield res.json();
          dispatch(SessionActions.SignUpFailed(data));
          dispatch(SessionActions.MessageAppend(`Duplicate`));
          break;
        }
        default:
      }
    });
  };

  fetchProblemLists = () => {
    const {dispatch} = this.props;
    co(function*() {
      const res = yield Fetch("GET")("/problemLists/?pageNumber=1&pageSize=10")();
      switch (res.status) {
        case 200: {
          let data = yield res.json();
          dispatch(ProblemListActions.Load(data.content));
          break;
        }
        default:
      }
    }).catch((e) => {
      dispatch(SessionActions.SignInFailed(e));
    });
  };

  render() {
    return (
      <div>
        <Paper className="root-container" zDepth={3}>
          <AppBar title="ToT - XJTU Online Judge System" showMenuIconButton={false}/>
          <div className="container">
            <Paper className="sign-container">
              <Tabs>
                <Tab label="Sign In">
                  <SignInBox onSignIn={this.onSignIn}/>
                </Tab>
                <Tab label="Sign Up">
                  <SignUpBox onSignUp={this.onSignUp}/>
                </Tab>
              </Tabs>
            </Paper>
          </div>
        </Paper>
        <br/>
        <div className="flex-container">
          {
            this.props.ProblemList.get('items').map((v, i) => (
              <ProblemListCard
                key={i}
                problemList={v}
                title={v.title}
                creatorName={v.creator}
                date={new Date(parseInt(i.slice(0, 8), 16) * 1000).toLocaleString()}
              />
            ))
          }
        </div>
      </div>
    )
  }
}

function select(state) {
  return {
    Session: state.Session,
    ProblemList: state.ProblemList
  }
}

export default connect(select)(Index);