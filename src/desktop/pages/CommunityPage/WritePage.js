import React from 'react';
import ClientTemplate from 'desktop/clientTemplate';
import CommunityWriteContainer from 'desktop/containers/CommunityContainer/Write';
import NeedToLogin from 'Verification/NeedToLogin';

export function CommunityWritePage() {
  return (NeedToLogin(<ClientTemplate>
    <CommunityWriteContainer />
  </ClientTemplate>));
}