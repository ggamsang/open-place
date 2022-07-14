import React from 'react';
import ClientTemplate from 'clientTemplate';
import { useParams, } from 'react-router-dom';
import CommunityModifyContainer from 'containers/CommunityContainer/Detail/Modify/CommunityModifyContainer';
import NeedToLogin from 'Verification/NeedToLogin';

export function CommunityModifyPage() {
  const params = useParams();
  const { id } = params;
  return (NeedToLogin(<ClientTemplate>
    <CommunityModifyContainer id={id} />
  </ClientTemplate>));
}