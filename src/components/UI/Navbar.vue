<template lang="">
  <div class="navbar-head"></div>
  <div class="navbar">
    <div
      style="cursor: pointer; color: #000"
      @click="$router.push('/')"
      class="icon"
    >
      VP.GITHUB
    </div>
    <div class="navbar__btn">
      <my-button @click="$router.push('/posts')">Posts</my-button>
      <my-button @click="$router.push('/about')">About</my-button>
      <div class="activeBtn"></div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    const buttons = document.querySelectorAll(".navbar__btn > button");
    const icon = document.querySelector(".icon");

    function reloadPage() {
      icon.addEventListener("click", () => document.location.reload(true));
    }
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
    reloadPage();
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
  color: #2ee59d;
}
.navbar__btn > button:hover {
  transform: none;
  box-shadow: none;
  background: none;
}
.activeBtn {
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100%;
  min-width: 50%;
  background: #2ee59d;
  border-radius: 10px;
  transition: 0.3s ease-in-out;
  opacity: 0;
}
.navbar__btn > button.active {
  color: #000;
}
.navbar__btn > button:nth-child(1).active ~ .activeBtn {
  transform: translateX(calc(100% * 0));
  opacity: 1;
}
.navbar__btn > button:nth-child(2).active ~ .activeBtn {
  transform: translateX(calc(100% * 1));
  opacity: 1;
}

.icon {
  min-height: 60px;
  display: flex;
  align-items: center;
  background: #2ee59d;
  padding: 10px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
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
</style>
