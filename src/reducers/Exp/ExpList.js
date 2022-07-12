import { type } from "@testing-library/user-event/dist/type";
import * as types from "actions/ActionTypes";
import update from "react-addons-update";

const initialstate = {
  ExpList:{status:"INIT"},
  status:{
    exp_list:[],
    exp_list_added:[],
  }
}
export function ExpList(state,action){
    if(typeof state === "undefined"){
      state = initialstate;
    }

    switch(action.type){
        // case types.GET_EXP_LIST:
        //     return update(state, {
        //         ExpList: { status: {$set:"WAITING"} },
        //     })
        // case type.GET_EXP_LIST_ZERO:
        //     console.log("--",action)
        //     return update(state, {
        //         ExpList: { status:{$set:"CLEAR"} },
        //         status: {
        //             exp_list: { $set: action.list },
        //             exp_list_added: { $set: action.list_added }
        //         }
        //     })        
        // case types.GET_EXP_LIST_SUCCESS:
        //     return update(state, {
        //         ExpList: { status:{$set:"SUCCESS"} },
        //         status: {
        //             exp_list: { $set: action.list },
        //             exp_list_added: { $push: action.list }
        //         }
        //     })
        // case types.GET_EXP_LIST_FAILURE:
        //     return update(state, {
        //         ExpList: { status: {$set:"FAILURE"} },
        //         status: {
        //             exp_list: { $set: action.list },
        //             exp_list_added: { $set: action.list_added }
        //         }
        //     })
        case types.GET_EXP_LIST:
            return update(state, {
                ExpList: { status: {$set:"WAITING"} },
            })
        case types.GET_EXP_LIST_ZERO:
            return update(state, {
                ExpList: { status:{$set:"CLEAR"} },
                status: {
                    exp_list: { $set: action.list },
                    exp_list_added: { $set: action.list}
                }
            })        
        case types.GET_EXP_LIST_SUCCESS:
            return update(state, {
                ExpList: { status:{$set:"SUCCESS"} },
                status: {
                    exp_list: { $set: action.list },
                    exp_list_added: { $push: action.list }
                }
            })
        case types.GET_EXP_LIST_FAILURE:
            return update(state, {
                ExpList: { status: {$set:"FAILURE"} },
                status: {
                    exp_list: { $set: action.list },
                    exp_list_added: { $set: action.list}
                }
            })
      default:
        return state;
    }
}