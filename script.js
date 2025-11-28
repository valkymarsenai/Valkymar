function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

const form = document.getElementById('formContato');
const msgRetorno = document.getElementById('msgRetorno');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  msgRetorno.textContent = "Mensagem enviada com sucesso!";
  msgRetorno.style.color = "green";
  form.reset();
});
