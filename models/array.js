var arrays = [];

module.exports = class Array{

    
    constructor(num1, num2, num3){
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
    };

    save(){
        arrays.push(this)
        console.log("Сохраненно успешно")
    };

    static getAll(){
        console.log(arrays);
        return arrays;
        
    };
}
