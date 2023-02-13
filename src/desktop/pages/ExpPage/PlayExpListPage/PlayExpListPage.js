import { useParams } from "react-router";
import ClientTemplate from "desktop/clientTemplate";
import PlayExpListContainer from "desktop/containers/ListContainer/ExpListContainer/PlayExpListContainer";

function ExpListPage() {
  let params = useParams();

  return (
    <ClientTemplate>
      <PlayExpListContainer sort={params.sort} keyword={params.keyword} />
    </ClientTemplate>
  );
}

// import React, { useState, useEffect } from "react";
// import { useLocation, useHistory } from "react-router-dom";

// export default function App() {
//   const [params, setParams] = useState(null);
//   const location = useLocation();
//   const history = useHistory();

//   useEffect(() => {
//     const queryParams = new URLSearchParams(location.search);
//     const singleValue = queryParams.get("key");
//     if (!singleValue) return;
//     queryParams.delete("key");
//     history.replace({
//       search: queryParams.toString(),
//     });
//     setParams(singleValue);
//   }, []);
//   return <h1>app</h1>;
// }
export default ExpListPage;
