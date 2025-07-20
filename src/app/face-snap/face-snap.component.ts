import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { CurrencyPipe, DatePipe, DecimalPipe, NgClass, NgStyle, PercentPipe, UpperCasePipe } from '@angular/common';
import { FaceSnapService } from '../services/face-snaps-service';

@Component({
  selector: 'app-face-snap',
  imports: [
    NgStyle ,NgClass,UpperCasePipe
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})

export class FaceSnapComponent implements OnInit {
  
  constructor(private faceSnapService:FaceSnapService){

  }

  @Input() faceSnap!:FaceSnap;
  snapbutonnText!:string;
  userhasSnap!:boolean;
  myprice = 336.75;

  ngOnInit(): void {}

  onSnap():void{ 

  if(this.userhasSnap){
    this.unSnap()
  }else{
    this.snap()
  } 
 }

 unSnap(): void {
    this.snapbutonnText = "Oops, un Snap";
    this.faceSnapService.unsnapFaceSnapById(this.faceSnap.id,"unsnap")
    this.userhasSnap = false; 
}

 snap(): void {
    this.faceSnapService.snapFaceSnapById(this.faceSnap.id,'snap');
    this.snapbutonnText = "Oh Snap";
    this.userhasSnap = true; 
}

}
