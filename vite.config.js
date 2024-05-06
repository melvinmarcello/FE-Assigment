import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'


const manifestForPlugIn = {
  registerType:'prompt',
  includeAssests:['favicon.ico', "apple-touc-icon.png", "masked-icon.svg"],
  manifest:{
    name:"PokeDex",
    short_name:"PokeDex",
    description:"Pokemon dex app",
    icons:[{
      src: './vite.svg',
      sizes:'192x192',
      type:'image/png',
      purpose:'favicon'
    },
    {
      src:'./vite.svg',
      sizes:'512x512',
      type:'image/png',
      purpose:'favicon'
    },
    {
      src: './vite.svg',
      sizes:'180x180',
      type:'image/png',
      purpose:'apple touch icon',
    },
    {
      src: './maskable_icon.png',
      sizes:'512x512',
      type:'image/png',
      purpose:'any maskable',
    }
  ],
  theme_color:'#171717',
  background_color:'#f0e7db',
  display:"standalone",
  scope:'/',
  start_url:"/",
  orientation:'portrait'
  }
}





// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugIn)],
})
