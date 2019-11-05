package com.example.songsapi.Repository;

import com.example.songsapi.Model.Song;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SongRepository extends CrudRepository<Song, Long> {

    public Song findBySongTitle(String title);

    public Song findBySongArtist(String artist);
}
