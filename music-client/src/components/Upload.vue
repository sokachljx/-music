<template>
  <div class="upload">
    <p class="title">修改头像</p>
    <hr />
    <div class="section">
      <el-upload
        drag
        :action="uploadUrl()"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>修改头像</em></div>
        <div class="el-upload__tip" slot="tip">
          只能上传jpg/png文件，且不超过10M
        </div>
      </el-upload>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { rules, cities } from "../assets/data/form";
import { mixin } from "../mixins";
export default {
  name: "upload",
  mixins: [mixin],
  computed: {
    ...mapGetters(["userId"])
  },
  methods: {
    //上传地址
    uploadUrl() {
      return `${this.$store.state.configure.HOST}/consumer/updateConsumerPic?id=${this.userId}`;
    },
    //上传成功
    handleAvatarSuccess(res, file) {
      if (res.code == 1) {
        // this.imageUrl = URL.createObjectURL(file.raw)
        this.$store.commit("setAvator", res.avator);
        this.notify("修改成功", "success");
      } else {
        this.notify("修改失败", "error");
      }
    },
    //上传之前的校验
    beforeAvatarUpload (file) {
      const isJPG = file.type == 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 10
      if (!isJPG) {
        this.$notify('上传头像图片只能是 JPG 格式!','error')
        return false
      }
      if (!isLt2M) {
        this.$notify('上传头像图片大小不能超过 10MB!','error')
        return false
      }
      return true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/upload.scss";
</style>
