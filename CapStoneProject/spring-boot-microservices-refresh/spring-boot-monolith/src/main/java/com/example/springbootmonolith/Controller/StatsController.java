package com.example.springbootmonolith.Controller;

import com.example.springbootmonolith.Config.IAuthentication;
import com.example.springbootmonolith.Model.Stats;
import com.example.springbootmonolith.Service.StatsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/stats")
public class StatsController {

    @Autowired
    public StatsService statsService;

    @Autowired
    IAuthentication authImpl;

    @GetMapping("/list")
    public Iterable<Stats> listStats() {
        return statsService.listStats();
    }

    @PostMapping
    public Stats recordStats(@RequestBody Stats newStats) {
        return statsService.recordStats(newStats);
    }

}
