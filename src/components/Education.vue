<template>
    <panel title="ACADEMIC BACKGROUND">
        <v-card v-for="Academic in Academics" :key="Academic.degree" flat class="px-2" :color="`${Academic.color} lighten-5`">
            <v-row :class="`${Academic.degreeId} px-2`">
                <v-row>
                    <v-col xs12 sm6 md3>
                        <div class="text-caption blue--text text-center">
                            Degree
                        </div>
                        <div class="text-subtitle-1 font-weight-bold grey--text text--darken-1">
                            {{Academic.degree}}
                        </div>
                    </v-col>
                    <v-col xs12 sm6 md3>
                        <div class="text-caption deep-purple--text text--lighten-1 text-center">
                            College
                        </div>
                        <div class="text-subtitle-1 font-weight-bold grey--text text--darken-1">
                            {{Academic.college}}
                        </div>
                    </v-col>
                    <v-col xs12 sm6 md2>
                        <div class="text-caption light-green--text text--darken-3 text-center">
                            Period (In A.D.)
                        </div>
                        <div class="text-subtitle-1 font-weight-bold grey--text text--darken-1 text-center">
                            {{Academic.periodAD}}
                        </div>
                    </v-col>
                    <v-col xs12 sm6 md2>
                        <div class="text-caption light-green--text text--darken-3 text-center">
                            Period (In B.S.)
                        </div>
                        <div class="text-subtitle-1 font-weight-bold grey--text text--darken-1 text-center">
                            {{Academic.periodBC}}
                        </div>
                    </v-col>
                    <v-col xs12 sm6 md2>
                        <div class="text-caption amber--text text--darken-3 text-center">
                            Status
                        </div>
                        <div align="center" class="mt-3">
                            <v-chip small dark :color="`${Academic.color}`">
                                {{Academic.status}}
                            </v-chip>
                        </div>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col xs12 sm6 md2>
                        <div class="text-caption teal--text text--darken-2 text-center">
                            Division
                        </div>
                        <div class="text-subtitle-1 font-weight-bold grey--text text--darken-1 text-center">
                            {{Academic.division}}
                        </div>
                    </v-col>
                    <v-col xs12 sm6 md2>
                        <div class="text-caption teal--text text--accent-4 text-center">
                            Percentage
                        </div>
                        <div class="text-subtitle-1 font-weight-bold grey--text text--darken-1 text-center">
                            {{Academic.percentage}} %
                        </div>
                    </v-col>
                    <v-col xs12 xm6 md5>
                        <div class="text-caption blue--text text--accent-3 text-center">
                            Board
                        </div>
                        <div class="text-subtitle-1 font-weight-bold grey--text text--darken-1">
                            {{Academic.board}}
                        </div>
                    </v-col>
                    <v-col xs2>
                         <div align="center">
                             <v-tooltip bottom color="indigo accent-3">
                                <template v-slot:activator="{ on }">
                                    <v-btn icon :color="`${Academic.color}`" class="ml-12" v-on="on">
                                        <v-icon>mdi-chart-areaspline</v-icon>
                                    </v-btn>
                                </template>
                                <span>View all record of {{Academic.degreeId}}</span>
                            </v-tooltip>
                        </div>
                    </v-col>
                </v-row>
            </v-row>
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
            Academics: [
                {degreeId: 'bachelors', degree: 'Bachelors in Geomatics Engineering', college: 'Western Regional Campus', periodAD: '2015 - 2019', periodBC: '2072 - 2076', status: 'Completed', division: 'Distinction', percentage: '80.04', board: 'Institute of Engineerig (I.O.E.), Tribhuvan University (T.U.)', color:'orange'},
                {degreeId: 'highSchool', degree: 'Higher Secondary Education', college: 'Nepal Mega College', periodAD: '2013 - 2015', periodBC: '2069 - 2071', status: 'Completed', division: 'Distinction', percentage: '81.40', board: 'Higher Secondary Education Board (H.S.E.B.)', color:'cyan'},
                {degreeId: 'school', degree: 'Primary & Secondary Education', college: 'Nightingale International Secondary School', periodAD: '2003 - 2013', periodBC: '2059 - 2069', status: 'Completed', division: 'Distinction', percentage: '83.88', board: 'School Leaving Certificate Board (S.L.C.)', color:'purple'},
            ]
        }
    }
}
</script>

<style scoped>
.bachelors{
    border-left: 4px solid #FF9800;
    border-right: 4px solid #FF9800;
}
.highSchool{
    border-left: 4px solid #18FFFF;
    border-right: 4px solid #18FFFF;
}
.school{
    border-left: 4px solid #D500F9;
    border-right: 4px solid #D500F9;
}
</style>