<template>
    <div>
        <v-row>
        <v-col xs12 sm6 md4 v-for="Programming in Programmings" :key="Programming.title">
            <v-progress-circular
                class="mx-6"
                :value="Programming.value"
                :color="Programming.color"
                size="160"
                width="40"
                >
                {{Programming.title}}
            </v-progress-circular>
        </v-col>
        </v-row>
    </div>
</template>
 
 <script>

 export default {
     data() {
         return {
             Programmings: [
                 {title: 'Deep Learn', color: 'orange accent-3', value:'55'},
                 {title: 'Python', color: 'teal accent-3', value:'54'},
                 {title: 'JavaScript', color: 'light-blue accent-3', value:'52'},
                 {title: 'Vue JS', color: 'blue accent-3', value:'80'},
                 {title: 'Vuetify', color: 'purple darken-1', value:'80'},
                 {title: 'Django', color: 'red darken-1', value:'53'},
                 {title: 'R', color: 'deep-purple darken-1', value:'30'},
             ]
         }
     }
 }
 </script>
 