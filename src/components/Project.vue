<template>
    <panel title="PROJECTS">
        <v-card flat v-for="Project in Projects" :key="Project.title" hover ripple>
            <v-card-title>
                <span class="text-h6 font-weight-bold">{{Project.title}}</span>
            </v-card-title>
            <v-card-text>
                <p class="text-justify">
                    {{Project.description}}
                </p>
            </v-card-text>
            <v-divider></v-divider>
        </v-card>
    </panel>
</template>

<script>
import Panel from '@/components/Panel'
export default {
    components: {
        Panel
    },
    data() {
        return{
            Projects: [
                {title: 'WEB BASED INFORMATION SERVICE FOR LAND MANAGEMENT (E-CAD)', description: 'Management of land information is imperative at present in Nepal. Hence, Web-based and Information System provides the country’s land authorities with a powerful tool which creates a unified platform for all the stakeholders and concerned individuals and organizations which can be utilized for creation of accurate spatial and non-spatial database, timely maintenance and updating of the database in a dynamic web platform. It also provides government officials with easier analysis of geospatial data. This system implements the OGC Web Services: WMS and WFS in order to achieve the visualization of static and dynamic spatial data respectively and the various spatial operations on those data to perform simple spatial and statistical analysis. Alongside with this, land valuation, utility management, land taxation can be appended in this system. Data dissemination to the general people also would be easier for both the stakeholders and public.'},
                {title: 'PARCEL INDENTIFIER MOBILE APPLICATION', description: `Parcel identifier is a mobile app that tracks the user's location and helps to identify the parcel on which they are standing. The app is mainly targeted for the employers of the survey department. Till the date the officer's relies in the paper maps for identifying the certain parcel in the ground which is the most tedious and a complex job. Hence, the main motive of the app is to make the use of the digital platform for simplifying identification of parcel. The app is prepared using the android studio.`},
                {title: `UNITED NATIONS ENVIRONMENTAL PROGRAMME (UNEP)'S PLASTIC PROJECT`, description: '(Description will be written soon...)'},
                {title: 'COVID-19', description: '(Description will be written soon...)'},
                {title: 'PLAYLIST APP', description: '(Description will be written soon...)'}
            ]
        }
    }
}
</script>