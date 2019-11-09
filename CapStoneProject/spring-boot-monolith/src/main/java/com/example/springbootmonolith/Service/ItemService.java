package com.example.springbootmonolith.Service;

import com.example.springbootmonolith.Model.Item;

public interface ItemService {

    public Iterable<Item> listItems();

    public Item postItem(Item newItem);


}
