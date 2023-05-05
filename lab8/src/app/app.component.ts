import { Component, AfterViewInit, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable, Subject,  from, fromEvent, of, map, debounceTime, sampleTime, distinctUntilChanged, filter,  skip, startWith, take, tap, delay } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit{
  counter = 1
  subject$ = new Subject<number>()
  // userSearch$ = new Subject<string>()
  userSearchX$!: Observable<any>
  userSearchY$!: Observable<any>
  searchXInterval$!: Observable<number>
  searchYInterval$!: Observable<number>
  searchXNotMoved$!: Observable<number>
  searchYNotMoved$!: Observable<number>
  voting$!: Observable<any>
  per1$!: Observable<string>
  per2$!: Observable<string>
  per3$!: Observable<string>

  @ViewChild('vote1') searchInput1!: ElementRef<HTMLInputElement>
  @ViewChild('vote2') searchInput2!: ElementRef<HTMLInputElement>
  @ViewChild('vote3') searchInput3!: ElementRef<HTMLInputElement>

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    this.userSearchX$ = fromEvent<MouseEvent>(document, 'click').pipe(
      map(value => value.clientX)
    )
    this.userSearchY$ = fromEvent<MouseEvent>(document, 'click').pipe(
      map(value => value.clientY)
    )
    // this.per1$ = fromEvent(this.searchInput1.nativeElement, 'input').pipe(
    //   map(ev => (ev.target as HTMLInputElement).value)
    // )
    this.per1$ = of('za').pipe(
      filter(value => value === 'za' || value === 'przeciw'),
      delay(1000),
    )
    this.per2$ = fromEvent(this.searchInput2.nativeElement, 'input').pipe(
      map(ev => (ev.target as HTMLInputElement).value)
    )
    this.per3$ = fromEvent(this.searchInput3.nativeElement, 'input').pipe(
      map(ev => (ev.target as HTMLInputElement).value)
    )
    this.subToUserSearchInput()

  }
  subToUserSearchInput() {
    this.searchXInterval$ = this.userSearchX$.pipe(
      sampleTime(1000),
      distinctUntilChanged(),
    )
    this.searchYInterval$ = this.userSearchY$.pipe(
      sampleTime(1000),
      distinctUntilChanged(),
    )
    this.searchXNotMoved$ = this.userSearchX$.pipe(
      filter(value => value >= 500),
      debounceTime(2000)
    )
    this.searchYNotMoved$ = this.userSearchY$.pipe(
      filter(value => value >= 500),
      debounceTime(2000)
    )
    this.per1$ = this.per1$.pipe(
      filter(value => value === 'za' || value === 'przeciw'),
      delay(1000),
      tap(value => console.log(value))
    )
    this.per2$ = this.per2$.pipe(
      filter(value => value === 'za' || value === 'przeciw'),
      delay(2000),
      tap(value => console.log(value))
    )
    this.per3$ = this.per3$.pipe(
      filter(value => value === 'za' || value === 'przeciw'),
      delay(3000),
      tap(value => console.log(value))
    )
  }
}
