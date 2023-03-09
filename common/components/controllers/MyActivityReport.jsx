// @flow

import React from "react";
import { UserAPIData } from "../utils/UserAPIUtils.js";
import UserAPIUtils from "../utils/UserAPIUtils.js";
import LoadingMessage from "../chrome/LoadingMessage.jsx";
import url from "../utils/url.js";
import CurrentUser from "../utils/CurrentUser.js";

type State = {|
  user: ?UserAPIData,
  isUserOrAdmin: boolean,
|};

class MyActivityReport extends React.PureComponent<{||}, State> {
  constructor(): void {
    super();

    this.state = {
      user: null,
      isUserOrAdmin: false,
    };
  }

  componentDidMount() {
    UserAPIUtils.fetchUserDetails(
      url.argument("id"),
      this.loadUserDetails.bind(this)
    );
  }

  loadUserDetails(user: UserAPIData) {
    this.setState({
      user: user,
      isUserOrAdmin: CurrentUser.userID() === user.id || CurrentUser.isStaff(),
    });
  }

  render(): React$Node {
    return this.state.user ? (
      this._renderDetails(user)
    ) : (
      <LoadingMessage message="Loading Volunteer Activity Report..." />
    );
  }

  _renderDetails(user: UserAPIData): React$Node {
    //look at my/projects MyProjects for template on how to load data here, no need to pass an ID via querystring as in My Profile
    return (
      <div className="VAR-root col-12">
        <p>Volunteer Activity Report form goes here</p>

      </div>
    );
  }
}

export default MyActivityReport;
