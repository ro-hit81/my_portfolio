<template>
    <panel title="PUBLICATIONS">
        <v-card flat hover v-for="Publication in Publications" :key="Publication.title">
            <v-card-title :href="Publication.link">
                <v-icon color="teal accent-3">mdi-file-pdf</v-icon>
                <span class="text-h6 teal--text text--accent-4 font-weight-bold"> {{Publication.title}}</span>
            </v-card-title>
            <v-card-text>
                <p class="text-justify ml-4">
                    {{Publication.about}}
                </p>
            </v-card-text>
            <v-card-actions>
                <v-btn class="teal accent-4 mx-4 mt-n6 mb-3" dark small rounded :href="Publication.link">Read more</v-btn>
            </v-card-actions>
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
        return {
            Publications: [
                {title: 'E-CAD: WEB-BASED INFORMATION SERVICE FOR LAND MANAGEMENT', link:'https://doi.org/10.5194/isprs-archives-XLII-5-W3-65-2019', at:'International Society for Photogrammetry & Remote Sensing (ISPRS Archives)', about: 'The status quo of the land management and information system in Nepal is a far cry from where the developed world stands. Paper-based system is still the spine of this system which is tedious, less accurate and difficult to store and update. So, there is a need for a digitized system providing country’s land authorities with a powerful tool that creates a unified platform for the creation of an accurate spatial database, timely maintenance and updating of the database in a dynamic web platform. The database including spatial data of land features can be utilized to create a web-based thin-client mapping application which meets the needs of all the stakeholders (government authorities from Survey Offices, Land Revenue Offices, Land Reform Offices, etc.).'},
            ]
        }
    }
    
}
</script>