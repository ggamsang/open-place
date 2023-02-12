import React from "react";
import { connect } from "react-redux";
import ContactList from "mobile/components_mobile/Contact/ContactList";
import { GetExpContactListRequest, DeleteExpContactRequest,  } from "actions/Contact";

class ContactContainer extends React.Component {
    componentDidMount() {
        (this.props.ExpDetail !== null && this.props.ExpDetail.length !== 0)
            && this.props.GetExpContactListRequest(this.props.ExpDetail.uid);
    }
    modifyContact = (id, data) => {
        ;
    };
    deleteContact = id => {
        const { token, ExpDetail } = this.props;
        const rconfirm = window.confirm("선택하신 문의를 삭제하시겠습니까?");
        if (rconfirm)
            this.props.DeleteExpContactRequest(id, token)
                .then(data =>
                    data.success &&
                    this.props.GetExpContactListRequest(ExpDetail.uid))
    }
    render() {
        return (<ContactList onCloseWriteModal={() => this.props.onCloseWriteModal} {...this.props} delete={this.deleteContact} />);
    }
}

const mapStateToProps = (state) => ({
    ExpDetail: state.ExpDetail.status.expDetail,
    userInfo: state.Authentication.status.userInfo,
    token: state.Authentication.status.token,
    contacts: state.Contact.status.contacts,
});

const mapDispatchToProps = (dispatch) => ({
    GetExpContactListRequest: (item_id) =>
        dispatch(GetExpContactListRequest(item_id)),
    DeleteExpContactRequest: (id, token) =>
        dispatch(DeleteExpContactRequest(id, token)),
});

export default
    connect(mapStateToProps, mapDispatchToProps)
        (ContactContainer);
