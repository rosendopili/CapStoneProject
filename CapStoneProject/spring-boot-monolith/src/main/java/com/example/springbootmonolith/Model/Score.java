package com.example.springbootmonolith.Model;


import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;

@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
@Entity
@Table( name = "score")
public class Score {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private Long score;

    @Column
    private Long wins;

    @Column
    private Long losses;

    @JsonIgnore
    @ManyToOne (fetch = FetchType.LAZY,
                cascade = {CascadeType.DETACH,
                CascadeType.MERGE, CascadeType.REFRESH})
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    public Score() {}

    public Long getId(){ return id; }
    public void setId(Long id) { this.id = id; }

    public Long getScore() { return score; }
    public void setScore(Long score) { this.score = score; }

    public Long getWins() { return wins; }
    public void setWins(Long wins) { this.wins = wins; }

    public Long getLosses() { return losses; }
    public void setLosses(Long losses) { this.losses = losses; }

    public User getUser() { return user; }
    public void setUser (User user) {this.user = user; }

}
