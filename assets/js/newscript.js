const {createApp} = Vue;

createApp({

  data(){
    return{
      imageDb : [

        {
          source: 'assets/img/01.webp',
          alt : 'Spoderman'
        },

        {
          source: 'assets/img/02.webp',
          alt : 'Spoderman'
        },

        {
          source: 'assets/img/03.webp',
          alt : 'Spoderman'
        },

        {
          source: 'assets/img/04.webp',
          alt : 'Spoderman'
        },

        {
          source: 'assets/img/05.webp',
          alt : 'Spoderman'
        },
      ],
      imagesSlider : [
        'assets/img/01.webp',
        'assets/img/02.webp',
        'assets/img/03.webp',
        'assets/img/04.webp',
        'assets/img/05.webp',
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
        if(this.counter < 0) this.counter = this.imageDb.length - 1;
        console.log(this.counter);
      }
    }
  }

}).mount('#app')