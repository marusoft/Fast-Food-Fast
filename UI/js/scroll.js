const scrollPage = () => {
  const pizzaSection = document.querySelector('#pizza');
  const localSection = document.querySelector('#local');
  const riceSection = document.querySelector('#rice');
  const snacksSection = document.querySelector('#snacks');
  const othersSection = document.querySelector('#others');

  const pizzaBtn = document.querySelector('.pizza');
  const localBtn = document.querySelector('.local');
  const riceBtn = document.querySelector('.rice');
  const snacksBtn = document.querySelector('.pizza');
  const othersBtn = document.querySelector('.others');

  const scrollTopBtn = document.querySelector('.scroll-top');

  const selectSection = (event) => {
    if (event.target === pizzaBtn) {
      pizzaSection.scrollIntoView();
    }
    if (event.target === localBtn) {
      localSection.scrollIntoView();
    }
    if (event.target === riceBtn) {
      riceSection.scrollIntoView();
    }
    if (event.target === snacksBtn) {
      snacksSection.scrollIntoView();
    }
    if (event.target === othersBtn) {
      othersSection.scrollIntoView();
    }
    if (event.target === scrollTopBtn) {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }

  pizzaBtn.addEventListener('click', selectSection);
  localBtn.addEventListener('click', selectSection);
  riceBtn.addEventListener('click', selectSection);
  snacksBtn.addEventListener('click', selectSection);
  othersBtn.addEventListener('click', selectSection);

  scrollTopBtn.addEventListener('click', selectSection);
}

window.load = scrollPage();