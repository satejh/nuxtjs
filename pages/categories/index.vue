<template>
  <!-- component -->
  <div class="overflow-x-hidden pt-14 bg-gray-100">
    <div class="px-6 py-8">
      <div class="container flex justify-between mx-auto">
        <div class="w-full lg:w-8/12">
          <p class="font-bold text-gray-700 md:text-xl lg:text-2xl mx-1 pb-4">
            Explore From Categories
          </p>
          <section class="bg-white dark:bg-gray-800 rounded-md shadow-lg">
            <div class="container px-6 py-8 mx-auto">
              <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div v-for="(item, index) in categories" :key="index">
                  <img
                    class="object-cover w-12"
                    :src="'https://api.blogerpedia.com' + item.categorypic.url"
                    alt="Article"
                  />

                  <h1
                    class="
                      mt-4
                      text-xl
                      font-semibold
                      text-gray-800
                      dark:text-white
                    "
                  >
                    {{ item.name }}
                  </h1>

                  <p class="mt-2 text-gray-500 dark:text-gray-400">
                    {{ item.descriptionofcategory }}
                  </p>
                  <a
                    aria-label=""
                    class="
                      inline-flex
                      items-center
                      font-semibold
                      transition-colors
                      duration-200
                      text-deep-purple-accent-400
                      hover:text-deep-purple-800
                    "
                  >
                    <NuxtLink
                      class="
                        px-1
                        py-1
                        font-bold
                        text-indigo-700
                        hover:text-indigo-400
                      "
                      :to="{ path: '/categories/' + item.name }"
                      >Explore </NuxtLink
                    ><span class="text-indigo-700"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                          clip-rule="evenodd"
                        /></svg></span
                  ></a>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Aside :categories="categories" :latest="latest" :users="users" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    let limit = 4; //change here to set the limit
    let all = await $axios({
      url: "graphql",
      method: "post",
      data: {
        query: `
query custom{
  categories{
    name,
    descriptionofcategory,
    categorypic{
      url
    }
  },
    users{
    name,
    profile{
      url,
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
}  `,
      },
    });
    let categories = all.data.data.categories;
    let users = all.data.data.users;
    let latest = all.data.data.blogs[0];
    return { categories, latest, users };
  },
  data() {
    return {
      limit: 4, //change here too set the limit
      count: "",
      categories: [],
      latest: [],
    };
  },
  created() {},
  methods: {},
};
</script>