import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  loading: boolean;

  error: boolean;
  errorMessage: string;

  newSongs: any[] = [];

  constructor(private spotify: SpotifyService) {
    this.loading = true;
    this.error = false;
    this.spotify.getNewReleases().subscribe(
      (data: any) => {
        this.newSongs = data;
        this.loading = false;
      },
      (errorService) => {
        this.loading = false;
        this.error = true;
        console.log(errorService);
        this.errorMessage = errorService.error.error.message;
      }
    );
  }
}
