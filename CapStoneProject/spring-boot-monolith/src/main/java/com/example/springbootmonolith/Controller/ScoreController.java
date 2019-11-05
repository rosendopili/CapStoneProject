package com.example.springbootmonolith.Controller;

import com.example.springbootmonolith.Model.Score;
import com.example.springbootmonolith.Service.ScoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class ScoreController {

    @Autowired
    public ScoreService scoreService;

    @GetMapping("scores/list")
    public Iterable<Score> listScores() {
        return scoreService.listScores();
    }

    @PostMapping("{userId}/scores")
    public Score recordScore(@RequestBody Score newScore, String username) {
        return scoreService.recordScore(newScore, username);
    }

}
