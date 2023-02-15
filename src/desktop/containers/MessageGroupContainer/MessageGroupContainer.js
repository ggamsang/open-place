import React from "react";
import { connect } from "react-redux";
import { GetMessageGroupRequest } from "actions/Message";
import MesssGroupList from "desktop/components/MessageGroupList";

class MessageGroupContainer extends React.Component {
  GetList = (page) => this.props.GetMessageGroupRequest(page, this.props.token);

  componentDidUpdate(props) {
    const { token } = props;
    if (token == null && this.props.token) {
      this.GetList(0);
    }
  }

  render() {
    const { groups, group_id } = this.props;
    console.log(groups);
    return (
      <>
        <MesssGroupList
          groups={groups}
          group_id={group_id}
          getMore={this.GetList}
        />
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
