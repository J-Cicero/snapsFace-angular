import { Component,  OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { CurrencyPipe, DatePipe, DecimalPipe, NgClass, NgStyle, PercentPipe, UpperCasePipe } from '@angular/common';
import { FaceSnapService } from '../services/face-snaps-service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  imports: [
    NgStyle ,NgClass,UpperCasePipe,RouterLink
  ],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})

export class SingleFaceSnapComponent implements OnInit {
  
  constructor(private faceSnapService:FaceSnapService,private route:ActivatedRoute){ }

  faceSnap!:FaceSnap;
  snapbutonnText!:string;
  userhasSnap!:boolean;
  myprice = 336.75;

  ngOnInit(): void {
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.getFaceSnapsbyId(faceSnapId)
  }

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
