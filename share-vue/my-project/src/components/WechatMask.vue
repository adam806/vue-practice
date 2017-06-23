<template>
    <div class="wechatMask">
        <h1>{{msg}}</h1>
    </div>
</template>

<script>
export default {
  name: 'loading',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style>
h1{
    color: red
}
</style>
