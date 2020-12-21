<template>
    <panel title="AWARDS">
        <v-card flat v-for="Award in Awards" :key="Award.title">
            <v-card-text class="ml-4">
                <v-icon color="teal accent-4">mdi-{{Award.icon}} </v-icon>
                <span class="grey--text text--darken-2"> {{Award.title}}</span>
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
            Awards: [
                {title: 'Full scholarship from Nepal government to complete Bachelor’s Degree in Geomatics Engineering', icon: 'medal'},
                {title: 'Honored as Entrance topper in Geomatics Engineering', icon: 'seal-variant'},
                {title: 'Geomatics Engineering second topper (2072-2076) batch', icon: 'numeric-2-circle-outline'},
                {title: 'Winner of COVID-19 Mapathon awarded by Nepal Geomatics Engineering Society', icon: 'trophy-award'},
            ]
        }
    }
}
</script>