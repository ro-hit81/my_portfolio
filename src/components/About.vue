<template>
    <v-container fluid pa-0>
        <v-row style="height: 85vh" dense>
            <v-col class="d-flex flex-column justify-center align-center">
                <v-card flat class="mx-auto text-center">
                    <p>
                        <span class="blue-grey--text text--darken-4 text-h1 font-weight-bold">ROHIT </span>
                        <span class="teal--text text--accent-3 text-h1 font-weight-bold"> KHATI</span><br>
                    
                        <span class="blue-grey--text text--lighten-1 text-h6">DHANGADHI, NEPAL&middot; +977-9849218181&middot; </span>
                        <a class="teal--text text--darken-2 text-h6 text-decoration-underline" :href="`mailto:${mail}`">{{mail}}</a><br>
                    </p>
                        <span class="teal--text text--darken-3 text-h6 font-weight-bold">Research Assistant at GLODAL</span>
                    <p class="mt-9">
                        <span class="blue-grey--text text--lighten-1 text-h6 font-weight-light">&middot; Engineer &middot; Researcher &middot; Student &middot; Sportsman &middot; Gamer &middot;</span>
                    </p>
                    <span class="blue-grey--text text--lighten-1 font-weight-light">
                        A crazy 
                        <span class="teal--text text--darken-3 font-weight-bold">DATA</span> freak with 
                        <span class="teal--text text--darken-3 font-weight-bold">SPATIAL</span> background,
                        <span class="teal--text text--darken-3 font-weight-bold">PROGRAMMING</span> skills &
                        <span class="teal--text text--darken-3 font-weight-bold">AI</span> interest.
                    </span>
                    <p class="mt-12">
                        <v-btn icon x-large v-for="socialApp in socialApps" :key="socialApp.icon" :href="socialApp.link" ripple class="mx-5">
                            <v-icon :color="socialApp.color">mdi-{{socialApp.icon}}</v-icon>
                        </v-btn>
                    </p>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            mail: 'rhtkhati@gmail.com',
            socialApps: [
                {color: 'blue darken-1', icon: 'facebook', link: 'https://www.facebook.com/rohit.khati3'},
                {color: 'orange darken-2', icon: 'instagram', link: 'https://www.instagram.com/rohit_khati/'},
                {color: 'black', icon: 'github', link: 'https://github.com/ro-hit81'},
                {color: 'blue lighten-2', icon: 'twitter', link: 'https://twitter.com/rohitkhati713'},
                {color: 'light-blue darken-1', icon: 'linkedin', link: 'https://www.linkedin.com/in/rhtkht/'},
                {color: 'deep-purple darken-1', icon: 'email', link: 'mailto:rhtkhati@gmail.com'}
            ]
        }
    }
}
</script>