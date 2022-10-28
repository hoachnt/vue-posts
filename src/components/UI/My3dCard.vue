<template>
  <div class="flex justify-center items-center mt-10">
    <div class="bg-gray-900 max-w-xl p-5 rounded-lg shadow-2xl cursor-pointer" id="tilt" @click="$router.push('/posts')">
      <h1 class="text-4xl text-center mb-5">{{greeting}}</h1>
      <img
        src="../../assets/it-img.webp"
        alt=""
        class="max-h-full min-w-full mb-3 rounded-lg"
      />
      <p class="text-xl">
        Here you can see other people's posts and learn something new from the
        world. This web application was created for everyone
      </p>
      <p class="text-xl mt-3">This web application was created for everyone</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "my-3d-card",
  props: {
    greeting: {
      type: String,
    }
  },
  mounted() {
    let el = document.getElementById("tilt");

    const height = el.clientHeight;
    const width = el.clientWidth;

    el.addEventListener("mousemove", handleMove);

    function handleMove(e) {
      const xVal = e.layerX;
      const yVal = e.layerY;

      const yRotation = 20 * ((xVal - width / 2) / width);

      const xRotation = -20 * ((yVal - height / 2) / height);

      const string =
        "perspective(500px) scale(1.1) rotateX(" +
        xRotation +
        "deg) rotateY(" +
        yRotation +
        "deg)";

      el.style.transform = string;
    }

    el.addEventListener("mouseout", function () {
      el.style.transform = "perspective(500px) scale(1) rotateX(0) rotateY(0)";
    });

    el.addEventListener("mousedown", function () {
      el.style.transform =
        "perspective(500px) scale(0.9) rotateX(0) rotateY(0)";
    });

    el.addEventListener("mouseup", function () {
      el.style.transform =
        "perspective(500px) scale(1.1) rotateX(0) rotateY(0)";
    });
  },
};
</script>
<style>
#tilt {
  transition: 0.1s ease-out;
}
</style>