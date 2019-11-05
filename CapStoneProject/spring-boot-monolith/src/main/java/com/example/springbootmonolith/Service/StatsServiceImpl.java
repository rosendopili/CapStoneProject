package com.example.springbootmonolith.Service;

import com.example.springbootmonolith.Model.Stats;
import com.example.springbootmonolith.Model.User;
import com.example.springbootmonolith.Repository.StatsRepository;
import com.example.springbootmonolith.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StatsServiceImpl implements StatsService {

    @Autowired
    StatsRepository statsRepository;

    @Autowired
    UserRepository userRepository;

    @Override
    public Iterable<Stats> listStats() {
        return statsRepository.findAll();
    }

    @Override
    public Stats recordStats(Stats newStats, String username) {
        User user = userRepository.findByUsername(username);
        newStats.setUser(user);

        return statsRepository.save(newStats);
    }
}
