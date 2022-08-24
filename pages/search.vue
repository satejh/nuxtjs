<template>
  <div class="pt-28 pb-64">
    <section class="relative w-full max-w-md px-5 py-4 mx-auto rounded-md">
      <div class="relative">
        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
            <path
              d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </span>

        <input
          type="text"
          @keyup.enter="search"
          class="
            w-full
            py-3
            pl-10
            pr-4
            text-gray-700
            bg-white
            border border-gray-300
            rounded-md
            dark:bg-gray-800
            dark:text-gray-300
            dark:border-gray-600
            focus:border-blue-500
            dark:focus:border-blue-500
            focus:outline-none
            focus:ring
          "
          placeholder="Search"
          v-model="query"
        />
      </div>
      <div v-if="items.length">
        <div
          class="
            absolute
            inset-x-0
            px-6
            py-3
            mx-5
            mt-4
            overflow-y-auto
            bg-white
            border border-gray-300
            rounded-md
            max-h-72
            dark:bg-gray-800
            dark:border-transparent
          "
        >
          <a
            href=""
            class="block py-1"
            v-for="(item, index) in items"
            :key="index"
          >
            <h3
              class="
                font-medium
                text-gray-700
                dark:text-gray-100
                hover:underline
              "
            >
              <NuxtLink :to="{ path: '/posts/' + item.id }">{{
                item.Title
              }}</NuxtLink>
            </h3>
            <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
              {{ item.Date }}
            </p>
          </a>
        </div>
      </div>

    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: "",
      items: [],
    };
  },
  mounted() {},
  methods: {
    async search() {
      this.error = null;
      try {
        var item = await this.$axios.get("/blogs?Title_contains=" + this.query);
        this.items = item.data;
        console.log(this.items);
      } catch (e) {
        this.error = e.response.data.message[0].messages[0].message;
      }
    },
  },
};
</script>
<style scoped>
/* width */
::-webkit-scrollbar {
  width: 16px;
  height: 16px;
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: 100vh;
  background: #edf2f7;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #cbd5e0;
  border-radius: 100vh;
  border: 3px solid #edf2f7;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #a0aec0;
}
</style>