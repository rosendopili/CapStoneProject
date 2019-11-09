package com.example.springbootmonolith.Service;

import com.example.springbootmonolith.Model.UserProfile;

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