<template>
    <div>
        <div class="loading">
            <h1>{{msg}}</h1>
        </div>
        <errorpage></errorpage>
        <wechatmask></wechatmask>
    </div>
</template>

<script>
import errorpage from './errorpage'
import wechatmask from './WechatMask'
export default {
  components: {
    errorpage,
    wechatmask
  },
  name: 'loading',
  data: function () {
    return {
      msg: ''
    }
  }
}
</script>

<style>
h1 {
    color: red
}
</style>
