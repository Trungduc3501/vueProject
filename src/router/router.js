import { createRouter, createWebHistory } from "vue-router";
import AddStudent from "../components/AddStudent.vue";
import Description from "../components/Description.vue";
import Home from "../components/Home.vue";
import List from "../components/List.vue";

const routes=[
    {
        path:"/",
        component: Home
    },
    {
        path:"/ListData",
        component: List
    },
    {
        path:"/DescriptionData",
        component: Description
    },
    {
        path:"/Add",
        component: AddStudent
    },
]
export const router = createRouter({
    history: createWebHistory(),
    routes
})