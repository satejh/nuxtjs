<template>
  <div class="pt-20">
    <div class="p-4">
<span><p class="font-bold font-mono text-gray-700 text-2xl mx-1 pb-8">
            Spotify Playlist
          </p></span>
      <iframe
        src="https://open.spotify.com/embed/playlist/3H72eaZc6HPOX9YUKrQZ3u"
        width="100%"
        height="380"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  middleware: "private",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
