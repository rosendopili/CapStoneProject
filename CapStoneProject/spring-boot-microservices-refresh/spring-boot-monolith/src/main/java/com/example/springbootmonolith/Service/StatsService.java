package com.example.springbootmonolith.Service;

import com.example.springbootmonolith.Model.Stats;

public interface StatsService {

    public Iterable<Stats> listStats();

    public Stats recordStats(Stats newStats);


}
