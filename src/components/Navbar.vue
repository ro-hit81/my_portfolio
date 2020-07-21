<template>
    <nav>
        <v-app-bar app flat :src="appbg" height="55">
            <v-spacer></v-spacer>
            <v-btn @click.stop="drawer = !drawer" icon>
                <v-icon large color="white">{{drawer ? 'mdi-dots-vertical' : 'mdi-dots-horizontal'}}</v-icon>
            </v-btn>
        </v-app-bar>
        <v-navigation-drawer
            v-model="drawer"
            app
            expand-on-hover
            :src="navbg"
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
                <v-list-item link v-for="item in items" :key="item.title">
                    <v-list-item-icon>
                        <v-icon>{{item.icon}}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        {{item.title}}
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
import Rohit from '@/assets/rohit.jpg'
import navbg from '@/assets/navbg.jpg'
import appbg from '@/assets/appbg.jpg'

export default {
    data() {
        return {
            image: Rohit,
            drawer: null,
            navbg: navbg,
            appbg: appbg,
            items: [
                {title: "ABOUT", icon: "mdi-face"},
                {title: "EDUCATION", icon: "mdi-book-open-page-variant"},
                {title: "PROJECT", icon: "mdi-alpha-p-circle"},
                {title: "EXPERIENCE", icon: "mdi-briefcase"},
                {title: "SKILLS", icon: "mdi-arm-flex"},
                {title: "INTEREST", icon: "mdi-alpha-i-circle-outline"},
                {title: "AWARDS", icon: "mdi-trophy"},
                {title: "PUBLICATIONS", icon: "mdi-file-pdf-box"},
            ]
        }
    },
}
</script>

<style>
.v-image{
    border-radius: 50%;
}
</style>