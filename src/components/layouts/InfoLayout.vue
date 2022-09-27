<template>
  <p>{{ header }}</p>
  <div class="container-fluid p-0 m-0">
    <div class="row">
      <div class="col-12">
        <div class="row">
          <div :class="content.header.column_details">
            <component
              :is="content.header.type"
              :content="content.header.content"
            ></component>
          </div>
        </div>
        <div class="row">
          <div
            v-bind="content.data.column_details"
            v-for="(item, index) in content.data.content"
          >
            <component :is="item.type" :content="item.content"></component>
          </div>
        </div>
        <div class="row">
          <div v-if="content.hasExtra === true">
            <component
              :is="content.extra.type"
              :content="content.extra.content"
            ></component>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import InfoTitle from "../text/InfoTitle.vue";
import TextTitle from "../text/TextTitle.vue";
import ButtonWithImage from "../buttons/ButtonWithImage.vue";
import InfoTitleGlyph from "../text/InfoTitleGlyph.vue";
export default {
  name: "InfoLayout",
  props: {
    content: {
      type: Object,
    },
    header: {
      type: Object,
    },
  },
  components: {
    InfoTitle,
    TextTitle,
    ButtonWithImage,
    InfoTitleGlyph,
  },
};
</script>
