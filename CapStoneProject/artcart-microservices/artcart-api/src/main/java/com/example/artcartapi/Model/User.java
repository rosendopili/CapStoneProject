package com.example.artcartapi.Model;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property ="id")
@Entity
@Table (name = "users")
public class User{
    /**
     * setting users datatable.
     **/
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true,
            nullable = false)
    private String username;

    @Column(unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    @JsonIgnore
    @OneToOne (mappedBy ="user",
            fetch = FetchType.LAZY,
            optional = false,
            cascade = CascadeType.ALL)
    private UserProfile userProfile;

    @JsonIgnore
    @OneToMany (mappedBy = "user",
            cascade= {CascadeType.ALL})
    private List<Item> items;

    public List<Item> addItem (Item item){
        if (this.items == null)
            this.items = new ArrayList<>();
        items.add(item);

        return this.items;
    }

    public User(){}

    public List<Item> getItems() { return items;}
    public void setItems(List<Item> items) {this.items = items;}

    public Long getId () {return id;}
    public void setId (Long id) {this.id = id;}

    public String getUsername () {return username;}
    public void setUsername (String username) {this.username = username;}

    public String getEmail () {return email;}
    public void setEmail (String email) {this.email = email;}

    public String getPassword () {return password;}
    public void setPassword (String password) {this.password = password;}

    public UserProfile getUserProfile() { return userProfile; }
    public void setUserProfile( UserProfile userProfile ) {this.userProfile = userProfile; }
}
