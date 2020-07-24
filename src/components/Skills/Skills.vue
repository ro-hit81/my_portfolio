<template>
    <panel title="SKILLS" align="center">
        <v-expansion-panels v-model="panel" focusable popout>
            <v-expansion-panel>
                <v-expansion-panel-header class="teal--text text--accent-4">
                    Spatial
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <spatial />
                </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
                <v-expansion-panel-header class="teal--text text--accent-4">
                    Coding
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <programming />
                </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
                <v-expansion-panel-header class="teal--text text--accent-4">
                    Basic
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <basic />
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
    </panel>    
</template>

<script>
import Panel from '@/components/Panel'
import Programming from '@/components/Skills/Programming'
import Basic from '@/components/Skills/Basic'
import Spatial from '@/components/Skills/Spatial'

export default {
    components: {
        Panel,
        Programming,
        Basic,
        Spatial
    },
    data() {
        return {
            panel: 0
        }
    }
}
</script>