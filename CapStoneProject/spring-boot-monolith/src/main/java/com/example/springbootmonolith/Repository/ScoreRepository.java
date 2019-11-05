package com.example.springbootmonolith.Repository;

import com.example.springbootmonolith.Model.Score;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ScoreRepository extends CrudRepository<Score, Long > {

}
