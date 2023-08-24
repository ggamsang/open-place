import ClientTemplate from 'mobile/clientTemplate';
import MyPointChargeContainer from 'mobile/containers/MyDetail/MyPointChargeContainer';
import NeedToLogin from 'Verification/NeedToLogin';

function MyPointChargePage() {
    return (
        NeedToLogin(<ClientTemplate>
            <MyPointChargeContainer />
        </ClientTemplate>));
}
export default MyPointChargePage;