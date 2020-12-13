<template>
  <div>
    <Preloader />
  </div>
</template>

<script>
import Preloader from './Preloader'
import $ from 'jquery'

export default {
    components :{
        Preloader
    },
    mounted() {
        $(window).on('load', function () { 
            $('#status').fadeOut(4000); 
            $('#pageloader').delay(2).fadeOut(4000); 
            $('body').delay(1000).css({'overflow':'visible'});
        });
    }

}
</script>

<style>

</style>