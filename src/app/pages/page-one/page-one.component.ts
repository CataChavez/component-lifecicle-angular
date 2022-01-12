import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styles: [
  ]
})
export class PageOneComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  
  name: string = 'kata';
  seconds: number = 0;
  timerSubscription: Subscription = new Subscription;
  

  constructor() { 
    console.log('constructor')
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }
  ngDoCheck(): void {
    console.log(' ngDoCheck');
  }
  ngAfterContentInit(): void {
    console.log(' ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log(' ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log(' ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log(' ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log(' ngOnDestroy');
    this.timerSubscription.unsubscribe();
    console.log('se destruye el intervalo');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.timerSubscription = interval(1000) //este es un intervalo de tiempo de rxjs que ya es un observable 
      //.subscribe(i => console.log(i));
      .subscribe(i => this.seconds = i);
  }

  save() {
    console.log('al hacer click se ejecuta: DoCheck, AfterContentChecked, AfterViewChecked');
  }

}
