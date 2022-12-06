<template>
  <v-app>
    <v-main
      :style="
        $vuetify.display.smAndUp
          ? 'background-color: hotpink'
          : 'background-color: green'
      "
    >
      <HelloWorld :height="$vuetify.display.smAndUp ? 70 : 45" />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "AppHeader",
  components: { HelloWorld },
};
</script>
