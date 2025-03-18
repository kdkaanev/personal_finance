<template>
    <div class="donut-chart-container">
      <svg :width="size" :height="size" viewBox="0 0 100 100">
        <!-- Inner Circle (background) -->
        <circle cx="50" cy="50" r="30" fill="none" stroke="#ddd" stroke-width="20" opacity="0.25" />
        
        <!-- Outer Circle (dynamic data) -->
        <circle
          v-for="(segment, index) in segments"
          :key="index"
          :cx="50"
          :cy="50"
          :r="40"
          fill="none"
          :stroke="segment.color"
          stroke-width="10"
          :stroke-dasharray="getStrokeDashArray(segment.value)"
          :stroke-dashoffset="getStrokeDashOffset(index)"
          stroke-linecap="round"
          transform="rotate(-90 50 50)"
        />
      </svg>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      size: { type: Number, default: 200 },
      segments: { type: Array, required: true }, // Example: [{ value: 40, color: '#FF5733' }, { value: 60, color: '#4CAF50' }]
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
    },
  };
  </script>
  
  <style scoped>
  .donut-chart-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  </style>
  