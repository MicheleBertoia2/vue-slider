const {createApp} = Vue;

createApp({

  data(){
    return{
      imageDb : [
        
        {
          source : 'assets/img/01.webp',
          alt : 'Spoderman'
        },

        {
          source : 'assets/img/02.webp',
          alt : 'Ratchet'
        },

        {
          source : 'assets/img/03.webp',
          alt : 'Fortnite'
        },

        {
          source : 'assets/img/04.webp',
          alt : 'Stray'
        },

        {
          source : 'assets/img/05.webp',
          alt : 'Marvel'
        },
      ],
      counter : 0     
    }
  },

  methods : {
    nextPrev(isNext){
      if(isNext){
        this.counter++;
        if(this.counter === this.imageDb.length) this.counter = 0;
        console.log(this.counter);
      }else{
        this.counter--;
        if(this.counter < 0) this.counter = this.imageDb.length;
      }
    }
  }

}).mount('#app')