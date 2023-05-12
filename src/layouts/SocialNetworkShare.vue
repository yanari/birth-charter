<script>
  import TwitterIcon from '@/icons/TwitterIcon.vue';
  import WhatsAppIcon from '@/icons/WhatsAppIcon.vue';
  import TumblrIcon from '@/icons/TumblrIcon.vue';

  export default {
    components: {
      TwitterIcon,
      WhatsAppIcon,
      TumblrIcon,
    },
    data() {
      return {
        networks: [
          { name: 'twitter', icon: 'TwitterIcon' },
          { name: 'whatsapp', icon: 'WhatsAppIcon' },
          { name: 'tumblr', icon: 'TumblrIcon' },
        ]
      }
    },
  }
</script>
<template>
  <h4>Share your result!</h4>
  <div class="social-network-share-wrapper">
    <ShareNetwork
      v-for="network in networks"
      :network="network.name"
      url="https://birth-charter.yanari.dev"
      title="The elements that dominate my birth chart are: Earth and Fire. What about yours?"
      description="Find out the elements that dominate your birth chart!"
    >
      <div :class="['share-button', network.name]">
        <component :is="network.icon"/>
        <span>Share</span>
      </div>
    </ShareNetwork>
  </div>
</template>
<style scoped>
  h4 {
    margin-bottom: 1rem;
  }

  .social-network-share-wrapper {
    display: flex;
    gap: 1rem;
    width: 100%;
  }

  .social-network-share-wrapper > a {
    flex: 1;
    text-decoration: none;
  }

  .social-network-share-wrapper > a:hover {
    filter: brightness(1.1);
  }

  .share-button {
    align-items: center;
    border-radius: 10px;
    color: var(--vt-c-text-dark-1);
    display: flex;
    gap: .5rem;
    font-size: .9rem;
    font-weight: 600;
    justify-content: center;
    padding: .5rem 0;
  }

  .share-button > svg {
    fill: var(--vt-c-text-dark-1);
    height: 2rem;
    width: 2rem;
  }

  .twitter {
    background-color: #1DA1F2;
  }

  .whatsapp {
    background-color: #25D366;
  }
  .tumblr {
    background-color: #36465D;
  }

  @media (max-width: 380px) {
    .share-button > span {
      display: none;
    }
  }
</style>