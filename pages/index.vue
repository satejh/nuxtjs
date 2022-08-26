<template>
  <div class="bg-gray-100 px-4 py-8 lg:px-8 lg:py-15">
    <header class="mt-14 rounded-lg bg-white dark:bg-gray-800">
      <div class="shadow-md container px-6 py-2 mx-auto">
        <div class="items-center lg:flex">
          <div class="w-full lg:w-1/2">
            <div class="lg:max-w-lg px-3">
              <h1
                class="
                  font-sans
                  text-xl
                  font-extrabold
                  leading-none
                  tracking-tight
                  lg:text-4xl
                  xl:text-4xl
                  uppercase
                  dark:text-white
                "
              >
                # Jenkins Build
              </h1>
              <p class="mt-4 ml-2 text-gray-600 dark:text-gray-400">
                Ask, Learn & Grow Yourself
                <br>#Blogerpedia ##
              </p>
              <button
                @click="goto('art1')"
                class="
                  w-full
                  px-3
                  py-2
                  mt-6
                  text-xs
                  font-medium
                  text-white
                  uppercase
                  transition-colors
                  duration-200
                  transform
                  bg-blue-600
                  rounded-md
                  lg:w-auto
                  sm:w-46
                  hover:bg-blue-500
                  focus:outline-none focus:bg-blue-500
                "
              >
                Start Reading
              </button>
            </div>
          </div>




          <div
            class="
              flex
              items-center
              justify-center
              w-full
              mt-6
              lg:mt-0 lg:w-1/2
            "
          >
            <img
              class="h-48 w-96 lg:max-w-2xl"
              src="../assestss/nuxt.svg"
              alt="Nuxt.svg"
            />
          </div>
        </div>
      </div>
    </header>
    <div
      ref="art1"
      class="
        px-2
        py-10
        mx-auto
        sm:max-w-xl
        md:max-w-full
        lg:max-w-screen-xl
        md:px-24
        lg:px-0 lg:py-10
      "
    >
      <div class="grid gap-10 row-gap-8 lg:grid-cols-5">
        <div
          class="
            lg:col-span-2
            p-8
            shadow-md
            rounded-lg
            bg-white
            hover:shadow-xl
          "
        >
          <p
            class="
              mb-4
              text-xs
              font-semibold
              tracking-wide
              text-indigo-600
              uppercase
            "
          >
            <span class="bg-indigo-100 p-2 rounded-md">{{
              latest[0].Date
            }}</span>
          </p>
          <div class="mb-3">
            <NuxtLink
              class="
                inline-block
                text-black
                transition-colors
                duration-200
                hover:text-deep-purple-accent-400
              "
              :to="{ path: '/posts/' + latest[0].id }"
            >
              <p
                class="
                  font-sans
                  text-xl
                  font-extrabold
                  leading-none
                  tracking-tight
                  lg:text-4xl
                  xl:text-5xl
                "
              >
                {{ latest[0].Title }}
              </p></NuxtLink
            >
            <img
              :src="'https://api.blogerpedia.com' + latest[0].Feature.url"
              class="object-cover h-full w-96 mt-2 p-1 rounded-lg"
              alt=""
            />
          </div>
          <p class="mb-4 text-base text-gray-700 md:text-lg">
            {{ latest[0].Context }}
          </p>
          <div class="flex items-center">
            <a href="/" aria-label="Author" class="mr-3">
              <img
                alt="avatar"
                :src="
                  'https://api.blogerpedia.com' +
                  latest[0].users_permissions_user.profile.url
                "
                class="object-cover w-10 h-10 rounded-full shadow-sm"
              />
            </a>
            <div>
              <a
                href="/"
                aria-label="Author"
                class="
                  font-semibold
                  text-gray-800
                  transition-colors
                  duration-200
                  hover:text-deep-purple-accent-400
                "
                >{{ latest[0].users_permissions_user.name }}</a
              >
              <p class="text-sm font-medium leading-4 text-gray-600">Author</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col space-y-8 lg:col-span-3">
          <div class="p-6 shadow-md rounded-lg bg-white hover:shadow-lg">
            <p
              class="
                mb-4
                text-xs
                font-semibold
                tracking-wide
                text-indigo-600
                uppercase
              "
            >
              <span class="bg-indigo-100 p-2 rounded-md">
                {{ latest[1].Date }}</span
              >
            </p>
            <div class="mb-3">
              <NuxtLink
                class="
                  inline-block
                  text-black
                  transition-colors
                  duration-200
                  hover:text-deep-purple-accent-400
                "
                :to="{ path: '/posts/' + latest[1].id }"
              >
                <p
                  class="
                    font-sans
                    text-xl
                    font-extrabold
                    leading-none
                    tracking-tight
                    lg:text-2xl
                  "
                >
                  {{ latest[1].Title }}
                </p></NuxtLink
              >
            </div>
            <p class="mb-4 text-base text-gray-700 md:text-lg">
              {{ latest[1].Context }}
            </p>
            <div class="flex items-center">
              <a href="/" aria-label="Author" class="mr-3">
                <img
                  alt="avatar"
                  :src="
                    'https://api.blogerpedia.com' +
                    latest[1].users_permissions_user.profile.url
                  "
                  class="object-cover w-10 h-10 rounded-full shadow-sm"
                />
              </a>
              <div>
                <a
                  href="/"
                  aria-label="Author"
                  class="
                    font-semibold
                    text-gray-800
                    transition-colors
                    duration-200
                    hover:text-deep-purple-accent-400
                  "
                  >{{ latest[1].users_permissions_user.name }}</a
                >
                <p class="text-sm font-medium leading-4 text-gray-600">
                  Author
                </p>
              </div>
            </div>
          </div>
          <div class="p-6 shadow-md rounded-lg bg-white hover:shadow-lg">
            <p
              class="
                mb-4
                text-xs
                font-semibold
                tracking-wide
                text-indigo-600
                uppercase
              "
            >
              <span class="bg-indigo-100 p-2 rounded-md">
                {{ latest[2].Date }}</span
              >
            </p>
            
            <div class="mb-3">
              <NuxtLink
                class="
                  inline-block
                  text-black
                  transition-colors
                  duration-200
                  hover:text-deep-purple-accent-400
                "
                :to="{ path: '/posts/' + latest[2].id }"
              >
                <p
                  class="
                    font-sans
                    text-xl
                    font-extrabold
                    leading-none
                    tracking-tight
                    lg:text-2xl
                  "
                >
                  {{ latest[2].Title }}
                </p></NuxtLink
              >
            </div>
            <p class="mb-4 text-base text-gray-700 md:text-lg">
              {{ latest[2].Context }}
            </p>
            <div class="flex items-center">
              <a href="/" aria-label="Author" class="mr-3">
                <img
                  alt="avatar"
                  :src="
                    'https://api.blogerpedia.com' +
                    latest[2].users_permissions_user.profile.url
                  "
                  class="object-cover w-10 h-10 rounded-full shadow-sm"
                />
              </a>
              <div>
                <a
                  href="/"
                  aria-label="Author"
                  class="
                    font-semibold
                    text-gray-800
                    transition-colors
                    duration-200
                    hover:text-deep-purple-accent-400
                  "
                  >{{ latest[2].users_permissions_user.name }}</a
                >
                <p class="text-sm font-medium leading-4 text-gray-600">
                  Author
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>







    
    <div class="grid gap-8 mx-2 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
      <div
        class="
        shadow-md rounded-md
          overflow-hidden
          transition-shadow
          duration-300
          bg-white
          rounded
          shadow-sm
        "
        v-for="(item, index) in items"
        :key="index"
      >
        <img
          :src="'https://api.blogerpedia.com' + item.Feature.url"
          class="object-cover w-full h-64"
          alt=""
        />
        <div class="p-5">
          <p class="mb-3 text-xs font-semibold tracking-wide uppercase">
            <a
              href="/"
              class="
                transition-colors
                duration-200
                text-blue-gray-900
                hover:text-deep-purple-accent-700
              "
              aria-label="Category"
              title="traveling"
              >{{ item.category.name }}</a
            >
            <span class="text-gray-600">— {{ item.Date }}</span>
          </p>
          <a
            href="/"
            aria-label="Category"
            class="
              inline-block
              mb-3
              text-2xl
              font-bold
              leading-5
              transition-colors
              duration-200
              hover:text-deep-purple-accent-700
            "
            >{{ item.Title }}</a
          >
          <p class="mb-2 text-gray-700">
            {{ item.Context }}
          </p>
          <NuxtLink
            :to="{ path: '/posts/' + item.id }"
            class="
              inline-flex
              items-center
              font-semibold
              transition-colors
              duration-200
              text-purple-accent-400
              hover:text-purple-800
            "
            >Read More..</NuxtLink
          >
        </div>
      </div>
    </div>
    <div
      class="
        px-4
        py-16
        mx-auto
        sm:max-w-xl
        md:max-w-full
        lg:max-w-screen-xl
        md:px-24
        lg:px-8 lg:py-20
      "
    >
      <div
        class="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full"
      >
        <div class="flex" v-for="(item, index) in items" :key="index">
          <div class="pt-1 mr-6 text-center">
            <div class="px-2 pb-1 mb-1 border-b border-gray-400">
              <p class="text-sm text-blue-gray-700">
                {{
                  new Date(item.published_at).toLocaleString("en-us", {
                    month: "short",
                  })
                }}
              </p>
            </div>
            <div class="px-2">
              <p class="text-lg font-bold">
                {{
                  new Date(item.published_at).toLocaleString("en-us", {
                    year: "numeric",
                  })
                }}
              </p>
            </div>
          </div>
          <div>
            <div class="mb-2">
              <NuxtLink
                :to="{ path: '/categories/' + item.category.name }"
                class="
                  text-xs
                  font-semibold
                  tracking-wide
                  uppercase
                  transition-colors
                  duration-200
                  text-deep-purple-accent-400
                  hover:text-deep-purple-800
                "
                aria-label="Category"
                title="Delevopment"
                >{{ item.category.name }}</NuxtLink
              >
            </div>
            <div class="mb-2">
              <NuxtLink
                :to="{ path: '/posts/' + item.id }"
                aria-label="Article"
                class="
                  inline-block
                  text-xl
                  font-bold
                  leading-5
                  text-black
                  transition-colors
                  duration-200
                  hover:text-deep-purple-accent-400
                "
                >{{ item.Title }}</NuxtLink
              >
            </div>

            <p class="mb-5 text-gray-700">
              {{ item.Context }}
            </p>
            <div class="flex items-center">
              <a href="/" aria-label="Author" title="Author" class="mr-3">
                <img
                  :src="
                    'https://api.blogerpedia.com' +
                    item.users_permissions_user.profile.url
                  "
                  alt="avatar"
                  class="object-cover w-10 h-10 rounded-full shadow-sm"
                />
              </a>
              <div>
                <a
                  href="/"
                  aria-label="Author"
                  title="Author"
                  class="
                    font-semibold
                    text-gray-800
                    transition-colors
                    duration-200
                    hover:text-deep-purple-accent-400
                  "
                  >{{ item.users_permissions_user.name }}</a
                >
                <p class="text-sm font-medium leading-4 text-gray-600">
                  Author
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cookie from "js-cookie";

export default {
  async asyncData({ $axios, app, context }) {
    let prefetch = await $axios({
      url: "graphql",
      method: "post",
      data: {
        query: `query custom{
  blogs1: blogs(limit: 3){
    id,
    Title,
    Context,
    Date,
    id,
    published_at,
    category{
      name
    },
        users_permissions_user{
      name,
      profile{
        url
      },
    },
    Feature{
      url
    }
  },

  blogs2: blogs(limit: 3, sort: "date:desc"){
    id,
    published_at,
    Title,
    Context,
    Date,
    category{
      name
    },
        Feature{
      url
    },
        users_permissions_user{
      name,
      profile{
        url
      },
    },
  }, 

}


`,
      },
    });
    const items = prefetch.data.data.blogs1;
    const latest = prefetch.data.data.blogs2;

    return { items, latest };
  },

  data() {
    return {
      items: [],
    };
  },
  mounted() {
    // console.log(window.localStorage.getItem('auth.strategy'))
  },
  methods: {
    goto(refName) {
      var element = this.$refs[refName];
      var top = element.offsetTop;
      window.scrollTo(0, top);
    },
  },
};
</script>

<style>
</style>
