import Page from '@App/page.js';
import TextBanner from '@/components/text-banner/TextBanner';
import CountdownBanner from '@/components/countdown-banner/CountdownBanner';

document.addEventListener('DOMContentLoaded', () => {
  
  const cList = [
    {
      selector: 'js-webar-r-pdp-hero-component',
      component: TextBanner
    },
    {
      selector: 'js-webar-r-pdp-countdown-component',
      component: CountdownBanner
    }
  ]
  
  const pdp = new Page({
    vComponents: [],
    rComponents: cList
  });

  pdp.load();

});