package com.example.springbootmonolith.Service;

import com.example.springbootmonolith.Config.IAuthentication;
import com.example.springbootmonolith.Model.Stats;
import com.example.springbootmonolith.Model.User;
import com.example.springbootmonolith.Repository.StatsRepository;
import com.example.springbootmonolith.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

@Service
public class StatsServiceImpl implements StatsService {

    @Autowired
    StatsRepository statsRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    UserService userService;

    @Autowired
    private IAuthentication authImpl;

    @Override
    public Iterable<Stats> listStats() {
        return statsRepository.findAll();
    }

    @Override
    public Stats recordStats(Stats newStats){
        Authentication auth = authImpl.getAuthentication();
        User user = userService.getUser(auth.getName());
        newStats.setUser(user);
        user.addStats(newStats);

        return statsRepository.save(newStats);
    }
}
