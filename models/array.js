var arrays = [];



module.exports = class Array{
    static counter = 0;

    constructor(num1, num2, num3){
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.counter = ++Array.counter
    };

    
    save(){
        arrays.push(this)
        console.log("Сохраненно успешно")
        
    };
    deleteArray(){
        --Array.counter
        delete this;
    }
    
    static getAll(){
        console.log(arrays);
        return arrays;
        
    };
};


