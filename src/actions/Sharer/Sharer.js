
export const getSharerRequest = (user_id) => {
    return dispatch =>{
        dispatch(getSharer());
        const url = `${host}/sharer/detail/${user_id}`;
        return fetch(url, {
          headers: { "Content-Type": "application/json" }, method: "GET"
        })
          .then(res=>res.json())
          .then(data=>data&&dispatch(getSharerSuccess(data?data:null)))
          .catch(err=>dispatch(getSharerFailure(err)))
    }
  };
  const getSharer = () => ({ type: types.GET_SHARER_DETAIL });
  const getSharerSuccess = (data) => ({ type: types.GET_SHARER_DETAIL_SUCCESS,sharer:data });
  const getSharerFailure = (err) => ({ type: types.GET_SHARER_DETAIL_FAILURE,sharer:null,err:err });