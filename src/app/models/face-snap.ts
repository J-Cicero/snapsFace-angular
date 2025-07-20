import { SnapType } from "./snap-type.type";

export class FaceSnap{
    location?:string;
    id!:string;

    constructor(
    public imageUrl:string,
    public title:string, 
    public descripton:string,
    public createdAt:Date,
    public snaps:number,
    ){
        this.id = crypto.randomUUID().substring(0, 8);
        console.log(this)
    }
    
    snap(snapType:SnapType){
        if(snapType == 'snap'){
            this.addSnaps()
        }else if(snapType == 'unsnap'){
            this.removeSnaps()
        }
    }

    addSnaps():void{
        this.snaps++;
    }
    removeSnaps():void{
        this.snaps--;
    }

    setLocation(location:string){
        this.location = location;
    }

    withLocation(location :string) : FaceSnap{
        this.setLocation(location);
        return this
    }

}