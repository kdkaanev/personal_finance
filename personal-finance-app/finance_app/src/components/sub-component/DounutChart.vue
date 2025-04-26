<script>
export default {
  props: {
    size: { type: Number, default: 300 },
    segments: { type: Array, required: true }, // Example: [{ value: 40, color: '#FF5733' }, { value: 60, color: '#4CAF50' }]
    transactions: {
      type: Array,
      required: true
    },
    budgets: {
      type: Object,
      required: true
    },
    limits: {
      type: Object,
      required: true
    },
    
  },
  methods: {
    getStrokeDashArray(value) {
      const circumference = 2 * Math.PI * 40;
      return `${(value / 100) * circumference} ${circumference}`;
    },
    getStrokeDashOffset(index) {
      const circumference = 2 * Math.PI * 40;
      const previousValues = this.segments.slice(0, index).reduce((acc, seg) => acc + seg.value, 0);
      return (previousValues / 100) * circumference;
    },
    getTotalLImits() {
      if (!this.budgets) {
        return 0;
      }
    const limit = this.budgets.reduce((total, budget) => total + budget.maximum, 0);
    return limit
  },
    
 
 
  },
  
  
};
</script>





<template>
    <div class="donut-chart-container">
      <svg :width="size" :height="size" viewBox="0 0 100 100" >
        <!-- Inner Circle (background) -->
       
        <circle
        
          cx="50"
          cy="50"
          r="30"
          fill="white"
          stroke="none"
          stroke-width="15"
          opacity="0.3"
          
        />
        <!-- Outer Circle (dynamic data) -->
        <circle 
          v-for="(segment, index) in segments"
          :key="index"
          :cx="50"
          :cy="50"
          :r="40"
          fill="none"
          :stroke="segment.color"
          stroke-width="15"
          :stroke-dasharray="getStrokeDashArray(segment.value)"
          :stroke-dashoffset="getStrokeDashOffset(index)"
          :style="{ transition: 'stroke-dashoffset 0.5s ease-in-out' }"
        />
        <text 
    x="50"
    y="45"
    text-anchor="middle"
    dominant-baseline="middle"
    class="donut-chart-text"
    font-size="18"
    fill="#111"
    transform="rotate(270 50 50)"
    
    
  >
   
   
  <tspan x="50" dy="0">
    $333
  </tspan>
    
  </text>
  
  
<text x="50" y="55" text-anchor="middle" font-size="14" fill="#555" transform="rotate(270 50 50)">
    <tspan x="50" dy="1.2em" font-size="6" fill="#999">
      of ${{ getTotalLImits() }} limit
    </tspan>

</text>

  
      </svg>
    </div>
  </template>
  <style scoped>
    .donut-chart-container {
     /* Chart */

width: 240px;
height: 240px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;

    }
    .donut-chart-text {
     /* Texts */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: center;
padding: 0px;
gap: 8px;

position: absolute;
width: 86px;
height: 64px;
left: calc(50% - 86px/2 + 0.5px);
top: calc(50% - 64px/2 + 0px);


    }

    
    svg {
      transform: rotate(90deg);
    }
   
  </style>

  

 
  