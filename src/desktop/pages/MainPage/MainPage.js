import ClientTemplate from "desktop/clientTemplate";
import MainContainer from "desktop/containers/MainContainer";
// import Main from "desktop/components/Main";
// import { connect } from "react-redux";

function MainPage() {
  return (
    <ClientTemplate>
      <MainContainer />
      {/* <Main {...props} /> */}
    </ClientTemplate>
  );
}
export default MainPage;
// export default connect(
//   (state) => ({
//     isLoggedIn: state.Authentication.status.isLoggedIn,
//     userInfo: state.Authentication.status.userInfo,
//   }),
//   () => {}
// )(MainPage);
