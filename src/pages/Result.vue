<script>

import Chart from '@/components/Chart.vue';
import Description from '@/layouts/Description.vue';
import SocialNetworkShare from '@/layouts/SocialNetworkShare.vue';
import Separator from '@/components/Separator.vue';
import { LocalStore } from '@/utils/localStorage';

export default {
  components: {
    Chart,
    Description,
    Separator,
    SocialNetworkShare
  },
  head() {
    return {
      meta: [
        {
          property: 'og:title',
          content: this.ogTitle,
        },
        {
          property: 'og:image',
          content: LocalStore.getData().chartImage,
        },
      ]
    }
  },
  data() {
    return {
      results: LocalStore.getData(),
      lack: [],
      dominant: [],
    }
  },
  mounted() {
    this.dominant = this.results.dominant;
    this.lack = this.results.lack;
  },
  methods: {},
  computed: {
    elements() {
      return this.results.calculation;
    },
    hasMultipleDominants() {
      return this.dominant && this.dominant.length > 1;
    },
    hasMultipleLack() {
      return this.lack && this.lack.length > 1;
    },
    dominantTitle() {
      if (this.hasMultipleDominants) {
        return 'The elements that dominate your birth chart are';
      } else {
        return 'The element that dominate your birth chart is';
      }
    },
    lackOfTitle() {
      if (this.hasMultipleLack) {
        return 'On the other hand, the weakest elements on your birth chart are';
      } else {
        return 'On the other hand, the weakest element on your birth chart is';
      }
    },
    ogTitle() {
      let signs = '';
      const dominants = this.results.dominant.map(sign => sign.name);
      console.log(dominants)
      if (this.hasMultipleDominants) {
        signs = dominants[0] + ' and ' + dominants[1];
      } else {
        signs = dominants[0]
      }
      return this.dominantTitle.replace('your', 'my') + ' ' + signs + '!';
    }
  }
}
</script>
<template>
  <main>
    <div class="description">
      <h2 class="dominant">
        {{ dominantTitle }}
      </h2>
      <Description :set="results.dominant" />
      <Separator/>
      <h2>
        {{ lackOfTitle }}
      </h2>
      <Description :set="results.lack" />
    </div>
    <Separator/>
    <div class="chart-area">
      <Chart :elements="elements"/>
    </div>
    <Separator/>
    <div class="social-media-sharing">
      <SocialNetworkShare/>
    </div>
  </main>
</template>
<style scoped>
  main {
    background-color: var(--vt-c-text-light);
    color: var(--color-heading);
    filter: opacity(.9);
    max-width: 48rem;
  }

  .dominant {
    font-size: 2.5rem;
  }

  .chart-area {
    display: flex;
    justify-content: center;
    max-height: 24rem;
  }
</style>