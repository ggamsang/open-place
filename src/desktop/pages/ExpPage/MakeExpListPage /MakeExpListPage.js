import { useParams } from "react-router";
import ClientTemplate from "desktop/clientTemplate";
import MakeExpListContainer from "desktop/containers/ListContainer/ExpListContainer/MakeExpListContainer";

function MakeExpListPage() {
  let params = useParams();

  return (
    <ClientTemplate  >
      <MakeExpListContainer sort={params.sort} keyword={params.keyword} />
    </ClientTemplate>
  );
}
export default MakeExpListPage;
