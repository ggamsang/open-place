import React from "react";
import * as styled from "./styles";
import PageLayout from "../../components/desktop/PageLayout";
import ExpList from "../../components/desktop/ExpList";
import ListPageFilter from "src/components/desktop/ListPageFilter";
import { useState } from "react";
import { useParams } from "react-router-dom";

const ListPage = ({ type }) => {
  const params = useParams();
  const [filter, setFilter] = useState({ sort: "", tags: [] });
  const handleChange = (data) => setFilter({ ...filter, ...data });

  return (
    <PageLayout>
      <styled.ListWrapper>
        {/* filter */}
        <ListPageFilter onChange={handleChange} />
        {/* list */}
        <styled.ListContainer>
          <ExpList type={type} {...filter} />
        </styled.ListContainer>
      </styled.ListWrapper>
    </PageLayout>
  );
};

export default ListPage;
