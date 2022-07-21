import React from "react";
import { connect } from "react-redux";
import { CreateExpContactRequest, GetExpContactListRequest } from "actions/Contact";
import ContactWriteModal from "components_mobile/Contact/ContactWriteModal";

class ContactWriteContainer extends React.Component {

    submit = data =>
        this.props.CreateExpContactRequest(this.props.token, data)
            .then(data => {
                if (data.success) {
                    this.props.GetExpContactListRequest(this.props.expDetail.uid);
                    this.props.close();
                }
            });

    render() {
        return (<React.Fragment>
            <ContactWriteModal submit={this.submit} {...this.props} />
        </React.Fragment>);
    }
}
const mapStateToProps = (state) => ({
    expDetail: state.ExpDetail.status.expDetail,
    token: state.Authentication.status.token,
    userInfo: state.Authentication.status.userInfo,
});
const mapDispatchToProps = (dispatch) => ({
    GetExpContactListRequest: (id) => dispatch(GetExpContactListRequest(id)),
    CreateExpContactRequest: (token, data) => dispatch(CreateExpContactRequest(token, data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactWriteContainer);