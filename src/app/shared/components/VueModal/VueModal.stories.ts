import { storiesOf } from '@storybook/vue';
import VueInfoAddon  from 'storybook-addon-vue-info';
import VueModal      from './VueModal.vue';
import VueButton     from '../VueButton/VueButton.vue';
import VuePanel      from '../VuePanel/VuePanel.vue';

const story = (storiesOf('VueModal', module) as any);

story.addDecorator(VueInfoAddon);

story.add('Default', () => ({
  components: { VueModal, VueButton, VuePanel },
  data() {
    return {
      show: false,
    };
  },
  template:   `
<vue-panel>
  <vue-button @click="show = true" secondary>Show</vue-button>
  <vue-modal :show="show" @close="show = false">
    <vue-button primary ghost @click="show = false">Hide</vue-button>
  </vue-modal>
</vue-panel>
  `,
}));

story.add('Fit Content', () => ({
  components: { VueModal, VueButton, VuePanel },
  data() {
    return {
      show: false,
    };
  },
  template:   `
<vue-panel>
  <vue-button @click="show = true" secondary>Show</vue-button>
  <vue-modal :show="show" @close="show = false" fit-content>
    <vue-button primary ghost @click="show = false">Hide</vue-button>
  </vue-modal>
</vue-panel>
  `,
}));
