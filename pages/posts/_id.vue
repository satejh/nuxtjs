<template>
  <div class="bg-white flex flex-wrap py-24">
    <!-- Post Section -->

    <div class="container flex justify-between mx-2">
      <!-- component -->

      <div class="w-full lg:w-9/12 mx-auto overflow-hidden">
        <img
          class="object-cover w-full h-96"
          :src="'https://api.blogerpedia.com' + items.Feature.url"
          alt="Article"
        />

        <div class="p-6">
          <div class="mb-4">
            <span
              class="
                text-sm
                font-bold
                tracking-wider
                leading-relaxed
                whitespace-normal
                subpixel-antialiased
                text-black
                bg-yellow-100
                p-2
                rounded-md
                uppercase
              "
              >{{ items.category.name }}</span
            >
            <h5
              class="
                block
                mt-4
                lg:text-3xl
                md:text-2xl
                font-semibold
                text-black
                dark:text-white
                hover:text-gray-800
              "
            >
              {{ items.Title }}
            </h5>
            <div class="mt-4">
              <div class="flex items-center">
                <a
                  href="#"
                  class="
                    mr-2
                    font-bold
                    text-indigo-700 text-sm
                    dark:text-gray-200
                  "
                  >@{{ items.users_permissions_user.name }}</a
                >
              </div>
              <div
                class="
                  text-sm
                  my-3
                  font-bold
                  text-green-600
                  dark:text-gray-300
                  rounded-md
                "
              >
                {{ items.Date }}
              </div>
            </div>
          </div>
          <hr />
          <!-- tracking-wider leading-relaxed -->
          <div
            id="para"
            class="
              mt-4
              text-black
              font-normal
              whitespace-normal
              subpixel-antialiased
            "
            v-html="content"
          ></div>
        </div>
      </div>

      <Asidesmall
        class="h-screen sticky top-20 bottom-hidden"
        :categories="categories"
        :latest="latest"
        :users="users"
      />
    </div>
    <div class="container flex justify-between mx-auto">
      <!-- component -->
      <div
        class="w-full w-9/12 mt-6 mx-10 overflow-hidden dark:bg-gray-800"
        v-if="comments == ''"
      >
        <h4 class="text-xl font-bold text-gray-700 md:text-2xl mx-24 mt-4">
          No Comments Yet!
        </h4>
      </div>
      <div
        v-else
        class="
          overflow-y-auto
          h-96
          w-full
          lg:w-9/12
          mt-6
          mx-8
          custom-scrollbar
          dark:bg-gray-800
        "
      >
        <h4 class="text-xl font-bold text-gray-700 md:text-3xl mb-4 mx-24">
          Comments
        </h4>
        <div
          class="
            bg-white
            dark:bg-gray-800
            text-black
            dark:text-gray-200
            mb-2
            p-4
            mx-24
            rounded-md
            shadow-md
          "
          v-for="(item, index) in comments"
          :key="index"
        >
          <div>
            <div class="p-2 rounded-xl">
              <p class="text-xs font-semibold tracking-wide text-indigo-600">
                <span class="p-2 mt-2 rounded-xl bg-indigo-100">
                  {{ item.users_permissions_user.name }}</span
                >
              </p>

              <span class="p-1 rounded-xl">
                <p>
                  <span>{{ item.content }}</span>
                </p>
              </span>
            </div>
            <div class="text-sm ml-4 mt-0.5 text-gray-500 dark:text-gray-400">
              {{ item.Date }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="isAuthenticated"
      class="mt-3 container flex justify-between mx-auto"
    >
      <!-- component-->
      <div class="my-6 mx-8 w-full overflow-hidden rounded-lg dark:bg-gray-800">
        <div class="flex shadow mb-4 w-full lg:w-9/12">
          <div class="w-full bg-white rounded-lg shadow-lg px-4 pt-2">
            <div class="flex flex-wrap -mx-3 mb-6">
              <h2 class="px-4 pt-3 pb-2 text-gray-800 text-lg">
                Add a new comment
              </h2>
              <div class="w-full md:w-full px-3 mb-2 mt-2">
                <textarea
                  v-model="commentdata"
                  class="
                    bg-gray-100
                    rounded
                    border border-gray-400
                    leading-normal
                    resize-none
                    w-full
                    h-20
                    py-2
                    px-3
                    font-medium
                    placeholder-gray-700
                    focus:outline-none
                    focus:bg-white
                  "
                  placeholder="Type Your Comment"
                  required
                ></textarea>
              </div>
              <div class="w-full md:w-full flex items-start md:w-full px-3">
                <div class="flex items-start w-1/2 text-gray-700 px-2 mr-auto">
                  <svg
                    fill="none"
                    class="w-5 h-5 text-gray-600 mr-1"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p class="text-xs md:text-sm pt-px">
                    Note:- Coments will be public
                  </p>
                </div>
                <div class="-mr-1">
                  <div v-if="commentdata.length >= 1">
                    <button
                      v-on:click="comment"
                      class="
                        px-4
                        py-2
                        text-white
                        bg-indigo-500
                        rounded-md
                        hover:bg-indigo-600
                        focus:outline-none
                        focus:ring focus:ring-indigo-300 focus:ring-opacity-80
                      "
                    >
                      Post Comment
                    </button>
                  </div>

                  <div v-else>
                    <button
                      disabled
                      class="
                        px-4
                        py-2
                        font-medium
                        text-white
                        duration-200
                        bg-indigo-300
                        rounded-md
                      "
                    >
                      Post Comment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
import { mapGetters } from "vuex";
export default {
  async asyncData({ $axios, route, store, redirect, $md }) {
    let preitems = await $axios({
      url: "graphql",
      method: "post",
      data: {
        query: `query custom{
  blogs1: blogs( where: { id: ${route.params.id}} ){
    Title,
    Context,
    Date,
    id,
    created_at
    Feature{
      url
    },
    users_permissions_user{
      name,
      profile{
        url,
      },
    },
    Description,
    category{
      name
    }
  },
cmt: comments( where: { blog: {id: ${route.params.id} } } ){
    content,
  created_at,
  users_permissions_user{
    name,
  }
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
    const users = preitems.data.data.users;
    const items = preitems.data.data.blogs1[0];
    const categories = preitems.data.data.categories;
    const latest = preitems.data.data.blogs2[0];
    const comments = preitems.data.data.cmt;
    const prerender = items.Description.split("/uploads/").join(
      "https://api.blogerpedia.com/uploads/"
    ); //change to domainn name

    const content = $md.render(prerender);
    return { items, content, categories, latest, comments, users };
  },
  data() {
    return {
      items: [],
      commentdata: "",
    };
  },
  computed: {
    ...mapGetters(["isAuthenticated", "loggedInUser"]),
  },
  methods: {
    async comment() {
      if (this.isAuthenticated & (this.commentdata != "")) {
        const header = {
          Authorization: this.$auth.getToken("local"),
        };
        const data = {
          content: this.commentdata,
          blog: {
            id: this.$route.params.id,
          },
          users_permissions_user: {
            id: this.$store.state.auth.user.id,
          },
        };
        await this.$axios({
          url: "comments",
          method: "post",
          headers: {
            Authorization: this.$auth.getToken("local"),
          },
          data: {
            content: this.commentdata,
            blog: {
              id: this.$route.params.id,
            },
            users_permissions_user: {
              id: this.$store.state.auth.user.id,
            },
          },
        })
          .then((res) => {
            this.$router.app.refresh();
            this.commentdata = "";
          })
          .catch((error) => {
            this.$router.push({ path: "/error/" });
          });
      }
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Fira+Sans&display=swap");

#para >>> {
  font-family: "Fira Sans", sans-serif;
}

#para >>> h1 {
  display: block;
  font-size: 2em;
  margin-top: 0.67em;
  margin-bottom: 0.67em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
}
#para >>> h2 {
  display: block;
  font-size: 1.5em;
  margin-top: 0.83em;
  margin-bottom: 0.83em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
}
#para >>> h3 {
  display: block;
  font-size: 1.17em;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
}
#para >>> h4 {
  display: block;
  font-size: 1em;
  margin-top: 1.33em;
  margin-bottom: 1.33em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
}
#para >>> h5 {
  display: block;
  font-size: 0.83em;
  margin-top: 1.67em;
  margin-bottom: 1.67em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
}
#para >>> h6 {
  display: block;
  font-size: 0.67em;
  margin-top: 2.33em;
  margin-bottom: 2.33em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
}
#para >>> li {
  display: list-item;
}
#para >>> ol {
  display: block;
  list-style-type: decimal;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 0;
  margin-right: 0;
  padding-left: 40px;
}
#para >>> ul {
  display: block;
  list-style-type: disc;
  margin-top: 1em;
  margin-bottom: 1 em;
  margin-left: 0;
  margin-right: 0;
  padding-left: 40px;
}

#para >>> link {
  display: none;
}

#para >>> table {
  display: table;
  border-collapse: separate;
  border-spacing: 2px;
  border-color: gray;
}

#para >>> a:link {
  /* unvisited link */
  color: #007bff;
  text-decoration: none;
  border-bottom: 1px solid;
}
#para >>> a:visited {
  /* visited link */
  color: #880bf5;
}
#para >>> a:hover {
  /* mouse over link */
  color: #007bff;
  border-bottom: none;
}
#para >>> a:visited:hover {
  /* visited link */
  color: #4d0091;
}

#para >>> blockquote {
  display: block;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 40px;
  margin-right: 40px;
  font-style: italic;
}

::-webkit-scrollbar {
  width: 20px;
}
::-webkit-scrollbar-track {
  background-color: transparent;
}
::-webkit-scrollbar-thumb {
  background-color: #d6dee1;
}
::-webkit-scrollbar-thumb {
  background-color: #d6dee1;
  border-radius: 20px;
}
::-webkit-scrollbar-thumb {
  background-color: #d6dee1;
  border-radius: 20px;
  border: 6px solid transparent;
  background-clip: content-box;
}
::-webkit-scrollbar-thumb:hover {
  background-color: #a8bbbf;
}
</style>
