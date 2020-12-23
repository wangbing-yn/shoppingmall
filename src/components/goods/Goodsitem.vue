<template>
  <div class="goodsitem" @click="itemclick">
    <img v-bind:src="goodsitem.bookimg" alt="" />
    <div class="ptop">
      <p class="pt">
        {{ goodsitem.imgs }}
      </p>
    </div>
    <p class="sty">¥{{ goodsitem.price }}</p>
  </div>
</template>

<script>
export default {
  name: "Goodsitem",
  props: {
    goodsitem: {
      type: Object,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },

  methods: {
    itemclick() {
      this.$router.push({
        path: "/Good",
        query: {
          imgs: this.goodsitem.imgs,
          bookimg: this.goodsitem.bookimg,
          price: this.goodsitem.price,
          id: this.goodsitem.id,
        },
      });
      //  console.log(this.goodsitem.id)
    },
  },
};
</script>

<style scoped>
.sty {
  font-size: 15px;
  color: #fd7950;
}
.goodsitem {
  width: 20%;
  height: 300px;
}
.ptop {
  margin-top: 10px;
  margin-bottom: 5px;
  margin-left: 20px;
  overflow: hidden;
  width: 192px;
  height: 47px;
}
.pt {
  font-size: 10px;
}
</style>