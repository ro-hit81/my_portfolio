<template>
  <v-app>
    <Navbar />
    <v-main class="mx-2">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar/Navbar'

export default {
  name: 'App',
  components: {
    Navbar,
  },

  data: () => ({
    //
  }),
};
</script>
