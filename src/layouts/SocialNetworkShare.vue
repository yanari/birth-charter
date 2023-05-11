<script>
  import TwitterIcon from '@/icons/TwitterIcon.vue';
  import WhatsAppIcon from '@/icons/WhatsAppIcon.vue';
  export default {
    components: {
      TwitterIcon,
      WhatsAppIcon,
    }
  }
</script>
<template>
  <div class="social-network-share-wrapper">
    <ShareNetwork
      network="twitter"
      url="https://birth-charter.yanari.dev"
      title="The elements that dominate my birth chart are: Earth and Fire. What about yours?"
      description="Find out the elements that dominate your birth chart!"
    >
      <div class="share-button twitter">
        <TwitterIcon/>
        <span>
          Share your result
          <br/>
          on Twitter
        </span>
      </div>
    </ShareNetwork>
    <ShareNetwork
      network="whatsapp"
      url="https://birth-charter.yanari.dev"
      title="The elements that dominate my birth chart are: Earth and Fire. What about yours?"
      description="Find out the elements that dominate your birth chart!"
    >
      <div class="share-button whatsapp">
        <WhatsAppIcon/>
        <span>
          Share your result
          <br/>
          on WhatsApp
        </span>
      </div>
    </ShareNetwork>
  </div>
</template>
<style scoped>

  .social-network-share-wrapper {
    display: inline-flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }

  .social-network-share-wrapper > a {
    text-decoration: none;
  }

  .share-button {
    align-items: center;
    border-radius: 8px;
    color: var(--vt-c-text-dark-1);
    display: flex;
    gap: 1rem;
    font-size: .9rem;
    font-weight: 600;
    justify-content: center;
    padding: .25rem 0;
  }

  .share-button > svg {
    fill: var(--vt-c-text-dark-1);
  }

  .twitter {
    background-color: #1DA1F2;
  }

  .whatsapp {
    background-color: #25D366;
  }

  @media (min-width: 1024px) {
    .social-network-share-wrapper {
      flex-direction: row;
    }
  }
</style>