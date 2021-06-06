new Vue({
    el: "#app",
    data: {
        counter : 0,
        name : '',
        init_value : 0,
        message : '',
        result : false,
        toggle : false, 
        courses : [
            {id:1,title:'Machine Learning', price : 199 },
            {id:2,title:'Django', price : 99 },
            {id:3,title:'Deep learning' , price : 500 },
        ]
    },
    methods: {
        increase : function(step){
            this.counter += step;
        },
        decrease : function(step){
            this.counter -= step;
        },
        add : function(){
            alert('submit a form')
        },
        logName: function(){
            console.log('log my name')
        },
    },
    computed: {
        calculator: function(){
            console.log('calculate it');
            return this.init_value * this.counter;
        },
        object1: function(){
            return {'bg-success' : this.result , 'bg-warning': !this.result }
        }
    },
    watch: {
        calculator: function(v){
            if(v >= 10){
                this.result == true
                this.message = "WE HAVE A WINNER"
            }
            else{
                this.result == false
                this.message = "WE HAVE A LOSER"
            }
        }
    }
})