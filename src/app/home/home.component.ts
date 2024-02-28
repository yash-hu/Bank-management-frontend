import { Component, OnInit } from '@angular/core';
import { IInterestModel } from '../../Interfaces/IInterestModel';
import { InterestService } from '../Services/interest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  InterestList:IInterestModel[]=[];

  constructor(private interestService:InterestService){}

  getInterestList():void{
    this.interestService.getInterestRates().subscribe(
      (data)=>{
        this.InterestList=data;
      }
    )
  }

  ngOnInit(): void {
    this.getInterestList();
  }
}
