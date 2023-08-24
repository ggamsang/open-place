import React from 'react';
import styled from 'styled-components';
import { WIDTH } from 'constant';
import SearchForm from 'mobile/components_mobile/Commons/Search/SearchForm';
import { resolution } from 'mobile/commons/resolution';
import back_arrow from 'resources/Iconly-Bold-left-arrow.svg';

const Wrapper = styled.div`
  width: 100%;
  .blanker {
    height: 44px;
  }
  .gradient {
    width: 100%;
    height: 133px;
    background: linear-gradient(69deg, #501B1B, #655FFA, #D30E0E);
    background-size: 200% 200%;
    background-position: top right;
  .header{
    height:30px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    box-sizing:border-box;
    padding:0px 20px;
    margin-top:18px;
    .arrow_box{width:${resolution(27)}px;display:flex;justify-content:center;margin-right:10px;}
    .img_arrow{width:${resolution(27)}px;height:${resolution(19)}px;}
    .title {
      color: white;
      font-family: Pretendard;
      font-weight: 400;
      font-size: 24px;
  }
    }
  }
  .search_wrap{
    width:100%;
    box-sizing:border-box;
    padding-top:42px;
  }
  .terms {
    margin: auto;
    margin-top: 15px;
    width: ${WIDTH}px;
    background-color: black;
    border-radius: 35px 35px 0 0; 
    .text {
      padding: 29px;
      font-family: Pretendard;
      color: white;
      .big { 
        font-weight: 500;
        font-size: 17px;
        line-height: 40px;
      }
      .small {
        font-weight: 300;
        font-size: 12px;
        line-height: 40px;
      }
    }
  }
`;


class PrivacyPolicy extends React.Component {
  constructor(props){
    super(props);
    this.onClickBack = this.onClickBack.bind(this);
  }
  onClickBack = () => {
    window.history.go(-1);
  }
  render() {
    // console.log(resolution(123))

    return (
      <Wrapper>
        <div className='gradient'>
          <div className='search_wrap'>
            <SearchForm isMain={true} />
          </div>
          <div className='header'>
            <img onClick={this.onClickBack} src={back_arrow} className="img_arrow" />
            <div className='title'>개인정보 보호정책</div>
            <div className='img_arrow' />
          </div>
        </div>
        {/* <div className='gradient'>
          <div className='blanker'>&nbsp;</div>
          <SearchForm />
          <div className='title'>개인정보 보호정책</div>
        </div> */}

        <div className='terms'>
          <div className='text'>
            ○○○ 개인정보보호정책
            <br />○○○주식회사(○○○corp.com 이하 "회사"라 함)는 이용자들의 개인정보보호를 매우 중요시하며, 이용자가 회사의 서비스(이하 "○○○ 서비스" 또는 "○○○"라 함)를 이용함과 동시에 온라인상에서 회사에 제공한 개인정보가 보호 받을 수 있도록 최선을 다하고 있습니다. 이에 회사는 통신비밀보호법, 전기통신사업법, 정보통신망이용촉진등에관한법률 등 정보통신서비스제공자가 준수하여야 할 관련 법규상의 개인정보보호 규정 및 정보통신부가 제정한 개인정보보호지침을 준수하고 있습니다. 회사는 개인정보 보호정책을 통하여 이용자들이 제공하는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.
            <br />회사는 개인정보 보호정책을 홈페이지 첫 화면에 공개함으로써 이용자들이 언제나 용이하게 보실 수 있도록 조치하고 있습니다.
            <br />회사의 개인정보 보호정책은 정부의 법률 및 지침 변경이나 회사의 내부 방침 변경 등으로 인하여 수시로 변경될 수 있고, 이에 따른 개인정보 보호정책의 지속적인 개선을 위하여 필요한 절차를 정하고 있습니다. 그리고 개인정보 보호정책을 개정하는 경우 회사는그 변경사항에 대하여 즉시 홈페이지를 통하여 게시하고 버전번호 및 개정일자 등을 부여하여 개정된 사항을 이용자들이 쉽게 알아볼 수 있도록 하고 있습니다. 이용자들께서는 사이트 방문시 수시로 확인하시기 바랍니다.
            <br />○○○의 개인정보 보호정책은 다음과 같은 내용을 담고 있습니다.
            <br />가. 개인정보 수집에 대한 동의
            <br />나. 개인정보의 수집목적 및 이용목적
            <br />다. ○○○가 수집하는 개인정보 항목 및 수집방법
            <br />라. ○○○가 수집하는 개인정보의 보유 및 이용기간
            <br />마. ○○○가 수집한 개인정보의 공유 및 제공
            <br />바. 이용자 자신의 개인정보 관리(열람,정정,삭제 등)에 관한 사항
            <br />사. 쿠키(cookie)의 운영에 관한 사항
            <br />아. 개인정보관련 기술적-관리적 대책
            <br />자. 개인정보의 위탁처리
            <br />차. 개인정보관련 의견수렴 및 불만처리에 관한 사항
            <br />카. 어린이 정보보호에 관한 사항
            <br />타. ○○○ 개인정보 관리책임자 및 담당자의 소속-성명 및 연락처
            <br />파. ○○○ 고객센터 안내
            <br />
            <br />가. 개인정보 수집에 대한 동의
            <br />회사는 이용자들이 회사의 개인정보 보호정책 또는 이용약관의 내용에 대하여 「동의」버튼 또는 「취소」버튼을 클릭할 수 있는 절차를 마련하여, 「동의」버튼을 클릭하면 개인정보 수집에 대해 동의한 것으로 봅니다.
            <br />나. 개인정보의 수집목적 및 이용목적
            <br />"개인정보"라 함은 생존하는 개인에 관한 정보로서 당해 정보에 포함되어 있는 성명, 주민등록번호 등의 사항에 의하여 당해 개인을 식별할 수 있는 정보(당해 정보만으로는 특정 개인을 식별할 수 없더라도 다른 정보와 용이하게 결합하여 식별할 수 있는 것을 포함)를 말합니다.
            <br />대부분의 ○○○ 서비스는 별도의 사용자 등록이 없이 언제든지 사용할 수 있습니다. 그러나 회사는 회원서비스(메일, 마이홈, 메신저, 메이트, 채팅, 게임, 러브, 마이○○○, 나만의 증권정보 등) 등를 통하여 이용자들에게 맞춤식 서비스를 비롯한 보다 더 향상된 양질의 서비스를 제공하기 위하여 이용자 개인의 정보를 수집하고 있습니다.
            <br />회사는 이용자의 사전 동의 없이는 이용자의 개인 정보를 함부로 공개하지 않으며, 수집된 정보는 아래와 같이 이용하고 있습니다.
            <br />첫째, 이용자들이 제공한 개인정보를 바탕으로 보다 더 유용한 서비스를 개발할 수 있습니다. 회사는 신규 서비스개발이나 컨텐츠의 확충시에 기존 이용자들이 회사에 제공한 개인정보를 바탕으로 개발해야 할 서비스의 우선 순위를 보다 더 효율적으로 정하고, 회사는 이용자들이 필요로 할 컨텐츠를 합리적으로 선택하여 제공할 수 있습니다.
            <br />둘째, 회사가 제공하는 각종 정보 및 서비스 등은 대부분 무료입니다. 회사는 이러한 무료 서비스를 제공하기 위해서 광고를 게재하고 있는데, 이용자들에 대한 정확한 개인정보를 바탕으로 각 서비스나 메뉴 등에 적절하게 광고와 내용들을 전달해 드릴 수 있으며, 이것은 궁극적으로 회사가 이용자 여러분들게 드리는 또 하나의 정보로서의 가치를 지니게 됩니다. 회사는 광고주들로부터 광고를 받아 광고주들이 대상으로 하려는 이용자의 유형에 맞게 광고를 보여줄 뿐, 광고주들에게는 절대로 이용자들의 개인정보를 보여주거나 제공하지 않습니다.
            <br />셋째, 각 수집정보별 수집목적은 다음과 같습니다.
            <br />1. 성명,주민등록번호,아이디,비밀번호 : 서비스이용에 따른 본인식별, 연령제한 서비스의 제공
            <br />2. 이메일주소,전화번호 : 고지사항 전달, 본인의사확인, 불만처리 등 원활한 의사소통 경로의 확보,
            <br />　 새로운 서비스나 신상품,이벤트 정보 등 최신정보의 안내
            <br />3. 은행계좌정보,신용카드정보,핸드폰번호,전화번호 : 유료정보이용에 대한 요금결재
            <br />4. 주소,전화번호 : 청구서, 물품배송시 정확한 배송지의 확보
            <br />5. 주민등록번호,주소 : 인구통계학적 분석
            <br />6. 그 외 선택항목 : 개인맟춤서비스를 제공하기 위한 자료
            <br />다. ○○○가 수집하는 개인정보 항목 및 수집방법
            <br />회사는 이용자들이 회원서비스를 이용하기 위해 회원으로 가입하실 때 서비스 제공을 위한 필수적인 정보들을 온라인상에서 입력 받고 있습니다. 회원 가입시에 받는 필수적인 정보는 이름, 주민등록번호, 이메일주소,주소,전화번호 등입니다. 또한 양질의 서비스 제공을 위하여 이용자들이 선택적으로 입력할 수 있는 사항으로서 관심사항,직업 등을 입력 받고 있습니다.
            <br />13세 이하 어린이를 위한 「쥬니어○○○」 회원 가입시에는 필수 입력사항으로서 이름, 성별, 생년월일을 입력 받고 있고, 추가 입력사항으로서는 학교명과 전화번호, 주소, 취미, 자기소개 등을 입력하도록 하고 있으며, 최종적으로 부모님 동의를 받았는지를 확인한 후 가입처리가 되고 있습니다.
            <br />18세 이상 성인 네티즌을 위한 인터넷 서비스로서 한번의 ID 로그인만으로 업종별 대표기업들이 보유한 고급 컨텐츠와 대고객 온라인 서비스는 물론 ○○○가 제공하는 메일이나 메신저 등의 회원서비스까지 한꺼번에 무료로 받을 수 있는 「○○○(○○○)」서비스에 가입하기 위해서는 성명과 주민등록번호, 생년월일시, Email주소, 직업, 직장/학교명, 부서/학과명, (거주지)주소, 전화번호, 프로필 공개여부, 자기소개를 필수사항으로 입력해야 하고, 그 외에 이동통신번호와 추천인ID 등을 선택적으로 입력할 수 있습니다.
            <br />또한 ○○○내에서의 설문조사나 이벤트 행사시 통계분석이나 경품제공 등을 위해 선별적으로 개인정보 입력을 요청할 수 있습니다. 그러나, 이용자의 기본적 인권 침해의 우려가 있는 민감한 개인정보(인종 및 민족, 사상 및 신조, 출신지 및 본적지, 정치적 성향 및 범죄기록, 건강상태 및 성생활 등)는 가급적 수집하지 않으며 부득이하게 수집해야 할 경우 이용자들의 사전동의를 반드시 구할 것입니다. 그리고, 어떤 경우에라도 입력하신 정보를 이용자들에게 사전에 밝힌 목적 이외에 다른 목적으로는 사용하지 않으며 외부로 유출하지 않습니다.
            <br />○○○에 광고를 게재하는 광고주나 검색 등의 각종 디렉토리에 링크가 되어 있는 웹사이트들이 이용자 여러분에 대하여 개인적으로 식별할 수 있는 개인정보를 수집할 수도 있을 것입니다. ○○○에 링크되어 있는 웹사이트들이 개인정보를 수집하는 행위에 대해서는 본 "○○○ 개인정보 보호정책"이 적용되지 않음을 알려 드립니다.
            <br />
            <br />라. ○○○가 수집하는 개인정보의 보유 및 이용기간
            <br />이용자가 ○○○의 회원으로서 회사에 제공하는 서비스를 이용하는 동안 회사는 이용자들의 개인정보를 계속적으로 보유하며 서비스 제공 등을 위해 이용합니다. 다만, 아래의 "바. 이용자 자신의 개인정보 관리(열람,정정,삭제 등)에 관한 사항" 에서 설명한 절차와 방법에 따라 회원 본인이 직접 삭제하거나 수정한 정보, 가입해지를 요청한 경우에는 재생할 수 없는 방법에 의하여 디스크에서 완전히 삭제하며 추후 열람이나 이용이 불가능한 상태로 처리됩니다.
            <br />그리고 "다. ○○○가 수집하는 개인정보 항목 및 수집방법"에서와 같이 일시적인 목적(설문조사, 이벤트 등)으로 입력 받은 개인정보는 그 목적이 달성된 이후에는 동일한 방법으로 사후 재생이 불가능한 상태로 처리됩니다.
            <br />귀하의 개인정보는 다음과 같이 개인정보의 수집목적 또는 제공받은 목적이 달성되면 파기하는 것을 원칙으로 합니다. 다만, 아래의 경우 회원정보를 보관합니다. 그리고 상법,전자상거래등에서의 소비자보호에 관한 법률 등 관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다. 이 경우 회사는 회사는 보관하는 정보를 그 보관의 목적으로만 이용합니다.
            <br />- 계약 또는 청약철회 등에 관한 기록 : 5년
            <br />- 대금결제 및 재화등의 공급에 관한 기록 : 5년
            <br />- 소비자의 불만 또는 분쟁처리에 관한 기록 : 3년
            <br />마. ○○○가 수집한 개인정보의 공유 및 제공
            <br />회사는 이용자들의 개인정보를 "나. 개인정보의 수집목적 및 이용목적"에서 고지한 범위내에서 사용하며, 이용자의 사전 동의 없이는 동 범위를 초과하여 이용하거나 원칙적으로 이용자의 개인정보를 외부에 공개하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.
            <br />첫째,이용자들이 사전에 공개에 동의한 경우
            <br />둘째, 서비스 제공에 따른 요금정산을 위하여 필요한 경우
            <br />셋째, 홈페이지에 게시한 ○○○ 서비스 이용 약관이나 기타 회원 서비스 등 이용약관 또는 정책을 위반한 경우
            <br />넷째, ○○○ 서비스를 이용하여 타인에게 정신적, 물질적 피해를 줌으로써 그에 대한 법적인 조치를 취하기 위하여 개인정보를 공개해야 한다고 판단되는 충분한 근거가 있는 경우
            <br />다섯째, 기타 법에 의해 요구된다고 선의로 판단되는 경우
            <br />(ex. 관련법에 의거 적법한 절차에 의한 정부/수사기관의 요청이 있는 경우 등)
            <br />여섯째, 통계작성,학술연구나 시장조사를 위하여 특정개인을 식별할 수 없는 형태로 광고주, 협력업체나 연구단체 등에 제공하는 경우
            <br />일곱째, 이용자의 서비스 이용에 따른 불만사항 및 문의사항(민원사항)의 처리를 위하여 파.항의 고객센터를 운영하는 전문업체에 해당 민원사항의 처리에 필요한 개인정보를 제공하는 경우
            <br />그리고 회사는 새로운 기술개발이나 보다 나은 서비스의 제공을 위하여 이용자들의 개인정보를 공유할 수 있습니다. 이 경우에도 정보수집 또는 정보제공 이전에 이용자들에게 개인정보를 공유할 기관이나 단체가 누구인지, 어떤 정보가 왜 필요한지, 그리고 언제까지 어떻게 보호되고 관리되는지 알려드리고 동의를 구하는 절차를 거치게 되며, 이용자들의 동의가 없는 경우에는 추가적인 정보를 임의로 수집하거나 공유하지 않습니다.
            <br />성별, 연령별 기타 특정 조건의 집단에 대한 광고 게재 및 발송 시에도 이용자들의 개인정보는 광고를 의뢰한 개인이나 기업 등에 제공되지 않으며, 기타 통계처리나 학술연구, 시장조사를 위하여 필요한 경우에도 특정한 개인을 식별할 수 없는 형태로만 정보가 제공됩니다.
            <br />바. 이용자 자신의 개인정보 관리(열람,정정,삭제 등)에 관한 사항
            <br />이용자는 언제든지 ○○○ 홈페이지를 이용하여 등록되어 있는 자신의 개인정보를 조회하거나 수정할 수 있으며 가입해지를 요청할 수도 있습니다.
            <br />이용자들의 개인정보 조회 및 수정을 위해서는 ○○○ 회원관리 메뉴에서 아이디와 비밀번호를 사용하여 로그인(LOG-IN)하면 되는데, 아이디(ID) 및 주민등록번호, 이름(쥬니어○○○의 경우 성별, 생년월일까지 포함)을 제외한 모든 입력사항을 수정할 수 있습니다. 또한, 비밀번호를 잊어버린 경우에는 회원 로그인 메뉴 하단에 있는 "비밀번호를 잊어버렸거나 로그인에 문제가 계신 분들은 여기를 누르세요"를 클릭하여 본인 확인에 필요한 사항을 입력하시면, 본인여부 확인 후 email을 통하여 비밀번호를 알려 드립니다.
            <br />가입해지는 ○○○ 홈페이지에 있는 "도움말"을 클릭하고 "ID/비밀번호 관련 질문하기"를 선택하신 후 홈페이지의 안내사항에 따라 항목 선택 및 질문사항을 입력하고 "○○○로 전송"을 선택하시면, 입력하신 사항을 기초로 이용자 본인여부를 확인한 후 처리합니다.
            <br />이용자들은 ○○○ 서비스의 회원 아이디(ID)에 대하여 가입해지 또는 이용해지를 할 수 있으나 이로 인하여 모든 서비스를 이용할 수 없게 되는 것은 아니며, 단지 회원서비스(메일, 마이홈, 메신저, 메이트, 채팅, 게임, 러브 등) 및 쥬니어○○○, 마이비즈 등 로그인이 요구되는 일부 서비스에 대해서만 그 기능을 이용할 수 없게 됩니다. 회사는 이용자의 요청에 의해 해지 또는 삭제된 개인정보는 라.○○○가 수집하는 개인정보의 보유 및 이용기간에 명시된 바에 따라 처리하고 그 외의 용도로 열람 또는 이용할 수 없도록 처리하고 있습니다.
            <br />사. 쿠키(cookie)의 운영에 관한 사항
            <br />이용자들에게 특화된 맞춤서비스를 제공하기 위해서 ○○○는 이용자들의 정보를 저장하고 수시로 불러오는 '쿠키(cookie)'를 사용합니다. 쿠키는 웹사이트를 운영하는데 이용되는 서버(HTTP)가 이용자의 컴퓨터 브라우저에게 보내는 소량의 정보이며 이용자들의 PC 컴퓨터내의 하드디스크에 저장되기도 합니다.
            <br />이용자들이 ○○○에 접속한 후 로그인(LOG-IN)하여 회원서비스 및 쥬니어○○○, 마이비즈(MyBiz) 등의 서비스를 이용하기 위해서는 쿠키를 허용하셔야 합니다. ○○○는 이용자들에게 적합하고 보다 유용한 서비스를 제공하기 위해서 쿠키를 이용하여 아이디에 대한 정보를 찾아냅니다. 쿠키는 이용자의 컴퓨터는 식별하지만 이용자를 개인적으로 식별하지는 않습니다.
            <br />쿠키를 이용하여 이용자들이 방문한 ○○○의 각 서비스와 웹 사이트들에 대한 방문 및 이용형태, 인기 검색어, 이용자 규모 등을 파악하여 더욱 더 편리한 서비스를 만들어 제공할 수 있고 이용자에게 최적화된 정보를 제공할 수 있습니다. 이용자들은 쿠키에 대하여 사용여부를 선택할 수 있습니다. 웹브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용할 수도 있고, 쿠키가 저장될 때마다 확인을 거치거나, 모든 쿠키의 저장을 거부할 수도 있습니다. 다만, 쿠키의 저장을 거부할 경우에는 로그인이 필요한 ○○○ 일부 서비스는 이용할 수 없습니다.
            <br />아. 개인정보관련 기술적-관리적 대책
            <br />회사는 이용자들의 개인정보를 취급함에 있어 개인정보가 분실, 도난, 누출, 변조 또는 훼손되지 않도록 안전성 확보를 위하여 다음과 같은 기술적 대책을 강구하고 있습니다.
            <br />이용자들의 개인정보는 비밀번호에 의해 철저히 보호되고 있습니다. ○○○ 회원 아이디(ID)의 비밀번호는 본인만이 알고 있으며, 개인정보의 확인 및 변경도 비밀번호를 알고 있는 본인에 의해서만 가능합니다. 따라서 이용자 여러분께서는 비밀번호를 누구에게도 알려주시면 안됩니다. 이를 위해 회사에서는 기본적으로 PC에서의 사용을 마치신 후 온라인상에서 로그아웃(LOG-OUT)하시고 웹브라우저를 종료하도록 권장합니다. 특히 다른 사람과 PC를 공유하여 사용하거나 공공장소(회사나 학교, 도서관, 인터넷 게임방 등)에서 이용한 경우에는 개인정보가 다른 사람에게 알려지는 것을 막기 위해 위와 같은 절차가 더욱 필요할 것입니다.
            <br />회사는 해킹이나 컴퓨터 바이러스 등에 의해 회원의 개인정보가 유출되거나 훼손되는 것을 막기 위해 최선을 다하고 있습니다. 개인정보의 훼손에 대비해서 자료를 수시로 백업하고 있고, 최신 백신프로그램을 이용하여 이용자들의 개인정보나 자료가 누출되거나 손상되지 않도록 방지하고 있으며, 암호알고리즘 등을 통하여 네트워크상에서 개인정보를 안전하게 전송할 수 있도록 하고 있습니다. 그리고 침입차단시스템을 이용하여 외부로부터의 무단 접근을 통제하고 있으며, 기타 시스템적으로 안정성을 확보하기 위한 가능한 모든 기술적 장치를 갖추려 노력하고 있습니다.
            <br />회사의 개인정보관련 취급 직원은 담당자에 한정시키고 있고 이를 위한 별도의 비밀번호를 부여하여 정기적으로 갱신하고 있으며, 담당자에 대한 수시 교육을 통하여 ○○○ 개인정보 보호정책의 준수를 항상 강조하고 있습니다. 그리고 사내 통신비밀전담기구 등을 통하여 ○○○ 개인정보 보호정책의 이행사항 및 담당자의 준수여부를 확인하여 문제가 발견될 경우 즉시 수정하고 바로 잡을 수 있도록 노력하고 있습니다.
            <br />자. 개인정보의 위탁처리
            <br />회사는 서비스 향상을 위해서 이용자들의 개인정보를 외부전문업체에 위탁하여 처리할 수 있습니다. 개인정보의 처리를 위탁하는 경우에는 미리 그 사실을 이용자들에게 공지할 것입니다. 또한 위탁계약 등을 통하여 서비스제공자의 개인정보보호 관련 지시엄수, 개인정보에 관한 비밀유지, 제3자 제공의 금지 및 사고시의 책임부담 등을 명확히 규정하고 당해 계약내용을 서면 또는 전자적으로 보관할 것입니다.
            <br />차. 개인정보관련 의견수렴 및 불만처리에 관한 사항
            <br />회사는 개인정보보호와 관련하여 이용자 여러분들의 의견을 수렴하고 있으며 불만을 처리하기 위하여 모든 절차와 방법을 마련하고 있습니다. 이용자들은 하단에 명시한 "타. ○○○ 개인정보 관리책임자 및 담당자의 소속-성명 및 연락처"항을 참고하여 전화나 메일을 통하여 불만사항을 신고할 수 있고, 회사는 이용자들의 신고사항에 대하여 신속하고도 충분한 답변을 해 드릴 것입니다. 또는 정부에서 설치하여 운영중인 개인정보침해신고센터(http://www.cyberprivacy.or.kr, 전화 02-1336, PC통신 go eprivacy), 정보보호마크인증위원회(www.privacymark.or.kr,02-580-0533),경찰청(www.police.go.kr)에 불만처리를 신청할 수 있습니다.
            <br />카. 어린이 정보보호에 관한 사항
            <br />현행법상 만14세 미만의 어린이들은 온라인으로 타인에게 개인정보를 보내기 전에 반드시 개인정보의 수집 및 이용목적에 대하여 충분히 숙지하고 법정대리인의 동의를 받아야 합니다. 이에 회사는 가입약관이나 서비스 이용규칙 등을 통하여 위 사항을 설명하고 있으며 가입시에는 반드시 부모님 동의를 받았는지의 여부를 확인합니다. 회사는 법정대리인에게 전자우편을 발송하여 동의의사를 표시한 후 이를 전자우편으로 회신토록 하고있습니다. 수집된 아동의 법정대리인의 개인정보는 동의여부를 확인하는 용도로만 사용할 것입니다. 만14세 미만 어린이의 법정대리인은 어린이의 개인정보 열람, 정정, 동의철회를 요청할 수 있으며, 이러한 요청이 있을 경우 회사는 지체없이 필요한 조치를 취합니다.
            <br />타. ○○○ 개인정보 관리책임자 및 담당자의 소속-성명 및 연락처
            <br />○○○는 귀하가 좋은 정보를 안전하게 이용할 수 있도록 최선을 다하고 있습니다. 개인정보를 보호하는데 있어 귀하께 고지한 사항들에 반하는 사고가 발생할 경우 개인정보관리책임자가 책임을 집니다.
            <br />이용자 개인정보와 관련한 아이디(ID)의 비밀번호에 대한 보안유지책임은 해당 이용자 자신에게 있습니다. ○○○컴에서는 비밀번호에 대해 어떠한 방법으로도 이용자에게 직접적으로 질문하는 경우는 없으므로 타인에게 비밀번호가 유출되지 않도록 각별히 주의하시기 바랍니다. 특히 "아. 개인정보관련 기술적-관리적 대책"항에서 명시한 것과 같이 공공장소에서 온라인상에서 접속해 있을 경우에는 더욱 유의하셔야 합니다. ○○○컴은 개인정보에 대한 의견수렴 및 불만처리를 담당하는 개인정보 관리책임자 및 담당자를 지정하고 있고, 연락처는 아래와 같습니다.
            <br />파. ○○○ 고객센터 안내
            <br />현재 회사(○○○)는 고객의 민원사항의 처리를 위한 고객센터를 전문업체인 한국○○○주식회사에 위탁 처리하고 있습니다
            <br />회사는 위탁업체에 고객의 민원사항 처리를 위해 필요한 범위 내에서 정보를 제공할 수 있습니다.
            <br />또한 위탁계약시 개인정보 보호의 안전을 기하기 위하여 서비스 제공자의 개인정보보호 관련 지시엄수, 개인정보에 관한 비밀유지, 제 3자 제공의
            <br />금지 및 사고시의 책임부담 등을 명확히 규정하고 당해 계약내용을 서면 및 전자적으로 보관하고 있습니다.
            <br />근무시간 : 평일 10:00~18:00
            <br />토요일 및 일요일, 공휴일은 휴무입니다.
            <br />점심시간은 12:00~13:00 입니다.
            <br />팩스 : 000-0000-0000
            <br />등기우편 : ○○시 ○○구 ○○동 분당 우체국 사서함 ○○호
            <br />　　　　　○○○(주) ○○○ 서비스 담당자 앞
            <br />기타 개인정보에 관한 상담이 필요한 경우에는 개인정보침해신고센터 등으로 문의하실 수 있습니다.
            {/*  */}
            <div> <br /> <br /> <br /> <br /> </div>
          </div>
        </div>
      </Wrapper>
    )
  }
}
export default PrivacyPolicy;