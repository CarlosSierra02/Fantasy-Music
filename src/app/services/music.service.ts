import { Injectable } from '@angular/core';
import * as dataArtists from "./artists.json";

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  header = {'Access-Control-Request-Headers': '*'};
  //, 'Authorization': 'Bearer BQDA-F7a3y7sSrmsdiYoJ53eaYtQl8qNKLownB0yIa452PkThAwphVzCppjuVbZ4v_Km4ERCtmAmgTnJPaNRTHFFa-1Uw0FTLOWsr8pnAuraQKOcmjdW7Yfhju0P-1sldakd6-j__Sl12yRgYcFN50y3ys8VifxzuujIkHpYr8cq5G5q'

  constructor() { }

  getArtists() {
    return fetch("https://music-back-seminario.herokuapp.com/artists", { mode: 'cors' , headers: this.header}).then(
      (response) => response.json()
    );
  }

  getArtistsFromJson() {
    return dataArtists;
  }

  getAlbums() {
    return fetch("https://music-back-seminario.herokuapp.com/albums", { mode: 'cors' , headers: this.header} ).then(
      (albums) => albums.json()
    );
  }

  getArtistTracks(artist_id) {
    return fetch("https://music-back-seminario.herokuapp.com/tracks", { mode: 'cors' , headers: this.header} ).then(
      (albums) => albums.json()
    );
  }
}