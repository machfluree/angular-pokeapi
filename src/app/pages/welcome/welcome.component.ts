import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  allPokemon: any[] = [];
  eachPokemon: any[] = [];
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit():void {
    this.getPokemon();
    console.log(this.allPokemon);
  }

  getPokemon(): void {
    var allPokemon: any[] = [];
    var eachPokemon: any[] = [];
    this.http.get<any>("https://pokeapi.co/api/v2/pokemon/").subscribe(
      response=>{
        var initArray = response.results;
        initArray.forEach((element: {name: any, url: any; pokeDetails: any[] }) => {
          this.http.get<any>(element.url).subscribe(
            wewe => {
              element.pokeDetails = wewe;
              this.allPokemon.push(element);
            }
          );
        });
      }
    );
  }
}
