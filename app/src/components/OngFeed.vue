<template>
  <div id="ong-feed">
    <donation-list :donations="donations"></donation-list>
  </div>
</template>

<script>
import DonationList from '@/components/DonationList';

export default {
  components: {
    DonationList,
  },
  data() {
    return {
      donations: [
        {
          address: {
            street: 'rua',
            number: 1,
            square: 'bairro',
            city: 'cidade',
            state: 'estado',
          },
          foods: [
            'queijo',
            'goiabada',
          ],
          expiry: new Date(),
          donator: 'korok',
        },
      ],
    };
  },
  onCreated() {
    // TODO: get pendent donations
  },
};
</script>

<style lang="scss" scoped>

</style>
