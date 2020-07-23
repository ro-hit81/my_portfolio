<template>
  <v-app>
    <Navbar />
    <v-main class="mx-2">
      <v-expand-transition hide-on-leave="true">
       <router-view></router-view>
      </v-expand-transition>
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
