<template>
    <v-container class="mx-auto">
        <v-timeline reverse :dense="$vuetify.breakpoint.smAndDown">
            <v-timeline-item
                v-for="Time in Timeline"
                :key="Time.id"
                :color="Time.color"
                :icon="Time.icon"
                fill-dot
            >
                <template v-slot:opposite>
                    <span
                        :class="`text-body-2 font-weight-bold ${Time.color}--text`"
                        v-text="Time.at"
                    >
                    </span>
                </template>
                <v-card>
                    <v-card-title
                        :class="`${Time.color} ${Time.justify}`"
                    >
                        <v-icon class="mx-2" dark>
                            {{Time.icon}}
                        </v-icon>
                        <h2 class="text-h6  white--text font-weight-light">{{Time.title}}</h2>
                    </v-card-title>
                    <v-card-text v-html="Time.description">
                    </v-card-text>
                </v-card>
            </v-timeline-item>
        </v-timeline>
    </v-container>
</template>

<script>

export default {
    components: {
    },
    data() {
        return {
            Timeline: [
                {id: 1, color:'purple', icon:'mdi-school', at: 'March 2013', justify: 'justify-end', title: 'School Leaving Certificate', description:'Completed Primary level of study. Joined bridge course for higher education.'},
                {id:'2', color:'cyan', icon:'mdi-book-open-page-variant', at:'July, 2013', justify:'justify-start', title:'Higher Secondary Education', description:' Started Higher Secondary Education at Nepal Mega College.'},
                {id:'3', color:'indigo', icon:'mdi-school-outline', at:'May 2015', justify:'justify-end', title:'Higher Secondary Education', description:'Completed Higher Secondary Education. Started pre-engineering preparation for Institute for Engineering.'},
                {id:'4', color:'light-green', icon:'mdi-ab-testing', at:'July 2015', justify:'justify-start', title:'Engineering Entrance', description:'<ul><li>Entrance exam conducted by IOE for engineering.</li><li>Geomatics Department Entrance Topper</li><ul>'},
                {id:'5', color:'orange', icon:'mdi-book-open', at:'November, 2015', justify:'justify-end', title:'Pashchimanchal Campus', description:'Started bachelors education in Geomatics Engineering. '},
                {id:'6', color:'pink', icon:'mdi-medal', at:'January,2016', justify:'justify-start', title:'Honored as a topper in Geomatics Engineering', description:'Honored as a topper in Geomatics Engineering'},
                {id:'7', color:'red', icon:'mdi-certificate', at:'June, 2017', justify:'justify-end', title:'ArcGIS training on Topographic Map', description:'Training provided by GESAN on How to prepare a Topographic Map.'},
                {id:'8', color:'deep-purple', icon:'mdi-presentation', at:'July, 2018', justify:'justify-start', title:'Poster Presentation at Technical Festival', description:'Poster presentation on:- Analysis of 2072 Earthquake:District-wise damage & Temporal Diversity in Kaski:2003 AD - 2018 AD'},
                {id:'9', color:'blue', icon:'mdi-face-agent', at:'July, 2018', justify:'justify-end', title:'As Trainer for ArcGIS training.', description:'Participated as ArcGIS Trainer conducted by GESAN.'},
                {id:'10', color:'teal', icon:'mdi-presentation', at:'January 2019', justify:'justify-end', title:'Poster presentation at GESAN programme.', description:'Poster Presentation on:- 3D-Cadastre in Kathmandu: The better way for visualising property.'},
                {id:'11', color:'green', icon:'mdi-certificate', at:'September, 2109', justify:'justify-start', title:'Training on Synthetic Aperture Radar & Google Earth Engine', description:'5 days training program on Synthetic Aperture Radar & Google Earth Engine.'},
                {id:'12', color:'lime', icon:'mdi-account-hard-hat', at:'October, 2019', justify:'justify-end', title:'Started Internship at GeoInformatics Center', description:'As soon as attending Final exams of bachelors, Joined Internship at GeoInformatics Center, Asian Institute of Technology, Thailand.'},
                {id:'13', color:'deep-orange', icon:'mdi-school', at:'December, 2019', justify:'justify-start', title:'Bachelor in Geomatics Engineering', description:'Undergraduated in Geomatics Engineering from Pashchimanchal Campus, Institute of Engineering, Tribhuvan University.'},
                {id:'14', color:'light-blue', icon:'mdi-certificate', at:'January, 2020', justify:'justify-end', title:'Global Navigation Satellite System', description:'Training on Global Navigation Satellite System at Asian Institute of technology.'},
                {id:'15', color:'amber', icon:'mdi-account-hard-hat', at:'January, 2020', justify:'justify-start', title:'Internship', description:'Completed Internship at GeoInformatics Center'},

                // {id:'', color:'', icon:'', at:'', justify:'', title:'', description:''},
            ]
        }
    }
}
</script>