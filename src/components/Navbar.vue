<template>
    <v-navigation-drawer
        permanent
        expand-on-hover
        :src="bg"
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
</template>

<script>
import Rohit from '@/assets/rohit.jpg'
import bg from '@/assets/bg2.jpg'

export default {
    data() {
        return {
            image: Rohit,
            bg: bg,
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