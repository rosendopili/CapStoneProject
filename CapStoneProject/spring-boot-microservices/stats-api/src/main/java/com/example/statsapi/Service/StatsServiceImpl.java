package com.example.statsapi.Service;

import com.example.statsapi.Model.Stats;
import com.example.statsapi.Repository.StatsRepository;
import com.example.usersapi.model.User;
import com.example.usersapi.repository.UserRepository;
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
