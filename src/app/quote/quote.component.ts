import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote('kevin','leornado-decapri','the book of leave will save lives',new Date(2017,12,12)),
    new Quote('Brian','leornado-decapri','leave only in spirit',new Date(3,12,2003)),

  ]

  
  deleteQuote(isComplete, index){
    if(isComplete){
      let toDelete = confirm(`Are you sure you want to delete quote published by ${this.quotes[index].publisher}?`)
      if (toDelete){
        this.quotes.splice(index,1)
      }
    }

  }

  addNewQuote(quote){
    quote.days = new Date(quote.days)
    this.quotes.push(quote)
  }
  
  constructor() { }

  ngOnInit() {
  }

}

