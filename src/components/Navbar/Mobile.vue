<template>
    <v-navigation-drawer
        app
        :src="navbg"
        mini-variant
        mini-variant-width="45"
        permanent
        dark
        >
        <v-row>
            <v-col align="center">
                <v-img :src="image" max-height="250" max-width="200"></v-img>
            </v-col>
        </v-row>
        <v-list>
            <v-list-item link>
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
</template>

<script>
import Rohit from '@/assets/rohit.jpg'
import navbg from '@/assets/navbg.jpg'

export default {
    data() {
        return {
            image: Rohit,
            navbg: navbg,
            items: [
                {title: "ABOUT", icon: "mdi-face", route: "/about"},
                {title: "EDUCATION", icon: "mdi-book-open-page-variant", route: "/education"},
                {title: "PROJECT", icon: "mdi-alpha-p-circle", route: "/project"},
                {title: "EXPERIENCE", icon: "mdi-briefcase", route: "/experience"},
                {title: "SKILLS", icon: "mdi-arm-flex", route: "/skills"},
                {title: "AWARDS", icon: "mdi-trophy", route: "/awards"},
                {title: "PUBLICATIONS", icon: "mdi-file-pdf-box", route: "/publications"},
            ]
        }
    }
}
</script>

<style>
.v-image{
    border-radius: 50%;
}
</style>