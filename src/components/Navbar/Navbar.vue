<template>
    <nav>
        <v-app-bar app flat height="55" color="white">
            <v-btn @click.stop="mini = !mini;" icon>
                <v-icon large color="teal accent-3">{{mini ? 'mdi-dots-vertical' : 'mdi-dots-horizontal'}}</v-icon>
            </v-btn>
        </v-app-bar>
        <v-navigation-drawer
            v-if="!$vuetify.breakpoint.xsOnly"
            app
            :src="navbg"
            :mini-variant="mini"
            permanent
            dark
            >
            <v-row>
                <v-col align="center">
                    <v-img :src="image" max-height="250" max-width="200"></v-img>
                </v-col>
            </v-row>
            <v-list>
                <v-list-item link to="/">
                    <v-list-item-icon>
                        <v-icon>mdi-alpha-r-circle</v-icon>
                    </v-list-item-icon>
                        <v-list-item-title>
                            <span class="font-weight-bold">ROHIT KHATI</span> <br>
                            <span class="grey--text font-italic">rhtkhati@gmail.com</span>
                        </v-list-item-title>
                        
                </v-list-item>
            </v-list>
            <v-divider></v-divider>
            <v-list >
                <v-list-item link v-for="item in items" :key="item.title" :to="item.route">
                    <v-list-item-icon>
                        <v-icon>{{item.icon}}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        {{item.title}}
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <Mobile v-else />
    </nav>
</template>

<script>
import Rohit from '@/assets/rohit.jpg'
import navbg from '@/assets/navbg.jpg'
import Mobile from '@/components/Navbar/Mobile'

export default {
    data() {
        return {
            image: Rohit,
            drawer: true,
            mini: false,
            navbg: navbg,
            items: [
                {title: "ABOUT", icon: "mdi-face", route: "/about"},
                {title: "EDUCATION", icon: "mdi-book-open-page-variant", route: "/education"},
                {title: "PROJECT", icon: "mdi-alpha-p-circle", route: "/project"},
                {title: "EXPERIENCE", icon: "mdi-briefcase", route: "/experience"},
                {title: "SKILLS", icon: "mdi-arm-flex", route: "/skills"},
                {title: "INTEREST", icon: "mdi-alpha-i-circle-outline", route: "/interest"},
                {title: "AWARDS", icon: "mdi-trophy", route: "/awards"},
                {title: "PUBLICATIONS", icon: "mdi-file-pdf-box", route: "/publications"},
            ]
        }
    },
    components: {
        Mobile
    }
}
</script>

<style>
.v-image{
    border-radius: 50%;
}
</style>