package com.example.springbootmonolith.Service;

import com.example.springbootmonolith.Model.Score;
import com.example.springbootmonolith.Model.User;
import com.example.springbootmonolith.Repository.ScoreRepository;
import com.example.springbootmonolith.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ScoreServiceImpl implements ScoreService{

    @Autowired
    ScoreRepository scoreRepository;

    @Autowired
    UserRepository userRepository;

    @Override
    public Iterable<Score> listScores() {
        return scoreRepository.findAll();
    }

    @Override
    public Score recordScore(Score newScore, String username) {
        User user = userRepository.findByUsername(username);
        newScore.setUser(user);

        return scoreRepository.save(newScore);
    }
}
