//import './assets/main.css'
//import 'vant/lib/index.css'
import './assets/frame.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'vuetify/styles'
import { createVuetify } from "vuetify"
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from "vuetify/iconsets/mdi-svg"

import App from './App.vue'
import router from './router'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    }
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: { // https://www.xjtlu.edu.cn/zh/about/brand-resources
          primary: '#010544', // 西浦蓝
          /* 在https://m2.material.io/design/color/the-color-system.html#tools-for-picking-colors
             基于西浦蓝创建的系列色（西浦蓝为900）*/
          'primary-lighten-1': '#152065', // 700
          'primary-lighten-2': '#232f77', // 500
          /* 系列结束 */
          secondary: '#ce57c1' // 西浦紫
        }
      }
    }
  }
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
