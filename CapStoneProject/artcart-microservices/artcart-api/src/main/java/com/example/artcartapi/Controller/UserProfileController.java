package com.example.artcartapi.Controller;

import com.example.artcartapi.Model.UserProfile;
import com.example.artcartapi.Service.UserProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/profile")
public class UserProfileController {

    @Autowired
    private UserProfileService userProfileService;

    /**
     * For testing purposes
     * @param userProfileService
     */
    public void setUserProfileService(UserProfileService userProfileService){
        this.userProfileService = userProfileService;
    }


    @GetMapping("/get/{userId}")
    public UserProfile getUserProfile(String username, @PathVariable Long userId) {
        return userProfileService.getUserProfile(userId, username);
    }

    @PostMapping("/post/{username}")
    public UserProfile createUserProfile(@PathVariable String username, @RequestBody UserProfile newProfile) throws Exception{
        return userProfileService.createUserProfile(username, newProfile);
    }

}
