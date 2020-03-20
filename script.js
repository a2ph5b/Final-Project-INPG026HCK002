const container = document.querySelector('.container');
const tampil = document.querySelector('.besar');
const thumbs = document.querySelectorAll('.kecil');

container.addEventListener('click', function (e) {
    if (e.target.className == 'kecil') {
        tampil.src = e.target.src;
        tampil.classList.add('fade');
        setTimeout(function () {
            tampil.classList.remove('fade');
        }, 300)

        thumbs.forEach(function (kecil) {
            if (kecil.classList.contains('active')) {
                kecil.classList.remove('active');
            }
        });

        e.target.classList.add('active');

    }
});

// const baru1 = document.getElementById();
// const baru2 = document.getElementsByName();
// const baru3 = document.getElementsByClassName();
// const baru4 = document.querySelector();
// const baru5 = document.querySelectorAll();

// const ubah = document.getElementById('update');
// ubah.style.color = 'red';

// const h1 = document.getElementsByTagName('h1')[0];
// h1.style.fontSize = '50px';
// h1.style.position = 'auto';









// const tambahan = document.querySelector('.new');
// const update = document.createElement('img');