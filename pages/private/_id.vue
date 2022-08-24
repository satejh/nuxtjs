<template>
  <div class="bg-gray-100 flex flex-wrap py-24">
    <!-- Post Section -->
     <div class="container flex justify-between mx-auto">
    <div
      class="
      w-full
        lg:w-9/12
        mx-auto
        overflow-hidden
        bg-white
        rounded-lg
        shadow-md
        dark:bg-gray-800
      "
    >
      <img
        class="object-cover w-full h-64"
        :src="'https://api.blogerpedia.com' + items.Feature.url"
        alt="Article"
      />

      <div class="p-6">
        <div>
          <span
            class="
              text-xs
              font-medium
              text-blue-600
              uppercase
              dark:text-blue-400
            "
            >{{ items.Category }}</span
          >
          <a
            href="#"
            class="
              block
              mt-2
              text-2xl
              font-semibold
              text-gray-800
              dark:text-white
              hover:text-gray-600
              hover:underline
            "
            >{{ items.Title }}</a
          >
          <div class="mt-4">
            <div class="flex items-center">
              <div class="flex items-center">
                <img
                  class="object-cover h-10 rounded-full"
                  src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                  alt="Avatar"
                />
                <a
                  href="#"
                  class="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                  >Jone Doe</a
                >
              </div>
              <span class="mx-1 text-xs text-gray-600 dark:text-gray-300"
                >21 SEP 2015</span
              >
            </div>
          </div>
          <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
            <span v-html="content"></span>
          </p>
        </div>
      </div>
    </div>
    <Aside :categories="categories" :latest="latest" />
     </div>
  </div>

  <!-- <div class="max-w-screen-xl pt-14 mx-auto">

    <main class="mt-10">
      <div
        class="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative"
        style="height: 24em"
      >
        <div
          class="absolute left-0 bottom-0 w-full h-full z-10"
          style="
            background-image: linear-gradient(
              180deg,
              transparent,
              rgba(0, 0, 0, 0.7)
            );
          "
        ></div>
        <img
          :src="'http://192.168.1.15:1337' + items.Feature.url"
          class="absolute left-0 top-0 w-full h-full z-0 object-cover"
        />
        <div class="p-4 absolute bottom-0 left-0 z-20">
          <a
            href="#"
            class="
              px-4
              py-1
              bg-black
              text-gray-200
              inline-flex
              items-center
              justify-center
              mb-2
            "
            >{{ items.category.name }}</a
          >
          <h2 class="text-4xl font-semibold text-gray-100 leading-tight">
            {{ items.Title }}
          </h2>
          <div class="flex mt-3">
            <img
              src="https://randomuser.me/api/portraits/men/97.jpg"
              class="h-10 w-10 rounded-full mr-2 object-cover"
            />
            <div>
              <p class="font-semibold text-gray-200 text-sm">Mike Sullivan</p>
              <p class="font-semibold text-gray-400 text-xs">
                {{ items.Date }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div v-html="content"></div>
    </main>
  </div>-->
</template>

<script>
export default {
  middleware: "private",
  async asyncData({ $axios, route, redirect, $md }) {
    let preitems = await $axios({
      url: "graphql",
      method: "post",
      data: {
        query: `query custom{
  blogs1: privateblogs( where: { id: ${route.params.id}} ){
    Title,
    Context,
    Date,
    id,
    Feature{
      url
    },
    Description,
    category{
      name
    }
  },
    categories{
    name,
  },
  blogs2: blogs(limit:1, sort: "created_at:desc"){
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
    const items = preitems.data.data.blogs1[0];
    console.log(items.id);
    const categories = preitems.data.data.categories;
    const latest = preitems.data.data.blogs2[0];
    const prerender = items.Description.split("/uploads/").join(
      "https://api.blogerpedia.com/uploads/"
    ); //change to domainn name
    console.log(prerender);
    const content = $md.render(prerender);
    return { items, content, categories, latest };
  },
  data() {
    return {
      items: [],
    };
  },
};
</script>