<template>
  <div class="goods">
    <Goodsitem
      v-for="item in goods"
      :key="item.id"
      :goodsitem="item"
    ></Goodsitem>
  </div>
</template>

<script>
import Goodsitem from "./Goodsitem";
export default {
  name: "Goodslist",
  components: {
    Goodsitem,
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },

  methods: {},
};
</script>

<style scoped>
.goods {
  float: left;
  height: 660px;
  width: 1085px;
  display: flex;
  flex-wrap: wrap;
  margin-left: 20px;
}
</style>