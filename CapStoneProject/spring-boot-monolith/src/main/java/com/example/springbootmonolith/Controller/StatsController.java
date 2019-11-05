package com.example.springbootmonolith.Controller;

import com.example.springbootmonolith.Model.Stats;
import com.example.springbootmonolith.Service.StatsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class StatsController {

    @Autowired
    public StatsService statsService;

    @GetMapping("stats/list")
    public Iterable<Stats> listStats() {
        return statsService.listStats();
    }

    @PostMapping("/stats")
    public Stats recordStats(@RequestBody Stats newStats, String username) {
        return statsService.recordStats(newStats, username);
    }

}
