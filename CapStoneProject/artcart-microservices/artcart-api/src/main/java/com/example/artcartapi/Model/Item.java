package com.example.artcartapi.Model;


import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.sql.Blob;

@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
@Entity
@Table( name = "inventory")
public class Item {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String itemName;

    @Column
    private String description;

    @Column
    private float price;

    @Column
    private String photo;

    @ManyToOne (fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private User user;

    public Item() {}

    public Long getId(){ return id; }
    public void setId(Long id) { this.id = id; }

    public String getItemName() { return itemName; }
    public void setItemName(String itemName) {this.itemName = itemName;}

    public String getDescription() { return description; }
    public void setDescription (String description) {this.description = description; }

    public String getPhoto() { return photo; }
    public void setPhoto(String photo) {this.photo = photo; }

    public User getUser() { return user; }
    public void setUser(User user) {this.user = user; }

    public float getPrice() { return price; }
    public void setPrice( float price ) {this.price = price; }
}
