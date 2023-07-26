import React from "react";
import SearchContainer from "containers/Commons/SearchContainer";
import ClientTemplate from "templates/ClientTemplate";
import GetQueryString from "modules/GetQueryString";

class SearchPage extends React.Component {
  render() {
    // const params = useParams();
    // console.log(params);
    console.log(GetQueryString("keyword"));
    // console.log(this.props.match.params.type, this.props.match.params.sort, this.props.match.params.keyword);
    return (
      <ClientTemplate>
        <SearchContainer
          keyword={GetQueryString("keyword")}

          // history={this.props.history}
          // keyword={params.keyword}
          // type={this.props.match.params.type ? this.props.match.params.type : null}
          // sort={this.props.match.params.sort ? this.props.match.params.sort : null}
          // keyword={this.props.match.params.keyword ? this.props.match.params.keyword : null}
        />
      </ClientTemplate>
    );
  }
}

export default SearchPage;
