import React from "react";
import { connect } from "react-redux";
import {  UpdateExpContactRequest, GetExpContactListRequest } from "actions/Contact";
import ContactModifyModal from "mobile/components_mobile/Contact/ContactModifyModal";

class ContactModifyContainer extends React.Component {
    componentDidMount() {
        // this.props.GetExpContactRequest(this.props.id);
    }
    submit = (id, data) =>
        this.props.UpdateExpContactRequest(this.props.token, id, data)
            .then(data => {
                if (data.success) {
                    this.props.GetExpContactListRequest(this.props.expDetail.uid);
                    this.props.close();
                }
            });

    render() {
        return (<React.Fragment>
            <ContactModifyModal submit={this.submit} {...this.props} />
        </React.Fragment>);
    }
}
const mapStateToProps = (state) => ({
    // detail: state.Contact.status.detail,
    expDetail: state.ExpDetail.status.expDetail,
    token: state.Authentication.status.token,
    userInfo: state.Authentication.status.userInfo,
});
const mapDispatchToProps = (dispatch) => ({
    GetExpContactListRequest: (id) => dispatch(GetExpContactListRequest(id)),
    // GetExpContactRequest: (id) => dispatch(GetExpContactRequest(id)),
    UpdateExpContactRequest: (token, id, data) => dispatch(UpdateExpContactRequest(token, id, data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactModifyContainer);