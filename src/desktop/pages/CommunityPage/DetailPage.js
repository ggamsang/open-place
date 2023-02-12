import React from 'react';
import ClientTemplate from 'desktop/clientTemplate';
import { useParams, } from 'react-router-dom';
import CommunityDetailContainer from 'desktop/containers/CommunityContainer/Detail/CommunityDetailContainer';

export function CommunityDetailPage() {
  const params = useParams();
  const { id } = params;

  return (<ClientTemplate>
    <CommunityDetailContainer id={id} />
  </ClientTemplate>)
}
