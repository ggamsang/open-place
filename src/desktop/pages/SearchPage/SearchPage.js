import ClientTemplate from "desktop/clientTemplate";
import SearchContainer from "desktop/containers/SearchContainer";
import GetQueryString from "modules/GetQueryString";
// <Route path="search/:category/:sort/:keyword" element={<SearchPage />} />;

function SearchPage() {
  
  return (
    <ClientTemplate>
      <SearchContainer
        sort={GetQueryString("sort")}
        category={GetQueryString("category")}
        keyword={GetQueryString("keyword")}
      />
    </ClientTemplate>
  );
}

export default SearchPage;
