import React from 'react';
import { CommunityDetail } from 'components_mobile/Community';
import { NoticeDetail } from 'components_mobile/Community';
import { useSearchParams } from 'react-router-dom';

export function CommunityDetailContainer() {
  const [searchParams] = useSearchParams();
  return (
    <React.Fragment>
      {searchParams.get('type') === 'noti'
        ? <NoticeDetail />
        : <CommunityDetail type={searchParams.get('type')} />}
    </React.Fragment>
  )
}
