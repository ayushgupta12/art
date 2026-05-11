//Navigation Menu
const selectElement = (s) => document.querySelector(s);

const BIRTH_YEAR = 2004;

const yearToAge = (yearLike) => {
  const year = Number.parseInt(String(yearLike), 10);
  if (!Number.isFinite(year)) return null;
  return year - BIRTH_YEAR;
};

const ensureArtMeta = (container) => {
  if (!container) return null;
  let meta = container.querySelector(':scope > .art-meta');
  if (!meta) {
    meta = document.createElement('div');
    meta.className = 'art-meta';

    const ageLine = document.createElement('div');
    ageLine.className = 'art-meta-age';

    const yearLine = document.createElement('div');
    yearLine.className = 'art-meta-year';

    meta.append(ageLine, yearLine);
    container.appendChild(meta);
  }
  return meta;
};

const setArtMeta = (container, yearLike) => {
  const year = Number.parseInt(String(yearLike), 10);
  const age = yearToAge(year);
  if (!Number.isFinite(year) || age === null) return;

  const meta = ensureArtMeta(container);
  if (!meta) return;

  const ageLine = meta.querySelector('.art-meta-age');
  const yearLine = meta.querySelector('.art-meta-year');
  if (ageLine) ageLine.textContent = `Age: ${age} (${year})`;
  if (yearLine) yearLine.textContent = '';
};

const applyCaptionMeta = (root = document) => {
  // Gallery page cards
  root.querySelectorAll('.art-item[data-year]').forEach((item) => {
    const caption = item.querySelector('.description');
    setArtMeta(caption, item.dataset.year);
  });

  // Home page featured cards
  root.querySelectorAll('.art-img[data-year]').forEach((imgFrame) => {
    const caption = imgFrame.parentElement?.querySelector(':scope > .art-details');
    setArtMeta(caption, imgFrame.dataset.year);
  });

  // Unfinished page main caption (below the big image)
  const unfinishedCaption = root.querySelector('.unfinished-description');
  if (unfinishedCaption) {
    const watermarkFrame = root.querySelector('.watermark-frame');
    const year = watermarkFrame?.dataset.year;
    if (year) setArtMeta(unfinishedCaption, year);
  }
};

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
  const unfinishedCaption = document.querySelector('.unfinished-description');

  const setUnfinished = (src, label, year) => {
    if (image) image.src = src;
    if (description) description.textContent = label;
    if (watermarkFrame) {
      const safeYear = year || '2021';
      watermarkFrame.dataset.year = safeYear;
    }

    // Update the caption meta under the image
    if (unfinishedCaption) setArtMeta(unfinishedCaption, year || '2021');
  };

  const wire = (id, src, label) => {
    const btn = document.querySelector(id);
    if (!btn) return;
    btn.addEventListener('click', () => setUnfinished(src, label, btn.dataset.year));
  };

  wire('#lebron', 'assets/lebron.jpg', 'Lebron James');
  wire('#kobe2', 'assets/kobe2.jpg', 'Kobe Bryant');
  wire('#steph', 'assets/steph.jpg', 'Steph Curry');
  wire('#virgil', 'assets/virgil.jpg', 'Virgil Abloh');
  wire('#GIAW', 'assets/GIAW.jpg', 'Ariana Grande');
  wire('#maleeyes', 'assets/maleeyes.jpg', 'Male Eyes');
  wire('#harden', 'assets/harden.jpg', 'James Harden');
  wire('#durant', 'assets/durant.jpg', 'Kevin Durant');
}

// Most pages include app.js at the end of <body>, but keep this robust.
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => applyCaptionMeta());
} else {
  applyCaptionMeta();
}