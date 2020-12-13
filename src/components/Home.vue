<template>
    <div>
        <Carousel />
        <br>
        <br>
        <br>
        <Highlights />
        <br>
        <br>
        <br>
        <GoogleMap />
        <br>
        <br>
        <Weather />
        <br>
        <br>
        <br>
        <Covid />
    </div>
</template>

<script>
import Carousel from './HomeCarousel'
import Highlights from './Highlights'
import Covid from './CovidSection'
import GoogleMap from './Map'
import Weather from './WeatherSection'
export default {
    components :{
        Carousel,
        Highlights,
        Covid,
        GoogleMap,
        Weather
    },
    created() {
        setTimeout( function() {
            fetch(`${this.url_base}weather?q=Mysore&units=metric&APPID=${this.api_key}`)
            .then(res => {
                return res.json();
            }).then(this.setResults)},3000);
        this.$emit("hideloader", true)
        this.$emit("hideloader", true)
        this.$emit("hideloader", true)
    }
}
</script>

<style>

</style>