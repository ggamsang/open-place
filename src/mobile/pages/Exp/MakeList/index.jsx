import React from 'react';
import { useParams } from 'react-router';

import MakeExpListContainer from '../../../containers/ListContainer/ExpListContainer/MakeExpListContainer';
import MobilePageLayout from '../../../MobilePageLayout';

function MakeExpListPage() {
  let params = useParams();

  return (<MobilePageLayout i_dont_need_footer={true}>
    <MakeExpListContainer sort={params.sort} keyword={params.keyword} />

  </MobilePageLayout>)
}
export default MakeExpListPage;