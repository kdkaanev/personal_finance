<script>
export default {
  props: {
    size: { type: Number, default: 300 },
    segments: { type: Array, },
    transactions: { type: Array,  },
    budgets: { type: Array, },
    totalSpent: { type: Number, default: 0 },
  },
  computed: {
    totalLimit() {
      if (!this.budgets) return 0;
      return this.budgets.reduce((total, budget) => total + budget.maximum, 0);
    },
    totalValue() {
      if(!this.segments)return 0;
      return this.segments.reduce((acc, seg) => acc + seg.value, 0);
    },
    
  },

  methods: {
    getSegmentsData(radius) {
      const circumference = 2 * Math.PI * radius;
      let offset = 0;
      if(!this.segments)return 0;
      return this.segments.map(seg => {
        const length = (seg.value / this.totalValue) * circumference;
        const segmentData = {
          color: seg.color,
          dasharray: `${length} ${circumference - length}`,
          dashoffset: offset,
        };
        offset -= length;
        return segmentData;
      });
    },
    getTotalSpent() {
      if(!this.segments)return 0;
      let result = this.segments.reduce((total, segment) => total + segment.spent, 0)
    return Math.round(result);
    },

  
    
  },
};
</script>

<template>
  <div class="donut-chart-container">
    <svg :width="size" :height="size" viewBox="0 0 100 100">
      <!-- Вътрешен пръстен -->
      <g v-for="(segment, index) in getSegmentsData(30)" :key="'inner-' + index">
        <circle
          cx="50"
          cy="50"
          r="30"
          fill="none"
          :stroke="segment.color"
          stroke-width="12"
          :stroke-dasharray="segment.dasharray"
          :stroke-dashoffset="segment.dashoffset"
          stroke-linecap="butt"
          opacity="0.3"
        />
      </g>

      <!-- Външен пръстен -->
      <g v-for="(segment, index) in getSegmentsData(40)" :key="'outer-' + index">
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          :stroke="segment.color"
          stroke-width="12"
          :stroke-dasharray="segment.dasharray"
          :stroke-dashoffset="segment.dashoffset"
          stroke-linecap="butt"
        />
      </g>

      <!-- Текст в центъра -->
      <text x="50" y="45" text-anchor="middle" dominant-baseline="middle" class="donut-chart-text" font-size="12" fill="#111" transform="rotate(90 50 50)">
        ${{ getTotalSpent() }}
      </text>
      <text x="50" y="55" text-anchor="middle" font-size="4" fill="#555" transform="rotate(90 50 50)">
        of ${{ totalLimit }} limit
      </text>
    </svg>
  </div>
</template>

<style scoped>
.donut-chart-container {
/* Chart */

margin-top: 3rem;



/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


}
.donut-chart-text {
  font-weight: bold;
  transform: rotate(270 50 50);
  
}
svg {
  transform: rotate(-90deg); /* За да почва отгоре */
}

</style>

