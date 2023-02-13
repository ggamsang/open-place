import { useParams } from "react-router";
import ClientTemplate from "desktop/clientTemplate";
import LearnExpListContainer from "desktop/containers/ListContainer/ExpListContainer/LearnExpListContainer";

function LearnExpListPage() {
  let params = useParams();

  return (
    <ClientTemplate  >
      <LearnExpListContainer sort={params.sort} keyword={params.keyword} />
    </ClientTemplate>
  );
}
export default LearnExpListPage;
