<template>
  <transition name="slide-fade">
    <div class="the-aside" v-if="showAside">
      <h2 class="title">播放列表</h2>
      <ul class="menus">
        <li v-for="(item, index) in listOfSongs" :key="index" :class="{'is-play':id == item.id}"
          @click="toPlay(item.id,item.url,item.pic,item.index,item.name,item.lyric)">
          {{replaceFName(item.name)}}
        </li>
      </ul>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'
import { getCollectOfUserId } from '../api/index'
export default {
  name: 'the-aside',
  computed: {
    ...mapGetters([
      'showAside', // 是否显示侧边栏
      'listOfSongs', //当前歌曲列表
      'id', // 音乐id
      'loginIn', //用户是否已登录
      'userId', //当前登录用户的id
      'isActive', //当前播放歌曲是否已收藏
    ]),
  },
  mounted() {
    let _this = this
    document.addEventListener(
      'click',
      function () {
        _this.$store.commit('setShowAside', false)
      },
      true
    )
  },
  methods: {
    // 得到名字后部分-歌名
    replaceFName(str) {
      let arr = str.split('-')
      return arr[1]
    },
    // 得到名字前部分-歌手名
    replaceLName(str) {
      let arr = str.split('-')
      return arr[0]
    },
    // 播放
    toPlay: function (id, url, pic, index, name, lyric) {
      this.$store.commit('setId', id)
      this.$store.commit('setUrl', this.$store.state.configure.HOST + url)
      this.$store.commit('setPicUrl', this.$store.state.configure.HOST + pic)
      this.$store.commit('setListIndex', index)
      this.$store.commit('setTitle', this.replaceFName(name))
      this.$store.commit('setArtist', this.replaceLName(name))
      this.$store.commit('setLyric', this.parseLyric(lyric))
      this.$store.commit('setIsActive',false);
      if(this.loginIn){
        getCollectOfUserId(this.userId)
        .then(res=>{
          for(let item of res){
            if(item.songId==id){
              this.$store.commit('setIsActive',true);
              break;
            }
          }
        })
      }
    },
    //解析歌词
    parseLyric(text) {
      let lines = text.split('\n') //将歌词分解成数组
      let pattern = /\[\d{2}:\d{2}.(\d{3}|\d{2})\]/g //时间格式的正则表达式
      let result = [] // 返回值

      // 对于歌词格式不对的特殊处理
      if (!/\[.+\]/.test(text)) {
        return [[0, text]]
      }
      //去掉前面格式不正确的行
      while (!pattern.test(lines[0])) {
        lines = lines.slice(1)
      }
      for (let item of lines) {
        let time = item.match(pattern) // 存前面的时间段
        let value = item.replace(pattern, '') // 存后面的歌词
        for (let item1 of time) {
          let t = item1.slice(1, -1).split(':') //取出时间，换算成数组
          if (value != '') {
            result.push([parseInt(t[0], 10) * 60 + parseFloat(t[1]), value])
          }
        }
      }
      result.sort(function (a, b) {
        return a[0] - b[0]
      })
      return result
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/css/the-aside.scss';

</style>