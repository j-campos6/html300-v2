//mixin

export default {

  data() {
    return {
      toggle: true
    }
  },

  computed: {
    style() {
      let styleA = {
        border: '',
      };

      let styleB = {
        border: '3px solid red',
      }
      return this.toggle ? styleA : styleB //!!! Update this

    }
  },

  methods: {
    borderToggle() {
      this.toggle = !this.toggle;
    }
  },

};
