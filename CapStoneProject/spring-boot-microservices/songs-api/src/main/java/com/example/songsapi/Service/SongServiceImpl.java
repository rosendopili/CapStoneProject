package com.example.songsapi.Service;

import com.example.songsapi.Model.Song;
import com.example.songsapi.Repository.SongRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SongServiceImpl implements SongService{

    @Autowired
    SongRepository songRepository;


    @Override
    public Song searchByTitle(String title) {
        return songRepository.findBySongTitle(title);
    }

    @Override
    public Song searchByArtist(String artist) {
        return songRepository.findBySongArtist(artist);
    }

    @Override
    public Song uploadSong(Song song) {
        return songRepository.save(song);
    }

    @Override
    public Iterable<Song> listSongs() {
        return songRepository.findAll();
    }
}
