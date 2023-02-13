import React from "react";
import ScrollList from "desktop/components/Commons/ScrollList/ScrollList.js";
import { connect } from "react-redux";
import host from "config.js";
import { authGET } from "constant.js";

class TopItemListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: [] };
  }
  async componentDidMount() {
    fetch(`${host}/user/visited`, authGET(this.props.token))
      .then((r) => r.json())
      .then((data) => this.setState({ list: data.detail || [] }));
  }
  render() {
    const { list } = this.state;
    console.log(list);
    return (
      <React.Fragment>
        <ScrollList list_added={list} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.Authentication.status.token,
});

export default connect(mapStateToProps, null)(TopItemListContainer);
