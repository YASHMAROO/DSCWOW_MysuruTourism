<template>
  <div id="pageloader">
      <div id="status"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#pageloader {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ffdde2;
    z-index: 99999;
}

#status {
    width: 200px;
    height: 200px;
    position: absolute;
    left: 46%;
    top: 35%;
    background-image: url("https://media.giphy.com/media/y5MNdXGpGmSixqxkUa/source.gif");
    border-radius: 50%;
    z-index: 9999;
    background-repeat: no-repeat;
    background-position: center;
    margin: -10px 0 0 -36px;
    background-position: unset;
    background-size: contain;
}
</style>