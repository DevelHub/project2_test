import store from './store';
import * as pActions from '../redux/actions/productActions';
import { environment } from '../../environment';

function rawToFormatted(raw)
{
  let item = {};
  item["itemId"] = raw.id;
  item["name"] = raw.name;
  item["price"] = raw.price;
  item["description"] = raw.description;
  item["company"] = raw.company.companyName;
  item["companyId"] = raw.company.id;
  item["companyUserId"] = raw.company.userId;
  item["gender"] = raw.gender;
  item["status"] = raw.status;
  return item;
}

export function fetchItems()
{
    fetch(environment.context + '/item-type', {
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
          item["type"] = type;
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
    fetch(environment.context + 'item/update-status', {
        body: JSON.stringify(item),
        headers: {
            "Content-Type":"application/json"
        },
        method: "PATCH"
    })
    .then(resp => {
        if(resp.status === 200 || resp.status === 201)
        {
          return resp.json();
        }
        throw Error("Could not update item status");
    })
    .then(raw => {
      store.dispatch(pActions.setCurrentProduct(rawToFormatted(raw)));
    })
}

export function updateItemPrice(itemId, price)
{
  const item = {
    id: itemId,
    price: price
  }
  fetch(environment.context + 'item/update-price', {
    body: JSON.stringify(item),
    headers: {
      "Content-Type":"application/json"
    },
    method: "PATCH"
  })
  .then(resp => {
    if(resp.status === 200 || resp.status === 201)
    {
      return resp.json();
    }
    throw Error("Could not update item price");
  })
  .then(raw => {
    store.dispatch(pActions.setCurrentProduct(rawToFormatted(raw)));
  })
}

export function updateItemDescription(itemId, description)
{
  const item = {
    id: itemId,
    description: description
  }
  fetch(environment.context + 'item/update-description', {
    body: JSON.stringify(item),
    headers: {
      "Content-Type":"application/json"
    },
    method: "PATCH"
  })
  .then(resp => {
    if(resp.status === 200 || resp.status === 201)
    {
      return resp.json();
    }
    throw Error("Could not update item description");
  })
  .then(raw => {
    store.dispatch(pActions.setCurrentProduct(rawToFormatted(raw)));
  })
}

export function updateItemName(itemId, name)
{
  const item = {
    id: itemId,
    name: name
  }
  fetch(environment.context + 'item/update-name', {
    body: JSON.stringify(item),
    headers: {
      "Content-Type":"application/json"
    },
    method: "PATCH"
  })
  .then(resp => {
    if(resp.status === 200 || resp.status === 201)
    {
      return resp.json();
    }
    throw Error("Could not update item name");
  })
  .then(raw => {
    store.dispatch(pActions.setCurrentProduct(rawToFormatted(raw)));
  })
}

export function insertItem(item)
{
  fetch(environment.context + 'item/add', {
    body: JSON.stringify(item),
    headers: {
      "Content-Type":"application/json"
    },
    method: "POST"
  })
  .then(resp => {
    if(resp.status === 200)
    {
      return resp.json()
      
    }
    
    throw Error("Could not create new item");
  })
  .then(resp =>{
    fetchItems();
  })
}