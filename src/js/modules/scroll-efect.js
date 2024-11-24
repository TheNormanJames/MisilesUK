export const scrollEfect = () => {
  const hw = document.documentElement.scrollHeight;
  const hc = document.documentElement.clientHeight;

  const scrollEfect = (hw - hc) / 100;
  // 2710
  const rootStyle = document.documentElement.style;


  addEventListener('scroll', () => {
    rootStyle.setProperty('--width', `${Math.round(scrollY / scrollEfect)}`)
  })
}
