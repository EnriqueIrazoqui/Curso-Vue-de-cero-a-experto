const app = Vue.createApp({

    /**template: `
    <h1>Hola mundo</h1>
    <p>{{}}</p>
    `*/

    data(){
        return{
            quote: "I´m Batman",
            author: "Bruce Wayne"
        }
    },
    methods: {
        changeQuote(){
            console.log("Hola mundo");
            this.author = "Enrique Irazoqui"
            this.capitalize()
        },
        capitalize(){
            this.quote = this.quote.toUpperCase();
        }
    } 
})

app.mount("#myApp");
