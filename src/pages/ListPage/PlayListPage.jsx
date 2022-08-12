import React from "react";
import { useParams } from "react-router-dom";
export function PlayListPage() {
    const { sort, keyword } = useParams();
    return (<React.Fragment>
        play-list-page<br />
        {sort}, {keyword}
    </React.Fragment>)
}