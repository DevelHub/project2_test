import * as types from '../actions/itemsByTypeActions';

const initialState = {
    items: []
}

export default function (state = initialState, action) 
{
    const type = action.type;
    if(type === types.SET_ITEMS)
    {
        return {
            ...state,
            items: action.items
        }
    }
    else
    {
        return state;
    }
}