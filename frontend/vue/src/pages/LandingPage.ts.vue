<!-- This page have basic banner and navigation -->
<template>
  <div id="body">
    <div class="banner">
      <img
        src="https://st.depositphotos.com/2010047/2144/i/600/depositphotos_21443135-stock-photo-3d-small-with-a-question.jpg"
        alt="">
    </div>
    <div class="navigation-box">
      <div id="课表" class="navigation-button">
        <font-awesome-icon class="icon" icon="fa-regular fa-calendar-days" />
        <div>课表</div>
      </div>
      <div id="成绩" class="navigation-button">
        <font-awesome-icon class="icon" icon="fa-solid fa-chart-column" />
        <div>成绩</div>
      </div>
      <div id="考试" class="navigation-button">
        <font-awesome-icon class="icon" icon="fa-solid fa-pencil" />
        <div>考试</div>
      </div>
      <div id="空教室" class="navigation-button">
        <font-awesome-icon class="icon" icon="fa-solid fa-magnifying-glass-location" />
        <div>空教室</div>
      </div>
      <div id="外卖红包" class="navigation-button">
        <font-awesome-icon class="icon" icon="fa-solid fa-coins" />
        <div>外卖红包</div>
      </div>
      <div id="电话本" class="navigation-button">
        <font-awesome-icon class="icon" icon="fa-solid fa-address-book" />
        <div>电话本</div>
      </div>
      <div id="地图" class="navigation-button">
        <font-awesome-icon class="icon" icon="fa-solid fa-location-dot" />
        <div>地图</div>
      </div>
      <div id="黑商" class="navigation-button">
        <font-awesome-icon class="icon" icon="fa-solid fa-store" />
        <div>黑商</div>
      </div>
    </div>

    <h3>???</h3>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'LandingPage',
  setup() {
  }
});
</script>

<style scoped>
#body {
  background-color: rgb(240, 240, 240);
}

.banner {
  text-align: center;
  height: 200px;
  position: relative;
}

.banner img {
  max-height: 100%;
}

.navigation-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: white;
}

.navigation-button {
  width: 20%;
  min-width: 50px;
  text-align: center;
  padding: 16px 0 16px 0;
  margin: 0 0.5rem 0 0.5rem;
}

.navigation-button div {
  margin-top: 0.5rem;
}


.navigation-button:hover {
  cursor: pointer;
}

.navigation-button:hover .icon {
  transform: translateY(2px);
}

#课表 .icon {
  color: rgb(0, 130, 255);
}

#成绩 .icon {
  color: rgb(238, 136, 11);
}

#考试 .icon {
  color: rgb(225, 78, 68);
}

#空教室 .icon {
  color: rgb(140, 200, 60);
}

#外卖红包 .icon {
  color: rgb(230, 77, 66);
}

#电话本 .icon {
  color: rgb(51, 51, 51);
}

#地图 .icon {
  color: rgb(215, 197, 0);
}

#黑商 .icon {
  color: rgb(100, 60, 180);
}
</style>
