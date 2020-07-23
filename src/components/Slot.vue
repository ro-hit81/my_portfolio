<template>
    <v-container>
        <v-card>
            <v-toolbar class="teal accent-3" dark flat>
                <v-toolbar-title class="text-h5 font-weight-bold">{{title}}</v-toolbar-title>
            </v-toolbar>
            <div class="mx-1 my-1 py-2">
                <slot>
                </slot>
            </div>
        </v-card>
    </v-container>
</template>

<script>
export default {
    props: [
        'title'
    ]
}
</script>