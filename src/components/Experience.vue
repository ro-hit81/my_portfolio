<template>
    <panel title="PROFESSIONAL EXPERIENCE">
            <v-card flat v-for="Experience in Experiences" :key="Experience.id" class="mx-auto">
                <v-card-title>
                    <p>
                        <v-badge :value="hover" transition="slide-x-transition" color="cyan" :content="`${Experience.from} - ${Experience.to}`">
                            <v-hover v-model="hover">
                                <span class="text-h6 font-weight-bold">{{Experience.title}}</span>
                            </v-hover>
                        </v-badge>
                        <br>
                        <span class="text-subtitle-2 font-weight-bold grey--text">{{Experience.organization}}</span>
                    </p>        
                </v-card-title>
                <v-card-text>
                    <p class="text-justify" v-html="Experience.activities"></p>
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
        return {
            hover: false,
            Experiences: [
                {id: 1, title: 'INTERNSHIP AT GEO-INFORMATICS CENTER', from: 'October, 2019', to: 'January 2020', organization: 'ASIAN INSTITUTE OF TECHNOLOGY. (BANGKOK, THAILAND)', activities: '<ol><li>Completed Global Navigation Satellite System (GNSS) course jointly orgainized by Geo-Informatics Center, Asian Intitute of Technology (GIC/AIT), Center for Spatial Information Science, The University of Tokyo (CSIS/UT) and International Committee on Global Navigation Satellite System (ICG).</li><li> Data mining & Web scraping from online booking sites.</li><li> Developed deep learning algorithm for land use land cover map.</li><li>Drone training and its application in agricultural field.</li><li> Google Earth Engine for land use land cover map and change detection map in 5 different province.</li></ol>'}
            ]
        }
    }
}
</script>