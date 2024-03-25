import renderMainLayout from '../components/templates/mainLayout.js';

function renderHome() {
  const home = document.createElement('div');
  return renderMainLayout(home,'Home');
}

export default renderHome;
