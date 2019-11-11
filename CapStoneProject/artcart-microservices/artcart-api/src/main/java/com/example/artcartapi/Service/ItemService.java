package com.example.artcartapi.Service;

import com.example.artcartapi.Model.Item;

public interface ItemService {

    public Iterable<Item> listItems();

    public Item postItem(Item newItem);


}
