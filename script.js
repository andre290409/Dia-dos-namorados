//Variables
let mobile_media_query = window.matchMedia("(max-width: 400px)");
let tablet_media_query = window.matchMedia(
  "(min-width: 400px) and (max-width: 600px)"
);
const notes = document.querySelectorAll(".js-note");

//-> Function that resets the size of the notes.
function recize_notes() {
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].classList.contains("active")) {
      notes[i].classList.remove("active");
      gsap.set(notes[i], {
        height: "13%",
        clearProps: "all"
      });
    }
  }
}

//-> Main function that enables all the notes.
function notes_ready() {
  gsap.to(".js-envelop-content", {
    height: "130%",
    duration: 0.5
  });

  for (let i = 0; i < notes.length; i++) {
    notes[i].addEventListener("click", function () {
      if (mobile_media_query.matches) {
        if (this.classList.contains("active")) {
          this.classList.remove("active");
          gsap.set(this, {
            height: "13%",
            clearProps: "all"
          });
        } else {
          recize_notes();
          this.classList.add("active");
          gsap.set(this, {
            height: Math.min(90, 60 + 20 * i) + "%"
          });
        }
      } else if (tablet_media_query.matches) {
        if (this.classList.contains("active")) {
          this.classList.remove("active");
          gsap.set(this, {
            height: "13%",
            clearProps: "all"
          });
        } else {
          recize_notes();
          this.classList.add("active");
          gsap.set(this, {
            height: Math.min(85, 50 + 18 * i) + "%"
          });
        }
      } else {
        if (this.classList.contains("active")) {
          this.classList.remove("active");
          gsap.set(this, {
            height: "13%",
            clearProps: "all"
          });
        } else {
          recize_notes();
          this.classList.add("active");
          gsap.set(this, {
            height: Math.min(80, 45 + 15 * i) + "%"
          });
        }
      }
    });
  }
}

//-> Function that set up the up paper of the envelope.
function set_up_paper() {
  var arr = [0, 0, 100, 0, 50, 61];
  gsap.set(".js-up-paper", {
    bottom: "97%",
    rotation: 180,
    zIndex: 200,
    clipPath:
      "polygon(" +
      arr[0] +
      "%" +
      arr[1] +
      "%," +
      arr[2] +
      "%" +
      arr[3] +
      "%," +
      arr[4] +
      "%" +
      arr[5] +
      "%)",
    onComplete: notes_ready
  });
}

//-> Function that starts the up paper transition.
function envelop_transition() {
  gsap.to(".js-up-paper", {
    bottom: "1%",
    duration: 0.25,
    onComplete: set_up_paper
  });
  document
    .querySelector(".js-up-paper")
    .removeEventListener("click", envelop_transition);
  document.querySelector(".js-up-paper").classList.remove("cursor");
}

//-> Function that allows cut the sticker.
function sticker() {
  gsap.set(".js-sticker", { width: "20%", left: "-80%" });
  document.body.classList.remove("scissors");
  document.querySelector(".js-sticker").removeEventListener("click", sticker);
  document
    .querySelector(".js-up-paper")
    .addEventListener("click", envelop_transition);
  document.querySelector(".js-up-paper").classList.add("cursor");
}

document.querySelector(".js-sticker").addEventListener("click", sticker);

window.onresize = function (event) {
  recize_notes();
};

const photos = [
  "https://dl.dropboxusercontent.com/scl/fi/2e5ms6ksfdgm42ul9byog/IMG_5314.heic?rlkey=81lpa4b6ejattr0xhc6lxruqj&st=tvyxnb14&raw=1",
  "https://dl.dropboxusercontent.com/scl/fi/5qvkypz7c35sg1ko0jdye/IMG_7040.jpg?rlkey=eczo4yo0ikozg9y12g1lk86ar&st=f5lkmzv5&raw=1",
  "https://dl.dropboxusercontent.com/scl/fi/r15lumnqohbdsbl3z6r7j/IMG_7124.HEIC?rlkey=rdaqum5o4fn0vxyh1k3a55y0u&st=speco48j&raw=1",
  "https://dl.dropboxusercontent.com/scl/fi/g0t593p7zj1rntka903mp/IMG_7457.heic?rlkey=qyjr89wc63n3bphwya7gostta&st=wolutkn3&raw=1",
  "https://dl.dropboxusercontent.com/scl/fi/czlgpqrjbmfjp632yecee/Photo-Apr-02-2025-6-03-53-PM.jpg?rlkey=vc2tcpcdwono5jewwqddr85wm&st=eyaujrq8&raw=1",
  "https://dl.dropboxusercontent.com/scl/fi/mrutd91oumd351zlho0xi/Photo-Apr-02-2025-6-03-54-PM.jpg?rlkey=735x27ag6z22l20nc3t6jpv9c&st=qwkdtsft&raw=1",
  "https://dl.dropboxusercontent.com/scl/fi/g7db4hx3d9cwkdx7w1zqq/Photo-Apr-13-2024-8-35-54-PM.jpg?rlkey=06vc604tzg2d1d14tw81w7g1f&st=9y59p5tm&raw=1",
  "https://dl.dropboxusercontent.com/scl/fi/qnn5g4uadorasizkssgr7/Photo-Jun-13-2025-4-54-29-PM.jpg?rlkey=0s57e1j42yq1xj904j5snt2cs&st=sowgurq0&raw=1",
  "https://dl.dropboxusercontent.com/scl/fi/zbau52qrnouh37axk25ku/Photo-May-20-2024-11-26-34-PM.png?rlkey=9i1i6rw6qam9kkg6fio4bybda&st=ft87mjj9&raw=1",
  "https://dl.dropboxusercontent.com/scl/fi/65qmfdi28py0vxn9trich/PHOTO-2022-05-01-12-23-49.jpg?rlkey=1uubsfax183o17dj99jz2t9qm&st=1ad5b3ze&raw=1",
  "https://dl.dropboxusercontent.com/scl/fi/lr53vqvrka5c9f2g2xu5o/PHOTO-2022-07-12-22-17-29.jpg?rlkey=7934fpv42obcrnjbwy76bl3uf&st=jxvktn3w&raw=1",
  "https://dl.dropboxusercontent.com/scl/fi/2kgaifzw9mkbhw13rg1xo/PHOTO-2022-06-23-09-13-30.jpg?rlkey=r173aw45qhk9wpe3gtq7v43o7&st=9ebs79wa&raw=1",
  "https://dl.dropboxusercontent.com/scl/fi/faxncdbj2c6g7vxcbbvj5/PHOTO-2022-07-12-22-17-34.jpg?rlkey=r8izojied86cw0ot2b0eelvww&st=nrfh9in8&raw=1",
  "https://dl.dropboxusercontent.com/scl/fi/sgf3k67w88qp9ted02if0/PHOTO-2023-09-21-00-00-09.jpg?rlkey=qf864i8ox8jr1t4wifdrs089t&st=hdrea2on&raw=1",
  "https://dl.dropboxusercontent.com/scl/fi/xtf6t6tfhhymzkwoouzg7/PHOTO-2025-04-02-18-24-49.jpg?rlkey=w2wkkvz8r9vy5ogbnqgkahjry&st=nrb353hl&raw=1"
];

function createFloatingPhotos() {
  const container = document.querySelector('.floating-photos');
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  
  photos.forEach((photo, index) => {
    const img = document.createElement('img');
    img.src = photo;
    img.className = 'floating-photo';
    img.alt = `Nossa memória ${index + 1}`;
    
    // Tamanho dinâmico (ajustado para melhor distribuição)
    const size = 80 + Math.random() * 70; // 80px a 150px
    img.style.width = `${size}px`;
    img.style.height = `${size}px`;
    
    // Posição inicial aleatória (cobre toda a tela)
    img.style.left = `${Math.random() * (screenWidth - size)}px`;
    img.style.top = `${Math.random() * (screenHeight - size)}px`;
    
    // Rotação inicial sutil
    img.style.transform = `rotate(${Math.random() * 15 - 7.5}deg)`;
    
    container.appendChild(img);
    
    // Inicia movimento
    startContinuousMovement(img, screenWidth, screenHeight);
  });
}

// Movimento fluido e controlado
function startContinuousMovement(img, maxX, maxY) {
  const imgWidth = parseInt(img.style.width);
  const imgHeight = parseInt(img.style.height);
  
  const move = () => {
    // Novo destino aleatório (dentro dos limites da tela)
    const targetX = Math.random() * (maxX - imgWidth);
    const targetY = Math.random() * (maxY - imgHeight);
    
    // Duração baseada na distância (movimento mais natural)
    const distance = Math.sqrt(
      Math.pow(targetX - parseFloat(img.style.left), 2) +
      Math.pow(targetY - parseFloat(img.style.top), 2)
    );
    const duration = Math.min(60000, distance * 50); // Máx 60 segundos
    
    // Animação principal
    img.animate(
      [
        { left: `${img.style.left}`, top: `${img.style.top}` },
        { left: `${targetX}px`, top: `${targetY}px` }
      ],
      {
        duration: duration,
        easing: 'linear',
        fill: 'forwards'
      }
    ).onfinish = () => {
      img.style.left = `${targetX}px`;
      img.style.top = `${targetY}px`;
      move(); // Próximo movimento
    };
  };
  
  move(); // Inicia o ciclo
}

// Ativa quando a carta abre
document.querySelector('.js-sticker').addEventListener('click', () => {
  setTimeout(createFloatingPhotos, 1000);
});

// Redimensionamento responsivo
window.addEventListener('resize', () => {
  document.querySelectorAll('.floating-photo').forEach(img => {
    img.style.left = `${Math.random() * (window.innerWidth - parseInt(img.style.width))}px`;
    img.style.top = `${Math.random() * (window.innerHeight - parseInt(img.style.height))}px`;
  });
});