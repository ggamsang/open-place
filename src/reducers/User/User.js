import * as types from "actions/ActionTypes";
import update from "react-addons-update";

const initialtate = {
  User:{status:"INIT"},
  status:{
    user_detail:[],
  }
}
export function User(state,action){
    if(typeof state === "undefined"){
      state = initialtate;
    }

    // switch(action.type){
    //   case types.GET_TOP_ITEM_LIST_SUCCESS:
    //     return update(state,{
    //       TopList:{
    //         status:{$set:"SUCCESS"}
    //       },
    //       status:{
    //         itemList:{$set:action.TopList},
    //       }
    //     });
    //   case types.GET_TOP_ITEM_LIST_FAILURE:
    //     return update(state,{
    //       TopList:{
    //         status:{$set:"FAILURE"}
    //       },
    //       status:{
    //         ItemList:{$set:action.TopList}
    //       }
    //     });
    //   case types.GET_TOP_ITEM_LIST_CLEAR:
    //     return update(state,{
    //       TopList:{
    //         status:{$set:"SUCCESS"}
    //       },
    //       status:{
    //         ItemList:{$set:action.TopList}
    //       }
    //     });
    //   default:
    //     return state;
    // }
}