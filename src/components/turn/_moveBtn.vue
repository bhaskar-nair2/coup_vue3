<template>
  <div class="container">
    <div
      class="absolute bottom-10 w-screen flex justify-center align-center pointer-events-none"
    >
      <div
        v-for="n in 2"
        :key="n"
        :class="
          `transition-all transform -${show ? 'translate' : ' opacity-0 '}-y-${
            trsTop[n - 1]
          }`
        "
      >
        <button
          :class="
            `container bg-black bg-opacity-80 h-20 w-20 p-2 m-2 focus:outline-none rounded-full ring-2 ring-blue-200`
          "
          @click="$emit('click')"
        >
          <span class="text-gray-100"> {{ n }}</span>
        </button>
      </div>
    </div>
    <button
      id="holder"
      :class="
        `container bg-black bg-opacity-80 h-10 w-10 p-2 m-2 focus:outline-none rounded-full `
      "
      @click="toggleShow"
    >
      <span class="text-gray-100"> X </span>
    </button>
    <div
      class="absolute bottom-1 w-screen flex justify-center align-center pointer-events-none"
    >
      <div
        v-for="n in 3"
        :key="n"
        :class="
          `transition-all transform ${show ? 'translate' : 'opacity-0 '}-y-${
            trsBot[n - 1]
          }`
        "
      >
        <button
          :class="
            `container bg-black bg-opacity-80 h-20 w-20 p-2 m-2 focus:outline-none rounded-full ring-2 ring-red-500`
          "
          @click="$emit('click')"
        >
          <span class="text-gray-100"> {{ n }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "ActionsFab",
  data: () => ({
    show: ref(true),
    trsTop: [4, 4],
    trsBot: [20, 24, 20]
  }),
  methods: {
    toggleShow() {
      this.show = !this.show;
    }
  }
};
</script>

<style></style>
