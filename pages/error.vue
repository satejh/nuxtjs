<template>
  <div>
    <header class="bg-white dark:bg-gray-800">
      <div class="container px-6 py-32 mx-auto">
        <div class="items-center lg:flex">
          <div class="w-full lg:w-1/2">
            <div class="lg:max-w-lg">
              <h1
                class="
                  text-2xl
                  font-semibold
                  text-gray-800
                  uppercase
                  dark:text-white
                  lg:text-3xl
                "
              >
                OOPS's An {{code}} Error Occured
              </h1>
              <p class="mt-2 text-gray-600 dark:text-gray-400">
               {{message}}
              </p>
              <button
              
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
                  bg-indigo-600
                  rounded-md
                  lg:w-auto
                  hover:bg-indigo-500
                  focus:outline-none
                  focus:bg-indigo-500
                "
              >
              <nuxt-link to="/">Go Home</nuxt-link>
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
              lg:mt-0
              lg:w-1/2
            "
          >
            <img
              class="w-full h-full lg:max-w-2xl"
              src=""
              alt="Catalogue-pana.svg"
            />
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
export default {
props: ['code', 'message']
};
</script>