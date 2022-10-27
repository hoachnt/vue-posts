<template lang="">
  <div class="navbar">
    <div
      style="cursor: pointer; color: #000"
      @click="$router.push('/')"
      class="icon"
    >
    <img src="./logo.png" alt="" class="logo">
    </div>
    <div class="navbar__btn" v-show="auth">
      <my-button @click="$router.push('/posts')" class="waves-effect waves-light">Posts</my-button>
      <my-button @click="$router.push('/about')" class="waves-effect waves-light">About</my-button>
      <div class="activeBtn"></div>
    </div>
    <button @click="logOut" v-if="auth" class="log-out text-white border-2 border-rose-700 w-40 h-12 ml-2 mr-4 rounded-md font-semibold transition ease-in-out duration-150 hover:w-60">
      Log out
      <font-awesome-icon icon="fa-solid fa-right-from-bracket" class="ml-2"/>
    </button>
  </div>
  <div class="navbar__btn bottombar__btn">
    <my-button @click="$router.push('/posts')" class="waves-effect waves-light">
      <font-awesome-icon icon="fa-solid fa-blog" />
      <p>Posts</p>
    </my-button>
    <my-button @click="$router.push('/about')" class="waves-effect waves-light">
      <font-awesome-icon icon="fa-solid fa-circle-info" />
      <p>About</p>
    </my-button>
    <div class="activeBtn"></div>
  </div>
</template>
<script>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
import axios from "axios";
export default {
  setup() {
    const router = useRouter();
    const store = useStore();
    const auth = computed(() => store.state.post.authenticated);

    // const logOut = () => {

    // };
    const logOut = async () => {
      try {
        let response = await axios.post(
          "https://b876ad7f-dd71-4ed3-829a-b2488d40b627.selcdn.net/auth/logout",
          {
            refresh_token: localStorage.getItem("refresh_token"),
          }
        );
        localStorage.clear();

        store.dispatch("post/authFalse");

        router.push("/register");
      } catch (error) {
        alert(error);
      }
    };

    return {
      auth,
      logOut,
    };
  },
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
  display: flex;
  min-width: 270px;
  justify-content: space-between;
}
.navbar__btn > button {
  transition: 0.2s ease-in-out;
  background: none;
  position: relative;
  z-index: 1;
  min-height: 50px;
  color: rgb(41, 151, 255);
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
  min-width: 48%;
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
  transform: translateX(calc(108% * 1));
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
  min-height: 70px;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4px);
}
.bottombar__btn > button {
  min-width: 50%;
  min-height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.bottombar__btn > button:hover {
  min-width: 50% !important;
}
.bottombar__btn > .activeBtn {
  min-width: 50%;
}
p {
  line-height: 22.5px;
  margin-top: 5px;
}
.bottombar__btn > button:nth-child(2).active ~ .activeBtn {
  transform: translateX(calc(100% * 1));
  opacity: 1;
}
.log-out {
  background: none !important;
  margin: 0 15px;
  min-height: 48.5px !important;
  max-height: 48.5px;
  padding: 8px !important;
  transition: 0.3s ease-in;
}
.log-out:hover {
  box-shadow: #920635 0px 0px 5px 5px !important;
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
  .log-out {
    box-shadow: #920635 0px 0px 5px 5px !important;
  }
}
</style>