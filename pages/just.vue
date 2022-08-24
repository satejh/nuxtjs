<template>
  <div class="bg-gray-100 px-4 py-24 lg:px-8 lg:py-15">


    <div><nuxt-content :document="content" /></div>
  </div>
</template>

<script>
import Markdown from '@nuxt/content/parsers/markdown'
import { getDefaults, processMarkdownOptions } from '@nuxt/content/lib/utils'
import { mapGetters } from "vuex";
export default {

  async asyncData({ $axios, route, store, redirect, $md }) {
          async function parseMarkdown(md) {
  const options = getDefaults()
  processMarkdownOptions(options)
  return new Markdown(options.markdown).toJSON(md) // toJSON() is async
}
    let preitems = await $axios({
      url: "graphql",
      method: "post",
      data: {
        query: `query custom{
  blogs1: blogs( where: { id: ${20}} ){
    Title,
    Context,
    Date,
    id,
    created_at
    Feature{
      url
    },
    users_permissions_user{
      profile{
        url,
      },
    },
    Description,
    category{
      name
    }
  },
cmt: comments( where: { blog: {id: ${20} } } ){
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

    //const content = $md.render(prerender);
const content = await parseMarkdown(prerender)
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