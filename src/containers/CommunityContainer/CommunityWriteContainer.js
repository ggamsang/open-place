import React from 'react';
import { CommunityWrite, NoticeWrite } from 'components_mobile/Community';
import { useSearchParams } from 'react-router-dom';

export function CommunityWriteContainer() {
  const [searchParams] = useSearchParams();

  return (<React.Fragment>
    {searchParams.get('type') === "noti"
      ? <NoticeWrite />
      : <CommunityWrite />
    }
  </React.Fragment>)
}