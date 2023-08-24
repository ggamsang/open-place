import React from 'react';
import ClientTemplate from 'mobile/clientTemplate';
import { useParams } from 'react-router-dom';
import NoticeDetailContainer
  from 'mobile/containers/NoticeContainer/Detail/NoticeDetailContainer';

export function NoticeDetailPage() {
  const params = useParams();
  const { id } = params;

  return (<ClientTemplate>
    <NoticeDetailContainer id={id} />
  </ClientTemplate>)
}