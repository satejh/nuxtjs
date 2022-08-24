<template>
  <div class="bg-gray-100 px-4 py-24 lg:px-8 lg:py-15">
    <section
      class="
        w-full
        max-w-2xl
        px-6
        py-8
        mx-auto
        bg-white
        rounded-md
        shadow-md
        dark:bg-gray-800
      "
    >
      <h2
        class="text-3xl font-semibold text-center text-gray-800 dark:text-white"
      >
        Contact US
      </h2>
      <p class="mt-3 text-center text-gray-600 dark:text-gray-400">
        Fill in the below details for any query / contact.
      </p>
      <form method="post" @submit.prevent="contact">
        <div class="mt-6">
          <div class="items-center -mx-2 md:flex">
            <div class="w-full mx-2">
              <label
                class="
                  block
                  mb-2
                  text-sm
                  font-medium
                  text-gray-600
                  dark:text-gray-200
                "
                >Name</label
              >

              <input
                v-model="name"
                class="
                  block
                  w-full
                  px-4
                  py-2
                  text-gray-700
                  bg-white
                  border border-gray-300
                  rounded-md
                  dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600
                  focus:border-blue-500
                  dark:focus:border-blue-500
                  focus:outline-none focus:ring
                "
                type="text"
              />
            </div>

            <div class="w-full mx-2 mt-4 md:mt-0">
              <label
                class="
                  block
                  mb-2
                  text-sm
                  font-medium
                  text-gray-600
                  dark:text-gray-200
                "
                >E-mail</label
              >

              <input
                v-model="email"
                class="
                  block
                  w-full
                  px-4
                  py-2
                  text-gray-700
                  bg-white
                  border border-gray-300
                  rounded-md
                  dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600
                  focus:border-blue-500
                  dark:focus:border-blue-500
                  focus:outline-none focus:ring
                "
                type="email"
              />
            </div>
          </div>

          <div class="w-full mt-4">
            <label
              class="
                block
                mb-2
                text-sm
                font-medium
                text-gray-600
                dark:text-gray-200
              "
              >Message</label
            >

            <textarea
              v-model="message"
              class="
                block
                w-full
                h-40
                px-4
                py-2
                text-gray-700
                bg-white
                border border-gray-300
                rounded-md
                dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600
                focus:border-blue-500
                dark:focus:border-blue-500
                focus:outline-none focus:ring
              "
            ></textarea>
          </div>

          <div v-if="!onclick" class="flex justify-center mt-6">
            <button
              type="submit"
              class="
                px-4
                py-2
                text-white
                transition-colors
                duration-200
                transform
                bg-gray-700
                rounded-md
                hover:bg-gray-600
                focus:outline-none focus:bg-gray-600
              "
            >
              Drop Message
            </button>
          </div>
        </div>

        <div
          v-if="onclick"
          class="
          mt-6
            flex
            w-full
            max-w-sm
            mx-auto
            overflow-hidden
            bg-white
            rounded-lg
            shadow-md
            dark:bg-gray-800
          "
        >
          <div class="flex items-center justify-center w-12 bg-blue-500">
            <svg
              class="w-6 h-6 text-white fill-current"
              viewBox="0 0 40 40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"
              />
            </svg>
          </div>

          <div class="px-4 py-2 -mx-3">
            <div class="mx-3">
              <span class="font-semibold text-blue-500 dark:text-blue-400"
                >Info</span
              >
              <p class="text-sm text-gray-600 dark:text-gray-200">{{ msg }}!</p>
            </div>
          </div>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
      onclick: false,
      msg: "",
    };
  },
  mounted() {
    //this.contact();
  },
  methods: {
    async contact() {
      if (this.name == "" || this.email == "" || this.message == "") {
          
        this.msg = "Please Fill In All Fields";
        this.onclick = true
      } else {
        this.msg = "Response Submitted";
        await this.$axios({
          url: "graphql",
          method: "post",
          data: {
            query: `
mutation custom{
  createContact(input: { data: { Name: "${this.name}", Email: "${this.email}", Message: "${this.message}" } }) {
    contact {
      Name,
      Email,
      Message,
    }
  }
}`,
          },
        })
          .then((res) => {
            (this.onclick = true),
              (this.name = ""),
              (this.email = ""),
              (this.message = "");
          })
          .catch((error) => {
            this.$router.push({ path: "/error/" });
          });
      }
    },
  },
};
</script>