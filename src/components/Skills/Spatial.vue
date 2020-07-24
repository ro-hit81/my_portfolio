<template>
    <div>
        <v-row>
        <v-col xs12 sm6 md4 v-for="Spatial in Spatials" :key="Spatial.title">
            <v-progress-circular
                class="mx-6"
                :value="Spatial.value"
                :color="Spatial.color"
                size="160"
                width="40"
                >
                {{Spatial.title}}
            </v-progress-circular>
        </v-col>
        </v-row>
    </div>
</template>
 
 <script>

 export default {
     data() {
         return {
             Spatials: [
                 {title: 'ArcMap', color: 'cyan accent-3', value:'75'},
                 {title: 'QGIS', color: 'light-green darken-1', value:80},
                 {title: 'G.E.E.', color: 'deep-purple lighten-2', value:'60'},
                 {title: 'ERDAS', color: 'orange accent-2', value:'55'},
                 {title: 'ENVI', color: 'green accent-4', value:'45'},
                 {title: 'SNAP', color: 'light-green darken-2', value:'45'},
                 {title: 'Python(GIS)', color: 'deep-orange lighten-2', value:'45'},
                 {title: 'Survey', color: 'brown darken-1', value:'80'},
             ]
         }
     }
 }
 </script>