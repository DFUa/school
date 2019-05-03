<template>
  <div v-if="text" class="subheader title">
    <span>{{text}}</span>
    <v-btn color="#138a36" dark small>Завантажити працівників із Excel</v-btn>
    <v-btn color="#138a36" dark small>Новий працівник</v-btn>
  </div>
</template>

<script>
export default {
  name: 'subheader',
  props: {
    text: String
  },
}
</script>

<style lang="scss" scoped>
.subheader {
  background: lightgrey;
  padding: 30px;
  display: flex;
  align-items: center;
  span {
    margin-right: auto;
  }
}
</style>
