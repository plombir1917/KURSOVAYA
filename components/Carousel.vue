<template>
  <div class="container">
    <b-carousel
      id="carousel-fade"
      v-model="slide"
      fade
      :interval="5000"
      controls
      label-next="Следующий слайд"
      label-prev="Предыдущий слайд"
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        caption="ВОТ ТАКЕННЫЙ ФЕСТИВАЛЬ!"
        text="Скоро вся информация по билетам. До встречи на игре!"
        img-src="../static/1st-slide.jpg"
      ></b-carousel-slide>

      <b-carousel-slide
        caption="НАШИ В СОЧИ"
        text="Желаем удачи в следующих играх и уже скоро ждём в Липецке!"
        img-src="../static/2nd-slide.jpg"
      ></b-carousel-slide>

      <b-carousel-slide
        caption="ЧЕМПИОНЫ ПРОШЛЫХ ЛЕТ"
        text="Уже в эту субботу стартует новый сезон КВН в Липецке. Кто-то станет семнадцатым по счету чемпионом нашей лиги. Решили вспомнить имена всех по порядку:"
        img-src="../static/3rd-slide.jpg"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
  },
}
</script>

<style scoped>
.container {
  max-height: 70%;
}
</style>
