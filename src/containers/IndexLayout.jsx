import React, {Component} from "react";
import {connect} from "react-redux";
import {Tabs, Tab} from "material-ui/Tabs";
import Paper from "material-ui/Paper";
import AppBar from "material-ui/AppBar";
import SignInBox from "../components/SignInBox";
import SignUpBox from "../components/SignUpBox";
import Badge from "material-ui/Badge";
import IconButton from "material-ui/IconButton";
import NotificationsIcon from "material-ui/svg-icons/social/notifications";
import {amber700} from "material-ui/styles/colors";
import ProblemListCard from "../components/ProblemListCard";
import URLs from "../url.json";
import "./index.css";
import co from "co";
import * as ProblemListActions from "../redux/modules/problem_list";

class Index extends Component {
  componentWillMount() {
    if (this.props.Session.get('user')) {
      this.props.router.push('/dashboard');
    }
    this.fetchProblemLists();
  }

  onSignIn = (username, password) => {
    const {dispatch, router} = this.props;
    co(function*() {
      const res = yield fetch(URLs.baseURL + '/users/sign-in', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        credentials: 'include',
        body: JSON.stringify({username, password})
      });
      dispatch({type: 'SIGN_IN'});
      if (res.status === 200) {
        const data = yield res.json();
        dispatch({type: 'SIGN_IN_SUCCESS', payload: data});
        router.push('/dashboard');
      } else if (res.status === 404) {
        const data = yield res.json();
        dispatch({type: 'SIGN_IN_FAILED', payload: data, error: true});
      } else if (res.status === 403) {
        const data = yield res.json();
        dispatch({type: 'SIGN_IN_FAILED', payload: data, error: true});
      }
    }).catch(console.log);
  };

  onSignUp = (argSignUp) => {
    const {dispatch, router} = this.props;
    co(function*() {
      dispatch({type: 'SIGN_UP'});
      const res = yield fetch(URLs.baseURL + '/users/sign-up', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        credentials: 'include',
        body: JSON.stringify(argSignUp)
      });
      const data = yield res.json();
      switch (res.status) {
        case 200:
        case 201:
          // Sign Up Success
          dispatch({type: 'SIGN_UP_SUCCESS', payload: data});
          router.push('/dashboard');
          break;
        case 400:
        case 409:
          // Duplicate
          dispatch({type: 'SIGN_UP_FAILED', payload: data});
          break;
        default:
      }
    }).catch(console.log);
  };

  fetchProblemLists = () => {
    const {dispatch} = this.props;
    co(function*() {
      const res = yield fetch(URLs.baseURL + '/problemLists/?pageNumber=1&pageSize=10', {
        method: 'GET',
        headers: {
          "Content-Type": "application/json"
        },
        credentials: 'include'
      });
      switch (res.status) {
        case 200:
          dispatch(ProblemListActions.loadProblemLists(yield res.json()));
          break;
        default:
      }
    });
  };

  render() {
    return (
      <div>
        <Paper className="root-container" zDepth={3}>
          <AppBar title="ToT - XJTU Online Judge System" showMenuIconButton={false} iconElementRight={
            <Badge
              style={{padding: 0}}
              badgeContent={'99+'}
              secondary={true}
              badgeStyle={{top: 0, right: 0, backgroundColor: amber700}}
            >
              <IconButton
                tooltip="通知"
                style={{paddingTop: 18, paddingBottom: 6}}
              >
                <NotificationsIcon color={'#ffffff'}/>
              </IconButton>
            </Badge>
          }/>
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
          {this.props.ProblemList.get('items').map((v, i) => (
            <ProblemListCard
              key={i}
              title={v.get('title')}
              creatorName={v.get('creator')}
              date={new Date(parseInt(v.get('id').slice(0, 8), 16) * 1000).toLocaleString()}
            />
          ))}
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