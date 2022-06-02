import React from 'react'
import ClientTemplate from 'clientTemplate/ClientTemplate';
import { useParams } from 'react-router';

export const ExpDetailPage = () => {
    const params = useParams();
    return (<ClientTemplate>{params.id}: detail is here</ClientTemplate>)
}
