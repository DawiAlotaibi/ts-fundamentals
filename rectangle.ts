export class Rectangle{
    width: number;
    height: number;
    // Constructor: Modify the Rectangle class from the earlier step by adding a constructor that accepts initial
    // values for width and height. Update the instance creation and area calculation accordingly.
    constructor(width: number, height: number){
        this.width = width;
        this.height = height;
    }
    calculateAreaPublic(): number {
        return this.width * this.height;
    }
    private calculateAreaPrivate(): number {
        return this.width * this.height;
    }
}
