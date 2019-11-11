package com.example.artcartapi.Service;

import com.example.artcartapi.Config.IAuthentication;
import com.example.artcartapi.Model.Item;
import com.example.artcartapi.Model.User;
import com.example.artcartapi.Repository.ItemRepository;
import com.example.artcartapi.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

@Service
public class ItemServiceImpl implements ItemService {

    @Autowired
    ItemRepository itemRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    UserService userService;

    @Autowired
    private IAuthentication authImpl;

    @Override
    public Iterable<Item> listItems() {
        return itemRepository.findAll();
    }

    @Override
    public Item postItem(Item newItem){
        Authentication auth = authImpl.getAuthentication();
        User user = userService.getUser(auth.getName());
        newItem.setUser(user);
        user.getItems();

        return itemRepository.save(newItem);
    }
}
