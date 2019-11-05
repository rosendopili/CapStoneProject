package com.example.springbootmonolith.Service;

import com.example.springbootmonolith.Model.Score;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ScoreServiceImpl implements ScoreService{

    @Autowired
    ScoreService scoreService;

    @Override
    public Iterable<Score> listScores() {
        return scoreService.listScores();
    }
}
