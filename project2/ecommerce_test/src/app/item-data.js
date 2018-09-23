import store from './store';
import * as pActions from '../redux/actions/productActions';


export function fetchItems()
{
    fetch("http://ec2-54-200-103-68.us-west-2.compute.amazonaws.com:3001/item-type", {
      headers: {
        "Content-Type":"application/json"
      },
      method: "GET"
    })
    .then(resp => {
      if(resp.status == 200)
      {
        return resp.json();
      }
      throw Error("Could not retrieve item groups");
    })
    .then(rawItems => {
      let formattedItems = {};
      let typesList = [];
      for(let t = 0; t < rawItems.length; t++)
      {
        const type = rawItems[t].type;
        typesList.push(type);
        formattedItems[type] = [];
        for(let i = 0; i < rawItems[t].item.length; i++)
        {
          let item = {};
          const ci = rawItems[t].item[i];
          item["itemId"] = ci.id;
          item["name"] = ci.name;
          item["company"] = ci.company.companyName;
          item["companyId"] = ci.company.id;
          item["companyUserId"] = ci.company.userId;
          item["description"] = ci.description;
          item["gender"] = ci.gender;
          item["price"] = ci.price;
          item["status"] = ci.status;
          formattedItems[type].push(item);
        }
      }
      store.dispatch(pActions.setAllProducts(formattedItems));
      store.dispatch(pActions.setTypesList(typesList));
    })    
}

export function updateItemStatus(itemId, status)
{
    const item = {
        id: itemId,
        status: status
    }
    fetch("http://ec2-54-200-103-68.us-west-2.compute.amazonaws.com:3001/item/updatestatus", {
        body: JSON.stringify(item),
        headers: {
            "Content-Type":"application/json"
        },
        method: "PATCH"
    })
    .then(resp => {
        if(resp.status === 200)
        {
          return;
        }
        throw Error("Could not update item status");
    })
}

export function updateItemPrice(itemId, price)
{
  const item = {
    id: itemId,
    price: price
  }
  fetch("http://ec2-54-200-103-68.us-west-2.compute.amazonaws.com:3001/item/updateprice", {
    body: JSON.stringify(item),
    headers: {
      "Content-Type":"application/json"
    },
    method: "PATCH"
  })
  .then(resp => {
    if(resp.status === 200)
    {
      return;
    }
    throw Error("Could not update item price");
  })
}

export function updateItemDescription(itemId, description)
{
  const item = {
    id: itemId,
    description: description
  }
  fetch("http://ec2-54-200-103-68.us-west-2.compute.amazonaws.com:3001/item/updatedescription", {
    body: JSON.stringify(item),
    headers: {
      "Content-Type":"application/json"
    },
    method: "POST"
  })
  .then(resp => {
    if(resp.status === 200)
    {
      return;
    }
    throw Error("Could not update item description");
  })
}

export function updateItemName(itemId, name)
{
  const item = {
    id: itemId,
    name: name
  }
  fetch("http://ec2-54-200-103-68.us-west-2.compute.amazonaws.com:3001/item/updatename", {
    body: JSON.stringify(item),
    headers: {
      "Content-Type":"application/json"
    },
    method: "PATCH"
  })
  .then(resp => {
    if(resp.status === 200)
    {
      return;
    }
    throw Error("Could not update item name");
  })
}