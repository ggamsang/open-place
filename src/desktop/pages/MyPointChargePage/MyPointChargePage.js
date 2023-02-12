import ClientTemplate from 'desktop/clientTemplate';
import MyPointChargeContainer from 'desktop/containers/MyDetail/MyPointChargeContainer';
import NeedToLogin from 'Verification/NeedToLogin';

function MyPointChargePage() {
    return (
        NeedToLogin(<ClientTemplate>
            <MyPointChargeContainer />
        </ClientTemplate>));
}
export default MyPointChargePage;