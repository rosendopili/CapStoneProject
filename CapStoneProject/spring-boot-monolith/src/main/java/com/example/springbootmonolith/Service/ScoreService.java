package com.example.springbootmonolith.Service;

import com.example.springbootmonolith.Model.Score;

public interface ScoreService {

    public Iterable<Score> listScores();

    public Score recordScore(Score newScore, String username);


}
