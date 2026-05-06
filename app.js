//Navigation Menu
const selectElement = (s) => document.querySelector(s);

selectElement('.open').addEventListener('click', () => {
    selectElement('.nav-list').classList.add('active');
});

selectElement('.close').addEventListener('click', () => {
    selectElement('.nav-list').classList.remove('active');
});

about_item.addEventListener('click', () => {
  selectElement('.nav-list').classList.remove('active');
});

contact_item.addEventListener('click', () => {
  selectElement('.nav-list').classList.remove('active');
});


//////////////////////////////////////////////////
//Unfinished Section
const unfinishedRoot = document.querySelector('.img-menu');
if (unfinishedRoot) {
  const image = document.getElementById('image');
  const description = document.querySelector('#description');
  const watermarkFrame = document.querySelector('.watermark-frame');

  const setUnfinished = (src, label, year) => {
    if (image) image.src = src;
    if (description) description.textContent = label;
    if (watermarkFrame) watermarkFrame.dataset.year = year || '2021';
  };

  const wire = (id, src, label) => {
    const btn = document.querySelector(id);
    if (!btn) return;
    btn.addEventListener('click', () => setUnfinished(src, label, btn.dataset.year));
  };

  wire('#lebron', 'assets/lebron.jpg', 'Lebron James');
  wire('#kobe2', 'assets/kobe2.jpg', 'Kobe Bryant');
  wire('#steph', 'assets/steph.jpg', 'Steph Curry');
  wire('#ariana2', 'assets/ariana2.jpg', 'Ariana Grande');
  wire('#virgil', 'assets/virgil.jpg', 'Virgil Abloh');
  wire('#GIAW', 'assets/GIAW.jpg', 'Ariana Grande');
  wire('#dababy', 'assets/dababy.jpg', 'DaBaby');
  wire('#jordan', 'assets/jordan.jpg', 'Michael Jordan');
  wire('#maleeyes', 'assets/maleeyes.jpg', 'Male Eyes');
  wire('#harden', 'assets/harden.jpg', 'James Harden');
  wire('#ari', 'assets/ari.jpg', 'Ariana Grande');
  wire('#durant', 'assets/durant.jpg', 'Kevin Durant');
}