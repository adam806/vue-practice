 <template>
  <div id="app">
    <div class="rankTitleContainer">
      <img class="rankTitleImg" src="./assets/rankTitle-1.jpg">
      <img class="rankTitleImgDown" src="./assets/rankTitle-3.png">
  
      <div class="secondPraise">
        <P class="secondNickname nickName"></P>
        <P class="secondCharm charm">魅力值</P>
        <P class="secondCharmNum charmNum"></P>
      </div>
  
      <div class="firstPraise">
        <P class="firstNickname nickName"></P>
        <P class="firstCharm charm">魅力值</P>
        <P class="firstCharmNum charmNum"></P>
      </div>
  
      <div class="thirdPraise">
        <P class="thirdNickname nickName"></P>
        <P class="thirdCharm charm">魅力值</P>
        <P class="thirdCharmNum charmNum"></P>
      </div>
    </div>
  
    <!--排行榜-->
    <div class="rankingContainer">
      <div class="itemContainer">
      </div>
      <img class="itemShadow" src="./assets/rankshadow.png">
    </div>
  
    <!--活动规则-->
    <div class="roleContainer">
      <div class="lightContainer">
        <div class="lightBg">
          “只因在榜单中多看你一眼，就决定要帮你拿第一！”这样和妹子说会不会很酷很拉风？现在加入，还能领取免费大礼包哦！
        </div>
        <img class="titleImg2" src="./assets/titleLight.png">
      </div>
  
      <img class="detailTitle" src="./assets/detailTitle.png">
  
      <div class="roleWords">
        <P class="roleTitle">1.冲榜时间：</P>
        <P class="roleContent">2017年6月12日——2017年6月18日</P>
        <P class="roleTitle">2.如何帮中意的妹子冲榜：</P>
        <P class="roleContent">1）下载自在APP并注册账号。</P>
        <P class="roleContent">2）收看妹子打了马赛克的动态(你懂的)，根据观看动态所消耗的水晶数，妹子自身魅力值会有所增长。</P>
        <P class="roleContent">3）点击聊天室内电视机，收看妹子发布的视频，根据观看视频所消耗的水晶数，妹子自身的魅力值会有所增长。</P>
        <P class="roleContent">4）观看聊天室内电视机中的视频，并为妹子送礼，根据礼物所消耗的钻石数，妹子自身魅力值会有所增长。</P>
        <P class="roleTitle">3.冲榜奖品：</P>
        <P class="roleContent">1）活动期间周榜单第一名——300元现金。</P>
        <P class="roleContent">2）活动期间周榜单第二名——200元现金。</P>
        <P class="roleContent">3）活动期间周榜单第三名——100元现金。</P>
        <P class="roleTitle">4.冲榜规则：</P>
        <P class="roleContent">1)活动时间内，通过与自在APP内的用户互动可获取魅力值，活动截至后，上周魅力值排行榜前三名的用户可获得现金奖励。</P>
        <P class="roleContent">2)最终排名以服务器统计的2017年6月12日-2017年6月18日魅力值历史榜单数据为准。</P>
        <P class="roleContent">3)最终获奖的用户，请在3个工作日内（逾期作废）通过自在APP私聊自在客服，以便发送奖品。</P>
        <img class="roleShadow" src="./assets//rankshadow.png">
      </div>
  
      <div class="surpriseContainer">
        <div class="surpriseTitle">
          <P>《限量礼包大派送》</P>
          <P>冲榜资金替你出</P>
        </div>
        <div class="supriseWord">
          凡在活动期间下载注册的用户，加QQ群484301286联系管理员即可免费领取价值88元的888钻石大礼包，数量有限发完为止，撩妹不花钱，还有比这更美的事情么？还不快来？
        </div>
        <img class="supriseShadow" src="./assets//rankshadow.png">
      </div>
      <P class="remark">本活动最终解释权归自在APP所有</P>
    </div>
  
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.rankTitleContainer {
  position: relative;
  width: 7.5rem;
  height: 9.66rem;
}

.rankTitleImg {
  width: 7.5rem;
  position: absolute;
  top: 0;
}

.rankTitleImgDown {
  width: 7.5rem;
  position: absolute;
  top: 6.3rem;
}

.secondPraise {
  position: absolute;
  font-size: 0.25rem;
  top: 8.5rem;
  left: 0.3rem;
  text-align: center;
  width: 2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  white-space: nowrap;
  display: inline-block;
  line-height: 0.38rem;
}

.firstPraise {
  position: absolute;
  font-size: 0.25rem;
  top: 8.5rem;
  left: 2.75rem;
  text-align: center;
  width: 2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  white-space: nowrap;
  display: inline-block;
  line-height: 0.38rem;
}

.thirdPraise {
  position: absolute;
  font-size: 0.25rem;
  top: 8.5rem;
  left: 5.2rem;
  text-align: center;
  width: 2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  white-space: nowrap;
  display: inline-block;
  line-height: 0.38rem;
}

.charm {
  color: #a55361;
}

.rankingContainer {
  width: 6.935rem;
  margin-left: 0.283rem;
  top: -0.1rem;
  background: #f1e7f9;
  color: #9d475a;
  font-weight: 300;
  /*overflow: hidden;*/
  position: relative;
}

.itemShadow {
  width: 7.02rem;
  position: absolute;
  left: 0;
}

.roleContainer {
  position: relative;
  width: 7.5rem;
  margin-top: 0.3rem;
  padding: 0 0 1.2rem;
  color: #997e63;
  text-align: center;
  font-size: 0;
}

.lightContainer {
  width: 7.5rem;
  height: 3.91rem;
  position: relative;
  top: 0.2rem;
}

.lightBg {
  width: 6.05rem;
  /*height: 2.33rem;*/
  background: #ecdff7;
  position: absolute;
  left: 50%;
  margin-left: -3.495rem;
  top: 0.24rem;
  font-size: 0.32rem;
  padding: 0.65rem 0.47rem 0.53rem;
  line-height: 0.55rem;
  color: #de673a;
  text-align: justify;
  min-height: 2.2rem;
}

.titleImg2 {
  width: 7.26rem;
  position: absolute;
  left: 50%;
  margin-left: -3.63rem;
}
</style>
