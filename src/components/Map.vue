<template>
    <section class="geoloacation">
        <h2 class="text-center heading">LOCATION ON GOOGLE MAPS</h2>
        <GmapMap
            class="map mt-4"
            :center="{lat:12.2958, lng:76.6394}"
            :zoom="7"
            map-type-id="terrain"
        >
            <GmapMarker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                :clickable="true"
                :draggable="true"
                @click="center=m.position"
            />
        </GmapMap>
    </section>
    
</template>

<script>
export default {
    data() {
        return {
            markers: []
        }
    },
    created() {
        
        this.markers = [
            {
                position: {lat:12.4307, lng:75.9665},
            },
            {
                position: {lat:12.4217, lng:76.5728}
            },
            {
                position: {lat:12.3023, lng:76.6527}
            },
            {
                position: {lat:12.3022, lng:76.6642}
            },
            {
                position: {lat:12.29520, lng:76.68213}
            }
        ]

        this.$emit("hideloader", true);
        this.$emit("hideloader", true);
        this.$emit("hideloader", true);
    }

}
</script>

<style scoped>
.heading {
    font-size: 3.0rem !important;
    font-family: 'Langar', cursive;
    font-weight: 600;
}

.map {
    margin: auto;
    box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);
    border-radius: 20px;
    height: 400px;
    width: 600px;
}

@media only screen and (max-width: 576px) {
    .map {
        height: 300px;
        width: 300px;
    }
}

</style>