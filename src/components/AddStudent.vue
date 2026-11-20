
<template>
    <div class="min-h-screen bg-gray-100 p-8">
        <div class="mx-auto max-w-3xl">

            <!-- Header -->
            <div class="mb-6">
                <h1 class="text-3xl font-bold text-gray-800">
                    Thêm mới dữ liệu
                </h1>
                <p class="mt-2 text-gray-500">
                    Nhập thông tin để thêm sinh viên mới
                </p>
            </div>

            <!-- Form -->
            <div class="rounded-xl bg-white p-8 shadow-md">

                <form action="" @submit.prevent="addStudent" class="space-y-6">

                    <div>
                        <label for="name" class="mb-2 block font-semibold text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            v-model="students.name"
                            placeholder="Nhập tên sinh viên"
                            class="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                        >
                    </div>

                    <div>
                        <label for="age" class="mb-2 block font-semibold text-gray-700">
                            Age
                        </label>
                        <input
                            type="text"
                            id="age"
                            v-model="students.age"
                            placeholder="Nhập tuổi"
                            class="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                        >
                    </div>

                    <div>
                        <label for="email" class="mb-2 block font-semibold text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            v-model="students.email"
                            placeholder="Nhập email"
                            class="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                        >
                    </div>

                    <div>
                        <label for="image" class="mb-2 block font-semibold text-gray-700">
                            Image
                        </label>
                        <input
                            type="text"
                            id="image"
                            v-model="students.image"
                            placeholder="Nhập đường dẫn hình ảnh"
                            class="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                        >
                    </div>

                    <!-- Button -->
                    <div class="flex gap-3 pt-2">
                        <button
                            type="submit"
                            class="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-md transition duration-200 hover:bg-blue-700 hover:shadow-lg active:scale-95"
                        >
                            + Thêm dữ liệu
                        </button>

                        <a
                            href="http://localhost:5173/"
                            class="rounded-lg border border-gray-300 bg-gray-100 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-200"
                        >
                            Quay lại
                        </a>
                    </div>

                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { reactive } from 'vue';

const students = reactive({
    name: "",
    age: "",
    email: "",
    image: ""
});
const addStudent = async () => {
    
    if (!students.name||!students.email||!students.age) {
        alert("Vui lòng nhập đủ thông tin");
        return;
    }
    try {
        const { data } = await axios.post("http://localhost:3000/students", {
            id: Date.now(),
            name: students.name,
            age: students.age,
            email: students.email,
            image: students.image
        });

        // Xóa dữ liệu sau khi thêm thành công
        Object.assign(students, {
            name: "",
            age: "",
            email: "",
            image: ""
        });
        alert("Thêm dữ liệu thành công");

        return data;

    } catch (error) {
        alert(error);
    }
}
</script>

<style scoped>
</style>
