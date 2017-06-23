<template>
    <div class="errorContainer">
        <!--<img class="errorImage loadImg" src="images/errorIcon.png">-->
        <div class="errorReminder">
            <!--<P>出错了</P>-->
            <P class="errorDesc">{{msg}}</P>
        </div>
    </div>
</template>

<script>
// export default {
//   name: 'ErrorPage',
//   data () {
//     return {
//       msg: '页面加载失败'
//     }
//   }
// }
module.exports = {
  data: function () {
    return {
      msg: ''
    }
  }
}
</script>

<style>
p {
    color: yellow
}
</style>
