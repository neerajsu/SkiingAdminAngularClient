export class SkiingPackage {
    constructor(name: String, skisType: String, liftLevel: String, hasLesson: Boolean, price: Number){
        this.name = name;
        this.skisType = skisType;
        this.liftLevel = liftLevel;
        this.hasLesson = hasLesson;
        this.price = price;
    }
    name : String;
    skisType : String;
    liftLevel : String;
    hasLesson : Boolean;
    price : Number;
}