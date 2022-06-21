import React from 'react';
import ClientTemplate from 'clientTemplate';
import { useParams, useSearchParams } from 'react-router-dom';
import CommunityDetailContainer from 'containers/CommunityContainer/Detail/CommunityDetailContainer';
import NoticeDetailContainer from 'containers/NoticeContainer/Detail/NoticeDetailContainer';

export function CommunityDetailPage() {
  const [searchParams] = useSearchParams();
  const params = useParams();
  const { id } = params;

  return (<ClientTemplate>

    {searchParams.get('type') === 'noti'
      ? <NoticeDetailContainer id={id} />
      : <CommunityDetailContainer id={id} />}

  </ClientTemplate>)
}
