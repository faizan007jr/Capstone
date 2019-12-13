<template>
  <div class="home">
    <div class="jumbotron">
      <div class="container">
        <h1>Trash & Treasure</h1>
      </div>
    </div>

    <div class="container mb-5">

      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active p-auto">
            <img class="d-block w-100 img-fluid m-auto" :src="getImage('1.jpg')" alt="First slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100 img-fluid m-auto" :src="getImage('2.jpg')" alt="Second slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100 img-fluid m-auto" :src="getImage('3.jpg')" alt="Third slide">
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeComponent',
  methods: {
    getImage(src) {
      return require('../assets/' + src);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .jumbotron {
    color: #fbfdff;
    text-align: center;
    text-shadow: 0 1px 3px rgba(0,0,0,.4), 0 0 30px rgba(0,0,0,.075);
    font-family: "Malgun Gothic Semilight";
    background: #020031;
    background: linear-gradient(45deg, #020031 0%, #6d1113 100%);
    box-shadow: inset 0 3px 7px rgba(0,0,0,.2), inset 0 -3px 7px rgba(0,0,0,.2);
    border-radius: 0;
  }

  .jumbotron:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: url(../assets/masterhead-pattern.png) repeat center center;
    opacity: .4;
  }
</style>
