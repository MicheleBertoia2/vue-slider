const {createApp} = Vue;

createApp({

  data(){
    return{
      imageDb : [

        {
          order : 0,
          source: 'assets/img/01.webp',
          alt : 'Spoderman'
        },

        {
          order : 1,
          source: 'assets/img/02.webp',
          alt : 'Spoderman'
        },

        {
          order : 2,
          source: 'assets/img/03.webp',
          alt : 'Spoderman'
        },

        {
          order : 3,
          source: 'assets/img/04.webp',
          alt : 'Spoderman'
        },

        {
          order : 4,
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
      counter : 0,
      isMouseOver : false,
      elemSelezionato : null     
    }
  },

  methods : {
    nextPrev(isNext){
      if(isNext){
        this.counter++;
        if(this.counter === this.imageDb.length) this.counter = 0;
      }else{
        this.counter--;
        if(this.counter < 0) this.counter = this.imageDb.length - 1;
      }
    },

    activeThumb  (order, elem){
      this.counter = order;
      this.elemSelezionato = elem      
    },

    autoPlay (){
      if(!this.isMouseOver) this.nextPrev(true)
    },

    startAutoPlay(){
      setInterval(() => {
        this.autoPlay();
      },2000)
    },

    stopPlay(){
      this.isMouseOver = true
    },
    
    startPlay(){
      this.elemSelezionato = null
      this.isMouseOver = false
    }

    
  },

  mounted (){
    this.startAutoPlay()
  }

  

}).mount('#app')