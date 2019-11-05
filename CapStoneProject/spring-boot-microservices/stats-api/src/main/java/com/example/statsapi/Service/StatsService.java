package com.example.statsapi.Service;


import com.example.statsapi.Model.Stats;

public interface StatsService {

    public Iterable<Stats> listStats();

    public Stats recordStats(Stats newStats, String username);


}
