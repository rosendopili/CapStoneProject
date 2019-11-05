package com.example.springbootmonolith.Controller;

import com.example.springbootmonolith.Model.Stats;
import com.example.springbootmonolith.Service.StatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class StatsController {

    @Autowired
    public StatService statService;

    @GetMapping("stats/list")
    public Iterable<Stats> listStats() {
        return statService.listStats();
    }

    @PostMapping("/stats")
    public Stats recordStats(@RequestBody Stats newStats, String username) {
        return statService.recordStats(newStats, username);
    }

}
