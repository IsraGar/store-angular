import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import WaveSurfer from 'wavesurfer.js';

@Component({
  selector: 'app-wave-audio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wave-audio.component.html',
  styleUrl: './wave-audio.component.css'
})
export class WaveAudioComponent {

  @Input({required: true}) audioUrl: string = '';
  @ViewChild('wave') container!: ElementRef;

  ngAfterViewInit(){
    WaveSurfer.create({
      url: this.audioUrl,
      container: this.container.nativeElement
    });
  }
}
