import React from 'react';
import ClientTemplate from 'clientTemplate';
import NoticeWriteContainer from 'containers/NoticeContainer/Write';
import CommunityWriteContainer from 'containers/CommunityContainer/Write';
import { useSearchParams } from 'react-router-dom';

export function CommunityWritePage() {
  const [searchParams] = useSearchParams();

  return (<ClientTemplate>
    {searchParams.get('type') === "noti"
      ? <NoticeWriteContainer />
      : <CommunityWriteContainer />
    }
  </ClientTemplate>);
}