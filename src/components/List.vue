
<template>
    <div class="min-h-screen bg-gray-100 p-8">
        <div class="mx-auto max-w-6xl">

            <!-- Header -->
            <div class="mb-6">
                <h1 class="text-3xl font-bold text-gray-800">
                    List Vue
                </h1>
<a
    href="http://localhost:5173/"
    class="inline-block rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white shadow-md transition duration-200 hover:bg-blue-700 hover:shadow-lg active:scale-95"
>
    ← Quay trở lại trang chủ
</a>    
<a
    href="http://localhost:5173/Add"
    class=" ml-3 inline-block rounded-lg bg-green-600 px-5 py-3 font-semibold text-white shadow-md transition duration-200 hover:bg-green-700 hover:shadow-lg active:scale-95"
>
    Thêm mới dữ liệu
</a>  
            <p class="mt-2 text-gray-500">
                    Danh sách thông tin sinh viên
                </p>
            </div>

            <!-- Table -->
            <div class="overflow-hidden rounded-xl bg-white shadow-md">

                <table class="w-full text-left">

                    <thead class="bg-blue-600 text-white">
                        <tr>
                            <th class="px-6 py-4 font-semibold">Id</th>
                            <th class="px-6 py-4 font-semibold">Name</th>
                            <th class="px-6 py-4 font-semibold">Age</th>
                            <th class="px-6 py-4 font-semibold">Email</th>
                            <th class="px-6 py-4 font-semibold">Image</th>
                        </tr>
                    </thead>

                    <tbody class="divide-y divide-gray-100">

                        <tr
                            v-for="(data,key) in students"
                            :key="data.id"
                            class="transition duration-200 hover:bg-blue-50"
                        >
                            <td class="px-6 py-4 font-medium text-gray-700">
                                {{ key+1 }}
                            </td>

                            <td class="px-6 py-4 font-semibold text-gray-800">
                                {{ data.name }}
                            </td>

                            <td class="px-6 py-4">
                                <span class="rounded-lg bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
                                    {{ data.age }}
                                </span>
                            </td>

                            <td class="px-6 py-4 text-gray-600">
                                {{ data.email }}
                            </td>

                            <td class="px-6 py-4">
                                <img
                                    :src="data.image"
                                    alt="Student image"
                                    class="h-14 w-14 rounded-full border-2 border-gray-200 object-cover shadow-sm"
                                />
                            </td>
                        </tr>

                    </tbody>
                </table>

            </div>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

const students = ref([]);

onMounted(async () => {
    const { data } = await axios.get("http://localhost:3000/students");
    students.value = data;
});
</script>

<style scoped>
</style>
