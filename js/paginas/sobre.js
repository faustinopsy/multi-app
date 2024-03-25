import renderMainLayout from '../components/templates/mainLayout.js';

function renderSobre() {
  const sobre = document.createElement('div');
  return renderMainLayout(sobre,'Sobre');
}

export default renderSobre;
