package com.example.artcartapi.Service;

import com.example.artcartapi.Model.UserProfile;

public interface UserProfileService {

    /**
     *
     * @param username
     * @param newProfile
     * @return
     */
    public UserProfile createUserProfile(String username, UserProfile newProfile)throws Exception;

    /**
     *
     * @param userId, username
     * @return
     */
    public UserProfile getUserProfile(Long userId, String username);


}