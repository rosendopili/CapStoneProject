package com.example.springbootmonolith.Model;


import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;

@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
@Entity
@Table( name = "stats")
public class Stats {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private Long points;

    @Column
    private Long wins;

    @Column
    private Long losses;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public Stats() {}

    public Long getId(){ return id; }
    public void setId(Long id) { this.id = id; }

    public Long getPoints() { return points; }
    public void setPoints(Long points) { this.points = points; }

    public Long getWins() { return wins; }
    public void setWins(Long wins) { this.wins = wins; }

    public Long getLosses() { return losses; }
    public void setLosses(Long losses) { this.losses = losses; }

    public User getUser() { return user; }
    public void setUser (User user) {this.user = user; }

}
