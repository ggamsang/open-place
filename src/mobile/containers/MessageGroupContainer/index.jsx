import React from "react";
import { connect } from "react-redux";
import { GetMessageGroupRequest } from "../../actions/Message";
import MesssGroupList from "../../components/MessageGroupList";

class MessageGroupContainer extends React.Component {
  GetList = (page) => this.props.GetMessageGroupRequest(page, this.props.token);
  componentDidUpdate(props) {
    if (this.props.token && props.token === null) {
      this.GetList(0);
    }
  }
  render() {
    const { groups } = this.props;
    return (
      <>
        <MesssGroupList groups={groups} getMore={this.GetList} />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  groups: state.Message.status.groups,
  token: state.Authentication.status.token,
});
const mapDispatchToProps = (dispatch) => ({
  GetMessageGroupRequest: (page, token) =>
    dispatch(GetMessageGroupRequest(page, token)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageGroupContainer);
