package com.example.songsapi.Service;

import com.example.songsapi.Model.Song;

public interface SongService {

    public Song searchByTitle(String title);

    public Song searchByArtist(String artist);

    public Song uploadSong(Song song);

    public Iterable<Song> listSongs();

}
