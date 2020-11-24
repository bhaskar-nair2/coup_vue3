<template>
  <div>
    <transition appear name="fade" mode="out-in">
      <div class="modal is-active" v-show="isActive">
        <div
          class="modal-background"
          @click.capture="$emit('close-modal')"
        ></div>
        <div class="modal-card mx-3">
          <header class="modal-card-head">
            <p class="modal-card-title">New Table</p>
            <button
              class="delete"
              @click.capture="$emit('close-modal')"
              aria-label="close"
            ></button>
          </header>
          <section
            class="modal-card-body is-flex is-flex-direction-column is-justify-content-center"
          >
            <p>Table Pin</p>
            <p>Table Name?</p>
          </section>
          <footer class="modal-card-foot is-flex is-justify-content-center">
            <button @click="openGame" class="button is-success">
              Create
            </button>
            <button class="button">Cancel</button>
          </footer>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    isActive: Boolean
  },
  methods: {
    openGame() {
      this.$router.push({ name: "game-page" });
    }
  }
};
</script>

<style lang="scss" scoped>
.modal-content,
.modal-card {
  width: 90%;
}
</style>
