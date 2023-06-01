import { createApp } from 'vue'
import { registerMap, use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { LineChart, MapChart } from 'echarts/charts'
import { GeoComponent, GridComponent, LegendComponent, TooltipComponent, VisualMapComponent } from 'echarts/components'
import App from './App.vue'
import chinaGeoJSON from '@/assets/china.json'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

use([CanvasRenderer, MapChart, LineChart, GeoComponent, VisualMapComponent, TooltipComponent, GridComponent, LegendComponent])
registerMap('china', chinaGeoJSON as any)

const app = createApp(App)
app.mount('#app')
