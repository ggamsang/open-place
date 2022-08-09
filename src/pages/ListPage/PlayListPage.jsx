import React from "react";
import { useParams } from "react-router-dom";

export function PlayListPage() {
    const params = useParams();
    return (<React.Fragment>
        play-list-page<br />
        {params.sort}, {params.keyword}
    </React.Fragment>)
}