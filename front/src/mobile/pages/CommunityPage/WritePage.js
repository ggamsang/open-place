import React from 'react';
import ClientTemplate from 'mobile/clientTemplate';
import CommunityWriteContainer from 'mobile/containers/CommunityContainer/Write';
import NeedToLogin from 'Verification/NeedToLogin';

export function CommunityWritePage() {
  return (NeedToLogin(<ClientTemplate>
    <CommunityWriteContainer />
  </ClientTemplate>));
}