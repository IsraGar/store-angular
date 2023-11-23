import { Component, Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({required: true}) duration: number = 0;
  @Input({required: true}) message: string = '';

  constructor(){
    //Before render, no async
    //Once
    console.log('Constructor');
    console.log('-'.repeat(10)); 
  }

  ngOnChanges(changes: SimpleChanges){
    //Before and during render
    console.log('ngOnChanges');
    console.log(changes);
    console.log('-'.repeat(10));
  }

  ngOnInit(){
    //Before render, async
    //Once
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('duration => ' + this.duration);
    console.log('message => ' + this.message);
  }

  ngAfterViewInit(){
    //After render
    //Hijos ya fueron renderizados
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
  }

  ngOnDestroy(){
    console.log('ngOnDestroy');
    console.log('-'.repeat(10));
  }
}
