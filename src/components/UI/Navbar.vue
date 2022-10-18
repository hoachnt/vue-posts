<template lang="">
  <div class="navbar-head"></div>
  <div class="navbar">
    <div
      style="cursor: pointer; color: #000"
      @click="$router.push('/')"
      class="icon"
    >
    <img src="./logo.png" alt="" class="logo">
    </div>
    <div class="navbar__btn">
      <my-button @click="$router.push('/posts')">Posts</my-button>
      <my-button @click="$router.push('/about')">About</my-button>
      <div class="activeBtn"></div>
    </div>
  </div>
  <div class="navbar__btn bottombar__btn">
    <my-button @click="$router.push('/posts')">
      <font-awesome-icon icon="fa-solid fa-blog" />
      <p>Posts</p>
    </my-button>
    <my-button @click="$router.push('/about')">
      <font-awesome-icon icon="fa-solid fa-circle-info" />
      <p>About</p>
    </my-button>
    <div class="activeBtn"></div>
  </div>
</template>
<script>
export default {
  mounted() {
    const buttons = document.querySelectorAll(".navbar__btn > button");
    const icon = document.querySelector(".icon");

    function btnActive() {
      buttons.forEach((button) => {
        button.addEventListener("click", () => {
          removeActive();

          button.classList.add("active");
        });
      });
    }
    function removeActive() {
      buttons.forEach((button) => {
        button.classList.remove("active");
      });
    }
    btnActive();
  },
};
</script>
<style scoped>
.navbar-head {
  min-height: 60px;
}
.navbar {
  min-height: 60px;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 5px;
  width: 100%;
  z-index: 999;
  position: fixed;
  top: 0;
  border-bottom: 1px solid #535353;
}
.navbar__btn {
  position: relative;
}
.navbar__btn > button {
  min-height: 100%;
  transition: 0.2s ease-in-out;
  background: none;
  position: relative;
  z-index: 1;
  color: rgb(41, 151, 255);
  padding: 13px;
}
.navbar__btn > button:hover {
  box-shadow: none;
  background: none;
  min-width: 130px !important;
}
.activeBtn {
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100%;
  min-width: 50%;
  background: rgb(26, 92, 255);
  border-radius: 10px;
  transition: 0.3s ease-in-out;
  opacity: 0;
}
.navbar__btn > button.active {
  color: #fff;
}
.navbar__btn > button:nth-child(1).active ~ .activeBtn {
  transform: translateX(calc(100% * 0));
  opacity: 1;
}
.navbar__btn > button:nth-child(2).active ~ .activeBtn {
  transform: translateX(calc(100% * 1));
  opacity: 1;
}
.bottombar__btn {
  display: none !important;
  position: fixed;
  bottom: 0px;
  left: 0;
  z-index: 199;
  min-width: 100%;
  display: flex;
  justify-content: space-around;
  min-height: 60px;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4px);
}
.bottombar__btn > button {
  min-width: 45%;
  min-height: 60px;
}
.bottombar__btn > button:hover {
  min-width: 45% !important;
}

.icon {
  min-height: 60px;
  display: flex;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
  background: #fff;
  min-width: 60px;
  align-items: center;
  justify-content: center;
}
.logo {
  max-width: 50px;
  max-height: 50px;
}

@keyframes stretching {
  0% {
    min-width: 120%;
  }
  10% {
    border-radius: 0;
  }
  70% {
    border-radius: 10px;
  }
  100% {
    min-width: 100%;
  }
}
@media screen and (max-width: 785px) {
  .navbar__btn {
    display: none;
  }
  .bottombar__btn {
    display: flex !important;
  }
}
</style>