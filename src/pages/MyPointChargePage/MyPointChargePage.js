import ClientTemplate from 'clientTemplate';
import MyPointChargeContainer from 'containers/MyDetail/MyPointChargeContainer';
import NeedToLogin from 'Verification/NeedToLogin';

function MyPointChargePage() {
    return (
        NeedToLogin(<ClientTemplate>
            <MyPointChargeContainer />
        </ClientTemplate>));
}
export default MyPointChargePage;