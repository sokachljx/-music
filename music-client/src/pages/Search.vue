<template>
    <div class="search">
        <nav class="searchList-nav" ref="change">
            <span  :class="{isActive: toggle == 'Songs'}" @click="handleChangeView('Songs', 0)">歌曲</span>
            <span  :class="{isActive: toggle == 'SongLists'}" @click="handleChangeView('SongLists', 1)">歌单</span>
        </nav>
        <component :is="currentView"></component>
    </div>
</template>


<script>

import searchSongs from '../components/search/SearchSongs.vue'
import searchSongLists from '../components/search/SearchSongLists.vue'
export default{
    name: 'search',
    components: {
        searchSongs,
        searchSongLists
    },
    data () {
        return {
            toggle: 'Songs',
            currentView: 'searchSongs'
    }
  },
  methods: {
    // 切换组件
    handleChangeView: function (component) {
      this.currentView = 'search' + component
      this.toggle = component
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/search.scss';

</style>