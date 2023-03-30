import { Component } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent {
  videoUrl: string = 'assets/advertisement.mp4';
  audioUrl: string = 'assets/advertisement-audio.mp3';
}
