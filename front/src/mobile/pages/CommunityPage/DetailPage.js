import React from 'react';
import ClientTemplate from 'mobile/clientTemplate';
import { useParams, } from 'react-router-dom';
import CommunityDetailContainer from 'mobile/containers/CommunityContainer/Detail/CommunityDetailContainer';

export function CommunityDetailPage() {
  const params = useParams();
  const { id } = params;

  return (<ClientTemplate>
    <CommunityDetailContainer id={id} />
  </ClientTemplate>)
}
