<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 style='display: none'>暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group">
      <item></item>
    </ul>
  </div>
</template>

<script>
import item from '@/components/item'
export default {
  name: 'list',
  components: { item }
}
</script>

<style>
.reply {
  margin-top: 0px;
}
</style>
