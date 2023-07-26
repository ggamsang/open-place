import React from "react";
import { connect } from "react-redux";
import {
  AcceptDesignRequest,
  GetoutDesignRequest,
} from "redux/modules/expitem";
import {
  GetWaitingGroupRequest,
  GetWaitingDesignRequest,
  UpdateDesignInGroupRequest,
  UpdateGroupInGroupRequest,
  DeleteGroupInGroupRequest,
  DeleteDesignInGroupRequest,
} from "redux/modules/group";
import Alarm from "components/Header/Alarm";
import AlarmMobile from "components/Header/AlarmMobile";
import { isMobile, isOpen } from "constant";

class AlarmContainer extends React.Component {
  handleAlarmConfirm = (userID, alarmID) => {
    try {
      if (isOpen(this.props.Socket))
        this.props.Socket.emit("confirm", { user_id: userID, alarmId: alarmID });
    } catch (err) {
      console.error(err);
    }
  };
  handleAllAlarmConfirm = () => {
    try {
      if (isOpen(this.props.Socket))
        this.props.Socket.emit("allConfirm", { user_id: this.props.userInfo.uid });
    } catch (err) {
      console.error(err);
    }
  };
  componentDidMount() {
    if (!isMobile() && window.location.pathname === "/alarm") {
      alert("It's only for mobile version");
      window.history.go(-1);
    }
  }
  render() {
    return isMobile() ? (
      <AlarmMobile
        {...this.props}
        handleAllAlarmConfirm={this.handleAllAlarmConfirm}
        handleAlarmConfirm={this.handleAlarmConfirm}
      />
    ) : (
      <Alarm
        {...this.props}
        handleAllAlarmConfirm={this.handleAllAlarmConfirm}
        handleAlarmConfirm={this.handleAlarmConfirm}
      />
    );
  }
}
const mapDisaptchToProps = (dispatch) => ({
  AcceptDesignRequest: (design_id, member_id, token) =>
    dispatch(AcceptDesignRequest(design_id, member_id, token)),
  UpdateDesignInGroupRequest: (id, design_id) =>
    dispatch(UpdateDesignInGroupRequest(id, design_id)),
  UpdateGroupInGroupRequest: (id, group_id) =>
    dispatch(UpdateGroupInGroupRequest(id, group_id)),
  GetWaitingDesignRequest: (id, sort) =>
    dispatch(GetWaitingDesignRequest(id, sort)),
  GetWaitingGroupRequest: (id, sort) =>
    dispatch(GetWaitingGroupRequest(id, sort)),
  GetoutDesignRequest: (id, member_id, token, refuse) =>
    dispatch(GetoutDesignRequest(id, member_id, token, refuse)),
  DeleteDesignInGroupRequest: (id, design_id) =>
    dispatch(DeleteDesignInGroupRequest(id, design_id)),
  DeleteGroupInGroupRequest: (id, group_id) =>
    dispatch(DeleteGroupInGroupRequest(id, group_id)),
});
const mapStateToProps = (state) => ({
  token: state.Authentication.status.token,
  userInfo: state.Authentication.status.userInfo,
});
export default connect(mapStateToProps, mapDisaptchToProps)(AlarmContainer);
