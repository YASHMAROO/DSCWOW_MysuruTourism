<template>
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="cover"></div>
        <img class="responsive" src="@/assets/mysore-palace-city.jpg" alt="First slide" />
        <div class="carousel-caption">
          <h5 class="heading">Mysore City Palace</h5>
          <p class="subheading">The Mysore Palace is a historical palace and the royal residence at Mysore in the Indian State of Karnataka.</p>
        </div>
      </div>
      <div class="carousel-item">
        <div class="cover"></div>
        <img class="responsive" src="@/assets/Brindavan_Gardens.jpeg" alt="Second slide" />
        <div class="carousel-caption">
          <h5 class="heading">Brindavan Gardens</h5>
          <p class="subheading">The Brindavan Gardens is a garden located in the Mandya District of the Indian State of Karnataka.</p>
        </div>
      </div>
      <div class="carousel-item">
        <div class="cover"></div>
        <img class="responsive" src="@/assets/Namdroling.jpeg" alt="Third slide" />
        <div class="carousel-caption">
          <h5 class="heading">Namdroling</h5>
          <p class="subheading">The Namdroling Nyingmapa Monastery is the largest teaching center of the Nyingma lineage of Tibetan Buddhism in the world.</p>
        </div>
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<style scoped>
.carousel-item {
  height: 100vh;
  background-size: cover !important;
  background-repeat: no-repeat !important;
}

.responsive {
  width: 100%;
  height: 100vh;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-position: center;
}

.cover {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #000;
  opacity: 0.2;
}

.heading {
  font-size: 1.6rem !important;
  font-family: 'Langar', cursive;
}

.subheading {
  font-size: 1.4rem;
  font-family: 'Langar', cursive;
}

@media only screen and (max-width: 576px) {
.responsive {
  object-fit: cover;
}

  .heading {
    font-size: 1.2rem !important;
  }

  .subheading {
    font-size: 1.0rem;
  }
}
</style>