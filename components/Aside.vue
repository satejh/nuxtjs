<template>
  <div class="hidden w-3/12 -mx-8 lg:block">
    <div class="px-8">
      <h1 class="mb-4 ml-2 font-mono text-xl font-bold text-gray-700">Authors</h1>
      <div
        class="
          flex flex-col
          max-w-sm
          px-6
          py-4
          mx-auto
          bg-white
          rounded-lg
          shadow-md
        "
      >
        <ul class="-mt-4">
          <li
            class="flex items-center mt-6"
            v-for="(item, index) in users"
            :key="index"
          >
            <img
              :src="'https://api.blogerpedia.com' + item.profile.url"
              alt="avatar"
              class="object-cover w-10 h-10 mr-2 rounded-full"
            />
            <p>
              <a
                href="#"
                class="mx-1 font-bold text-gray-700 hover:underline"
                >{{ item.name }}</a
              >
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div class="px-8 mt-10">
      <h1 class="mb-4 ml-2 font-mono text-xl font-bold text-gray-700">Categories</h1>
      <div
        class="
          flex flex-col
          max-w-sm
          px-4
          py-6
          mx-auto
          bg-white
          rounded-lg
          shadow-md
        "
      >
        <ul>
          <li class="py-1" v-for="(item, index) in categories" :key="index">
            <NuxtLink
              class="
                mx-1
                font-bold
                text-gray-700
                hover:text-gray-600
                hover:underline
              "
              :to="{ path: '/categories/' + item.name }"
              >{{item.name}}</NuxtLink
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="px-8 mt-10">
      <h1 class="mb-4 font-mono ml-2 text-xl font-bold text-gray-700">Recent Post</h1>
      <div
        class="
          flex flex-col
          max-w-sm
          px-8
          py-6
          mx-auto
          bg-white
          rounded-lg
          shadow-md
        "
      >
        <div class="flex items-center justify-center">
          <a
            href="#"
            class="
              px-2
              py-1
              text-sm text-black
              font-bold
              bg-red-100
              rounded
              hover:bg-red-200
            "
            >{{ latest.category.name }}</a
          >
        </div>
        <div class="mt-4">
          <a
            href="#"
            class="text-lg font-medium text-gray-700 hover:underline"
            >{{ latest.Title }}</a
          >
        </div>
        <div class="flex items-center justify-between mt-4">
          <div class="flex items-center">
            <img
              src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
              alt="avatar"
              class="object-cover w-8 h-8 rounded-full"
            /><a href="#" class="mx-3 text-sm text-gray-700 hover:underline"
              >Alex John</a
            >
          </div>
          <span class="text-sm font-bold text-gray-600">{{ latest.Date }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["categories", "latest", "users"],
};
</script>