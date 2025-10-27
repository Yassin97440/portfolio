import PrimeVue from "primevue/config";
import ToastService from "primevue/toastservice";
import Toast from "primevue/toast";
import Tooltip from 'primevue/tooltip';


export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue);
    nuxtApp.vueApp.use(ToastService);
    nuxtApp.vueApp.component("Toast", Toast);
    nuxtApp.vueApp.directive('tooltip', Tooltip);

    return {
        provide: {
            toast: nuxtApp.vueApp.config.globalProperties.$toast
        }
    }
})
