package com.example.springbootmonolith.Repository;

import com.example.springbootmonolith.Model.Stats;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StatsRepository extends CrudRepository<Stats, Long> {

}
