package com.example.springbootmonolith.Service;

import com.example.springbootmonolith.Model.Stats;

public interface StatService {

    public Iterable<Stats> listStats();

    public Stats recordStats(Stats newStats, String username);


}
