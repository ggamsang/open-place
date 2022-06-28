import React from 'react';
import ClientTemplate from 'clientTemplate';
import CommunityWriteContainer from 'containers/CommunityContainer/Write';
import NeedToLogin from 'Verification/NeedToLogin';

export function CommunityWritePage() {
  return (NeedToLogin(<ClientTemplate>
    <CommunityWriteContainer />
  </ClientTemplate>));
}