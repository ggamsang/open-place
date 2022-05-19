import React from 'react';
import ClientTemplate from 'clientTemplate/ClientTemplate';
import SearchContainer from "containers/SearchContainer"

class SearchPage extends React.Component {
  render() {
    return (
      <ClientTemplate i_dont_need_footer={true}>
        <SearchContainer history={this.props.history}
          type={this.props.match.params.type ? this.props.match.params.type : null}
          sort={this.props.match.params.sort ? this.props.match.params.sort : null}
          keyword={this.props.match.params.keyword ? this.props.match.params.keyword : null} />

        {/* ... */}
      </ClientTemplate>
    )
  }
}

export default SearchPage;
