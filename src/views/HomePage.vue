<template>
    <div class="home_page">
        <banner></banner>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <about-me></about-me>
                </div>
                <div class="col-md-8 col-lg-9">
                    <all-contents></all-contents>
                </div>
                <div class="col-md-4 col-lg-3">3</div>
            </div>
        </div>
        <footer-custom></footer-custom>
    </div>
</template>

<script>
import { watchList } from '../api'
import Banner from '../components/common/Banner.vue'
import FooterCustom from '../components/common/Footer.vue'
import AboutMe from '../components/homePage/AboutMe.vue'
import AllContents from '../components/homePage/AllContents.vue'

export default {
  name: 'item-list',
  components: {
	AboutMe,
	Banner,
	AllContents,
	FooterCustom,
  },

  props: {
    type: String
  },

  data () {
    return {
      transition: 'slide-right',
      displayedPage: Number(this.$store.state.route.params.page) || 1,
      displayedItems: this.$store.getters.activeItems
    }
  },

  computed: {

  },

  beforeMount () {
    if (this.$root._isMounted) {
      this.loadItems(this.page)
    }
    // watch the current list for realtime updates
    this.unwatchList = watchList(this.type, ids => {
      this.$store.commit('SET_LIST', { type: this.type, ids })
      this.$store.dispatch('ENSURE_ACTIVE_ITEMS').then(() => {
        this.displayedItems = this.$store.getters.activeItems
      })
    })
  },

  beforeDestroy () {
    this.unwatchList()
  },

  watch: {
    page (to, from) {
      this.loadItems(to, from)
    }
  },

  methods: {
    loadItems (to = this.page, from = -1) {
      this.$bar.start()
      this.$store.dispatch('FETCH_LIST_DATA', {
        type: this.type
      }).then(() => {
        if (this.page < 0 || this.page > this.maxPage) {
          this.$router.replace(`/${this.type}/1`)
          return
        }
        this.transition = from === -1
          ? null
          : to > from ? 'slide-left' : 'slide-right'
        this.displayedPage = to
        this.displayedItems = this.$store.getters.activeItems
        this.$bar.finish()
      })
    }
  }
}
</script>

<style lang="less">
    @import "../lib/style/color";
    .home_page{

    }

</style>
