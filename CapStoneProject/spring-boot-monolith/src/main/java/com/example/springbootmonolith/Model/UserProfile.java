package com.example.springbootmonolith.Model;


import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.awt.*;
import java.sql.Blob;

@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
@Entity
@Table(name = "user_profile")
public class UserProfile {
    /**
     * setting userProfile datatable.
     */
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String location;

    @Column
    private String bio;

    @Column
    private Blob profilePic;

    /**
     * userProfile is referenced by user table user_profile_id join column.
     */
    //CascadeType.MERGE allows for the columns to join.
    // CascadeType.ALL creates functionality redundancies.
    // Original error was "detached entity passed to persist."
    @JsonIgnore
    @OneToOne (fetch = FetchType.LAZY)
    @JoinColumn (name = "user_id")
    private User user;

    public UserProfile() {}

    public User getUser(){return user;}

    public void setUser(User user){ this.user = user;}

    public Long getId(){
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public Blob getProfilePic() { return profilePic;}

    public void setProfilePic(Blob profilePic) { this.profilePic = profilePic; }
}
