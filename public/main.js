const form = document.querySelector('form');
const mess = document.querySelector('.error__message');

form.onsubmit = async (e) => {
  e.preventDefault();
  try {
    const title = form.title.value;
    console.log('🚀 ~ file: main.js:8 ~ form.onsubmit= ~ title', title);
    const email = form.email.value;
    const res = await fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, email, completed: false }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data);
    //window.location.reload();
  } catch (error) {
    mess.style.display = 'block';
    console.log(error.message);
  }
};
