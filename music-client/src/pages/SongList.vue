<template>
  <div class="song-list">
    <ul class="song-list-header">
      <li
        v-for="(item, index) in songStyle"
        :key="index"
        :class="{ active: item.name == activeName }"
        @click="handleChangeView(item.name)"
      >
        {{ item.name }}
      </li>
    </ul>
    <div>
      <content-list :contentList="data"></content-list>

      <div class="pagination">
        <el-pagination
          @current-change="handleCurrentChange"
          background
          layout="total, prev, pager, next"
          :current-page="currentPage"
          :page-size="pageSize"
          :total="albumDatas.length"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import ContentList from "../components/ContentList.vue";
import { getAllSongList, getSongListOfLikeStyle } from "../api/index";
import { mixin } from "../mixins";
import { songStyle } from "../assets/data/songList";
export default {
  name: "song-list",
  mixins: [mixin],
  components: {
    ContentList
  },
  data() {
    return {
      albumDatas: [],           //歌单数据
      pageSize: 15,             //页面大小，一页有15条数据
      currentPage: 1,           //当前页，默认第一页
      songStyle:[],             //歌单风格
      activeName:'全部歌单'     //当前风格
    };
  },
  computed: {
    //计算当前表格中的数据
    data() {
      return this.albumDatas.slice(
        (this.currentPage - 1) * this.pageSize,
        this.currentPage * this.pageSize
      );
    }
  },
  mounted() {
    this.songStyle = songStyle;
    this.getSongList();
    
  },
  methods: {
    getSongList() {
      getAllSongList().then(res => {
        this.currentPage = 1;
        this.albumDatas = res;
      });
    },
    // 获取当前页
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    // 根据style显示对应的歌单
    handleChangeView(name) {
      this.activeName = name;
      this.albumDatas = [];
      if (name == "全部歌单") {
        this.getSongList();
      } else {
        this.goSongListOfStyle(name);
      }
    },
    // 根据style查询对应的歌单
    goSongListOfStyle(style) {
      getSongListOfLikeStyle(style)
        .then(res => {
          this.currentPage = 1;
          this.albumDatas = res;
          console.log(res)
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/song-list.scss";
</style>
