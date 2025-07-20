import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";
import { SnapType } from "../models/snap-type.type";

@Injectable({
    providedIn:'root'
})
export class FaceSnapService{
    
    private faceSnaps: FaceSnap[] = [
        new FaceSnap( "https://i0.wp.com/www.altitude.news/wp-content/uploads/2021/07/paysage-montagne-bonheur.jpg?fit=865%2C605&ssl=1","Archibald", "Mon Meilleur ami depuis toujours ", new Date(), 10  ).withLocation("Une Matinée au Soleil "),
        new FaceSnap("https://media.istockphoto.com/id/183412466/photo/eastern-bluebirds-male-and-female.jpg?s=612x612&w=0&k=20&c=6_EQHnGedwdjM9QTUF2c1ce7cC3XtlxvMPpU5HAouhc=" ," l' été" , " la nature qui s'eveille" , new Date(),2).withLocation('Dans une prairies') ,
        new FaceSnap('https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
      'Three Rock Mountain',
      'Un endroit magnifique pour les randonnées.',      
      new Date(),
      6
    ).withLocation('à la montagne'),
    ]

    getFaceSnaps():FaceSnap[]{
        return [...this.faceSnaps];
    }

   snapFaceSnapById(faceSnapId: string , SnapType:SnapType): void {
    const foundFaceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!foundFaceSnap) {
      throw new Error('FaceSnap not found!');
    }
    foundFaceSnap.addSnaps();
    }

    unsnapFaceSnapById(faceSnapId: string, snapType:SnapType): void {
    const foundFaceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!foundFaceSnap) {
      throw new Error('FaceSnap not found!');
    }
    foundFaceSnap.snap(snapType)

    }
}