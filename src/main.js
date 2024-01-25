import { defineCustomElement } from 'vue'

import Widget from './components/Widget.ce.vue'

const LightningWidgetFixedElement = defineCustomElement(Widget)

customElements.define('lightning-fixed-alby-trigger', LightningWidgetFixedElement)
