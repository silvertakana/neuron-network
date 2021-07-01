class Network{
    constructor(setting,inputsize,multi,addy){
        this.neurons = []
        for(let i = 0;i<setting.length;i++){
            this.neurons[i] = []
            for(let j = 0;j<setting[i];j++){
                let len = 0
                if(setting[i-1]=== undefined){
                    len = inputsize;
                }else{
                    len = setting[i-1];
                }
                let mult = new Float32Array(len)
                let add = Math.random()*addy-addy/2
                for(let k in mult){
                    mult[k] = Math.random()*multi-multi/2
                    
                }
                this.neurons[i][j] = {weights: mult,bias: add}
            }
        }
    }
    run(input){
        let n = this.neurons
        let nd = input.map(sigmoid) //. neurons data
        let nd2 = []
        for(let i in n){ // loop though layers
            for(let j in n[i]){// loop though neurons
                var a = 0
                for(let k = 0; k<nd.length;k++){// loop though weights
                    a+= nd[k]*n[i][j].weights[k]
                }
                a += n[i][j].bias
                a = sigmoid(a);
                nd2[j] = a;
            }
            nd = nd2
            nd2 = []
        }
        return nd;
    }
    save(){
        return getObject(this.neurons)
    }
    load(data){
        this.neurons = data;
    }
    multate(w,b){
        function multate2(p){
            return (Math.random()*p) - p/2
        }
        let n = this.neurons;
        for(let i in n){
            for(let j in n[i]){
                for(let k in n[i][j].weights){
                    n[i][j].weights[k]+= multate2(w);
                }
                n[i][j].bias += multate2(b);
            }
        }
        
    }
}
function sigmoid(x){
    return 1 / (1 + Math.E ** -x);
}
function rsigmoid(x){
    return Math.log(x/(1-x))
}
function getObject(o){
    return JSON.parse(JSON.stringify(o))
}
class Wall{
    constructor(x1,y1,x2,y2){
        this.p1 = createVector(x1,y1)
        this.p2 = createVector(x2,y2)
    }
    render(){
        let p1 = this.p1
        let p2 = this.p2
        push()
        strokeWeight(10)
        line(p1.x,p1.y,p2.x,p2.y)
        pop()
    }
    
}
