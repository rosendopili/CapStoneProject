package com.example.songsapi.Controller;

import com.example.songsapi.Model.Song;
import com.example.songsapi.Service.SongService;
import com.netflix.discovery.converters.Auto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/songs")
public class SongController {

    @Autowired
    SongService songService;

    @GetMapping("/search/title")
    public Song searchByTitle(String title){
        return songService.searchByTitle(title);
    }

    @GetMapping("/search/artist")
    public Song searchByArtist(String artist){
        return songService.searchByArtist(artist);
    }

    @GetMapping("/listall")
    public Iterable<Song> listSOngs(){
        return songService.listSongs();
    }

    @PostMapping("/add")
    public Song uploadSong(Song song){
        return songService.uploadSong(song);
    }

}
