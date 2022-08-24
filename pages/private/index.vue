<template>
  <!-- component -->
  <div class="overflow-x-hidden pt-14 bg-gray-100">
    <div class="px-6 py-8">
      <div class="container flex justify-between mx-auto">
        <div class="w-full lg:w-9/12">
          <div class="flex items-center justify-between">
            <h1 class="text-xl font-bold text-gray-700 md:text-2xl">Posts</h1>
          </div>

          <Posts :items="items" :privatepost="'True'" />

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
    middleware: "private",
  async asyncData({ app, $axios }) {
    var e = app.$auth.getToken("local");
    let limit = 4; //change here to set the limit
    // const prefetch = await $axios.$get("blogs?_limit=" + limit);
    let prefetch = await $axios({
      headers: {
        Authorization: e,
      },
      url: "graphql",
      method: "post",
      data: {
        query: `query custom{
  blogs1: privateblogs(limit: ${limit}, sort: "Title:asc"){
    Title,
    Context,
    Date,
    id,
    Feature{
      url
    },
    category{
      name
    },
    users_permissions_user{
      username
    },
  },
    users{
    name,
    profile{
      url,
    },
  },
    categories{
    name,
  },
  blogs2: blogs(limit:1, sort: "id:desc"){
    Title,
    Context,
    Date,
    category{
      name
    }
  }, 
    blogscount: privateblogs{
      id
  },

}`,
      },
    });
    const items = prefetch.data.data.blogs1;
    const categories = prefetch.data.data.categories;
    const latest = prefetch.data.data.blogs2[0];
     const users = prefetch.data.data.users;
    const count = Math.round(prefetch.data.data.blogscount.length / limit);
    console.log(items)
    return { items, count, latest, categories, users };
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
    async fetchData() {
      await this.$axios({
        headers: {
          Authorization: this.$auth.getToken("local"),
        },
        url: "graphql",
        method: "post",
        data: {
          query: `query custom{
  blogs1: privateblogs(limit: ${this.limit}, start: ${
            this.currentpage * this.limit - this.limit
          }, sort: "Title:asc"){
    Title,
    Context,
    Date,
    id,
    Feature{
      url
      },
      category{
      name
    }
  },

}`,
        },
      }).then((res) => {
        this.items = res.data.data.blogs1;
        console.log(this.items[0]);
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