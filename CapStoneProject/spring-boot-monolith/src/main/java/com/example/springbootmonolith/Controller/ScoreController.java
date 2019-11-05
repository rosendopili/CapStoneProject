package com.example.springbootmonolith.Controller;

import com.example.springbootmonolith.Model.Score;
import com.example.springbootmonolith.Service.ScoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ScoreController {

    @Autowired
    public ScoreService scoreService;

    @GetMapping("scores/list")
    public Iterable<Score> listScores() {
        return scoreService.listScores();
    }

}
