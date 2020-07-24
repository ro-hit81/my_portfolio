<template>
    <div>
        <v-row>
        <v-col xs12 sm6 md6 v-for="Basic in Basics" :key="Basic.title">
            <v-progress-circular
                :value="Basic.value"
                :color="Basic.color"
                size="160"
                width="40"
                >
                {{Basic.title}}
            </v-progress-circular>
        </v-col>
        </v-row>
    </div>
</template>
 
 <script>

 export default {
     data() {
         return {
             Basics: [
                 {title: 'GitHub', color: 'grey darken-3', value:'90'},
                 {title: 'MS Office', color: 'orange darken-2', value:80},
                 {title: 'SQL', color: 'light-green accent-3', value:'60'},
                 {title: 'Node JS', color: 'green darken-3', value:'50'},
             ]
         }
     }
 }
 </script>