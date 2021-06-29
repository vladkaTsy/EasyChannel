<template>
  <el-container>
    <el-aside width="fit-content" style="background-color: rgb(48, 65, 86);">
      <Aside />
    </el-aside>
    <el-container>

      <transition name="fade-in-up">
        <el-main>
          <router-view />
        </el-main>
      </transition>
    </el-container>
  </el-container>
</template>

<script src="./script.js"></script>

<style lang="sass">
@import "style"
</style>
