import React from "react";
import ClientTemplate from "mobile/clientTemplate";
// import NeedToLogin from 'Verification/NeedToLogin';
import CreateExpContainer from "mobile/containers/ExpContainer/CreateExpContainer";

function CreateExpPage() {
  return (
    <ClientTemplate>
      <CreateExpContainer />
    </ClientTemplate>
  );
}

// function CreateExpPage() {
//   return (NeedToLogin(<ClientTemplate>
//     <CreateExpContainer/>
//   </ClientTemplate>)
//   );
// }

export default CreateExpPage;
