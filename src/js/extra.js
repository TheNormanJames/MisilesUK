const getScrollBarWith = () => innerWidth - document.documentElement.clientWidth
document.documentElement.style.setProperty('--scroll-bar', getScrollBarWith());
