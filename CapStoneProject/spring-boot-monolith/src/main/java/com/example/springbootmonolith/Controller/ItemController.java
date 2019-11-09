package com.example.springbootmonolith.Controller;

import com.example.springbootmonolith.Config.IAuthentication;
import com.example.springbootmonolith.Model.Item;
import com.example.springbootmonolith.Service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/items")
public class ItemController {

    @Autowired
    public ItemService itemService;

    @Autowired
    IAuthentication authImpl;

    @GetMapping("/list")
    public Iterable<Item> listItems() {
        return itemService.listItems();
    }

    @PostMapping
    public Item postItem(@RequestBody Item newItem) {
        return itemService.postItem(newItem);
    }

}
