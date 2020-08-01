<template>
<div class="loader">
  <span class="loader-block"></span>
  <span class="loader-block"></span>
  <span class="loader-block"></span>
  <span class="loader-block"></span>
  <span class="loader-block"></span>
  <span class="loader-block"></span>
  <span class="loader-block"></span>
  <span class="loader-block"></span>
  <span class="loader-block"></span>
</div>
</template>
<script>
export default {
    name:"Loading"
}
</script>
<<<<<<< HEAD
<style>
    .spinner {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .spinner > div {
        background-color: #333;
        height: 20%;
        width: 6px;
        display: inline-block;
        animation: sk-stretchdelay 1.5s infinite ease-in-out;
    }
    @keyframes sk-stretchdelay {
        0%, 40%, 100% { transform: scaleY(0.4); }  
        20% { transform: scaleY(1.0); }
    }
    .spinner .rect2 { animation-delay: -1.1s; }
    .spinner .rect3 { animation-delay: -1.0s; }
    .spinner .rect4 { animation-delay: -0.9s; }
    .spinner .rect5 { animation-delay: -0.8s; }
=======
<style lang="scss" scoped>
    body {
  text-align: center;
}

.loader {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 7.33333em;
  height: 7.33333em;
  margin-left: -3.66667em;
  margin-top: -3.66667em;
}

.loader-block {
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  opacity: 0;
  width: 2em;
  height: 2em;
  background: #fdfdfd;
  -webkit-animation: show 0.88s step-end infinite alternate, pulse 0.88s linear infinite alternate;
  animation: show 0.88s step-end infinite alternate, pulse 0.88s linear infinite alternate;
}

.loader-block:nth-child(1) {
  -moz-transform: translate(0, 0);
  -ms-transform: translate(0, 0);
  -webkit-transform: translate(0, 0);
  transform: translate(0, 0);
  -webkit-animation-delay: 0.065s;
  animation-delay: 0.065s;
}

.loader-block:nth-child(2) {
  -moz-transform: translate(2.66667em, 0);
  -ms-transform: translate(2.66667em, 0);
  -webkit-transform: translate(2.66667em, 0);
  transform: translate(2.66667em, 0);
  -webkit-animation-delay: 0.13s;
  animation-delay: 0.13s;
}

.loader-block:nth-child(3) {
  -moz-transform: translate(5.33333em, 0);
  -ms-transform: translate(5.33333em, 0);
  -webkit-transform: translate(5.33333em, 0);
  transform: translate(5.33333em, 0);
  -webkit-animation-delay: 0.195s;
  animation-delay: 0.195s;
}

.loader-block:nth-child(4) {
  -moz-transform: translate(0, 2.66667em);
  -ms-transform: translate(0, 2.66667em);
  -webkit-transform: translate(0, 2.66667em);
  transform: translate(0, 2.66667em);
  -webkit-animation-delay: 0.325s;
  animation-delay: 0.325s;
}

.loader-block:nth-child(5) {
  -moz-transform: translate(2.66667em, 2.66667em);
  -ms-transform: translate(2.66667em, 2.66667em);
  -webkit-transform: translate(2.66667em, 2.66667em);
  transform: translate(2.66667em, 2.66667em);
  -webkit-animation-delay: 0.13s;
  animation-delay: 0.13s;
}

.loader-block:nth-child(6) {
  -moz-transform: translate(5.33333em, 2.66667em);
  -ms-transform: translate(5.33333em, 2.66667em);
  -webkit-transform: translate(5.33333em, 2.66667em);
  transform: translate(5.33333em, 2.66667em);
  -webkit-animation-delay: 0.455s;
  animation-delay: 0.455s;
}

.loader-block:nth-child(7) {
  -moz-transform: translate(0, 5.33333em);
  -ms-transform: translate(0, 5.33333em);
  -webkit-transform: translate(0, 5.33333em);
  transform: translate(0, 5.33333em);
  -webkit-animation-delay: 0.39s;
  animation-delay: 0.39s;
}

.loader-block:nth-child(8) {
  -moz-transform: translate(2.66667em, 5.33333em);
  -ms-transform: translate(2.66667em, 5.33333em);
  -webkit-transform: translate(2.66667em, 5.33333em);
  transform: translate(2.66667em, 5.33333em);
  -webkit-animation-delay: 0.26s;
  animation-delay: 0.26s;
}

.loader-block:nth-child(9) {
  -moz-transform: translate(5.33333em, 5.33333em);
  -ms-transform: translate(5.33333em, 5.33333em);
  -webkit-transform: translate(5.33333em, 5.33333em);
  transform: translate(5.33333em, 5.33333em);
}

@-webkit-keyframes pulse {
  from,
  40% {
    background: red;
  }
  to {
    background: green;
  }
}
@-webkit-keyframes show {
  from,
  40% {
    opacity: 0;
  }
  41%,
  to {
    opacity: 1;
  }
}
@keyframes pulse {
  from,
  40% {
    background: red;
  }
  to {
    background: green;
  }
}
@keyframes show {
  from,
  40% {
    opacity: 0;
  }
  41%,
  to {
    opacity: 1;
  }
}
/* Body styling */
html,
body {
  height: 100%;
}


>>>>>>> 7581d79be18c96aca3efcb213c3d1ba7d55d298e
</style>