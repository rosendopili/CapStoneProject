package com.example.springbootmonolith.Model;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
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

    @OneToMany (mappedBy = "user",
            cascade= {CascadeType.MERGE, CascadeType.REFRESH,CascadeType.REMOVE})
    private List<Score> scores;

    public List<Score> addScore (Score score){
        if (scores == null)
            scores = new ArrayList<>();
        scores.add(score);

        return scores;
    }

    public User(){}

    public List<Score> getScores() { return scores;}
    public void setScores(List<Score> scores) {this.scores = scores;}

    public Long getId () {return id;}
    public void setId (Long id) {this.id = id;}

    public String getUsername () {return username;}
    public void setUsername (String username) {this.username = username;}

    public String getEmail () {return email;}
    public void setEmail (String email) {this.email = email;}

    public String getPassword () {return password;}
    public void setPassword (String password) {this.password = password;}
}
