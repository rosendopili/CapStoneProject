package com.example.statsapi.Repository;

import com.example.statsapi.Model.Stats;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StatsRepository extends CrudRepository<Stats, Long> {

}