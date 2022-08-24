<template>
  <!-- component -->
  <div class="overflow-x-hidden pt-14 bg-gray-100">
    <div class="px-6 py-8">
      <div class="container flex justify-between mx-auto">
        <div class="w-full lg:w-9/12">
          <div class="flex items-center justify-between">
            <ol class="list-reset flex text-grey-dark">
              <h1 class="text-xl font-mono font-bold text-gray-700 md:text-xl">
                <li class="mr-2 mt-1">
                  <NuxtLink class="hover:text-gray-500" to="/"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      /></svg
                  ></NuxtLink>
                </li>
              </h1>
              <h1>
                <li class="text-gray-700 mr-2 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 5l7 7-7 7M5 5l7 7-7 7"
                    />
                  </svg>
                </li>
              </h1>
              <h1 class="text-xl font-mono font-bold text-gray-700 md:text-xl">
                <li class="mr-2">
                  <NuxtLink class="hover:text-gray-500" to="/categories"
                    >Categories</NuxtLink
                  >
                </li>
              </h1>
              <h1>
                <li class="text-gray-700 mr-2 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 5l7 7-7 7M5 5l7 7-7 7"
                    />
                  </svg>
                </li>
              </h1>
              <h1 class="text-xl font-mono font-bold text-gray-700 md:text-xl">
                {{ $route.params.id }}
              </h1>
            </ol>
          </div>

          <Posts :items="items" :privatepost="'False'" />

          <div class="mt-8">
            <div class="flex">
              <div>
                <a
                  class="
                    shadow-md
                    cursor-not-allowed
                    px-3
                    py-2
                    mx-1
                    font-medium
                    text-gray-500
                    bg-white
                    rounded-md
                  "
                >
                  Page No: {{ currentpage }} of {{ count }}
                </a>
              </div>

              <div v-if="currentpage <= count && currentpage >= 2">
                <a
                  @click="previouspage()"
                  class="
                    shadow-md
                    px-3
                    py-2
                    mx-1
                    font-medium
                    text-gray-700
                    bg-white
                    rounded-md
                    hover:bg-blue-500
                    hover:text-white
                  "
                >
                  Previous
                </a>
              </div>
              <div v-else>
                <a
                  class="
                    shadow-md
                    cursor-not-allowed
                    px-3
                    py-2
                    mx-1
                    font-medium
                    text-gray-500
                    bg-white
                    rounded-md
                  "
                >
                  Previous
                </a>
              </div>
              <div v-if="currentpage >= count">
                <a
                  class="
                    shadow-md
                    cursor-not-allowed
                    px-3
                    py-2
                    mx-1
                    font-medium
                    text-gray-500
                    bg-white
                    rounded-md
                  "
                >
                  Next
                </a>
              </div>
              <div v-else>
                <a
                  @click="nextpagenew()"
                  class="
                    shadow-md
                    px-3
                    py-2
                    mx-1
                    font-medium
                    text-gray-700
                    bg-white
                    rounded-md
                    hover:bg-blue-500
                    hover:text-white
                  "
                >
                  Next
                </a>
              </div>
            </div>
          </div>
        </div>
        <Aside :categories="categories" :latest="latest" :users="users" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, route }) {
    const limit = 4; //change here to set the limit
    const all = await $axios({
      url: "graphql",
      method: "post",
      data: {
        query: `
query custom{

  categories2: categories{
    name,
  }, 
    categories1: categories(where: { name: "${route.params.id}"}){
    name,
    descriptionofcategory,
    blog(limit: ${limit}, start: 0, sort: "Title:asc"){
      id,
      Title,
      Date,
      Context,
      Feature{
        url
      },
          users_permissions_user{
      username
    },
    },
 
  },

  users{
    name,
    profile{
      url,
    },
  },

      categoriescount: categories(where: { name: "${route.params.id}"}){
    blog{
      id,
    },
  },
      blogs(limit:1, sort: "id:desc"){
    Title,
    Context,
    Date,
    category{
      name
    }
  },

}`,
      },
    });
    const items = all.data.data.categories1[0].blog;
    const categories = all.data.data.categories2;
    const latest = all.data.data.blogs[0];
    const count = Math.round(
      all.data.data.categoriescount[0].blog.length / limit
    );
    const users = all.data.data.users;
    return { items, categories, latest, count, users };
  },
  data() {
    return {
      items: [],
      limit: 4, //change here too set the limit
      count: "",
      categories: [],
      latest: [],
      currentpage: 1,
    };
  },
  created() {},
  methods: {
    fetchData() {
      this.$axios({
        url: "graphql",
        method: "post",
        data: {
          query: `query custom{
  categories(where: { name: "${this.$route.params.id}"}){
    name,
    descriptionofcategory,
    blog(limit: ${this.limit}, start: ${
            this.currentpage * this.limit - this.limit
          }, sort: "Title:asc"){
      id,
      Title,
      Date,
      Context,
      Feature{
        url
      },
    },
  },

}`,
        },
      }).then((res) => {
        this.items = res.data.data.categories[0].blog;
      });
    },

    nextpagenew() {
      this.currentpage = this.currentpage + 1;
      this.fetchData();
    },
    previouspage() {
      this.currentpage = this.currentpage - 1;
      this.fetchData();
    },
  },
};
</script>