import './App.css';
import './Home.css';

const iconBoxes = document.querySelectorAll(".icon-box");
const iconBoxContainers = document.querySelectorAll(".icon-container");
const closeBtns = document.querySelectorAll(".close-btn");
const maximizeBtns = document.querySelectorAll(".maximize-btn");
const body = document.querySelector("body");

iconBoxes.forEach((btn) => {
  btn.addEventListener("click", () => {
    let modal = btn.getAttribute("data-modal");
    document.getElementById(modal).style.display = "block";
    body.classList.add("prevent-background-scroll");
  });
});

closeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let modal = btn.closest(".popup");
    modal.style.display = "none";
    body.classList.remove("prevent-background-scroll");
    iconBoxContainers.forEach((container) => {
      container.style.display = "flex";
    });
  });
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("popup")) {
    e.target.style.display = "none";
    body.classList.remove("prevent-background-scroll");
  }
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("popup")) {
    e.target.style.display = "none";
    body.classList.remove("prevent-background-scroll");
  }
});

maximizeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let modal = btn.closest(".popup");
    let container = modal.querySelector(".popup-container");
    let body = modal.querySelector(".popup-body");

    if (modal.classList.contains("maximized")) {
      container.style.width = "min(900px, 90%)";
      container.style.top = "45%";
      body.style.height = "70vh";
    } else {
      container.style.width = "100%";
      container.style.top = "50%";
      body.style.height = "90vh";
    }

    modal.classList.toggle("maximized");
    body.classList.toggle("prevent-scroll");
  });
});

// var swiper = new Swiper(".swiper", {
//   preventClicks: true,
//   noSwiping: true,
//   freeMode: false,
//   spaceBetween: 10,
//   navigation: {
//     nextEl: ".next",
//     prevEl: ".prev",
//   },
//   mousewheel: {
//     invert: false,
//     thresholdDelta: 50,
//     sensitivity: 1,
//   },
//   breakpoints: {
//     0: {
//       slidesPerView: 1,
//     },
//     680: {
//       slidesPerView: 2,
//     },
//     1100: {
//       slidesPerView: 3,
//     },
//     1600: {
//       slidesPerView: 4,
//     },
//   },
// });


function Home() {
  return (
    <body>
    <section>
      <div class="icon-container">
        <div class="icon-box about" data-modal="about">
          <i class="fa-regular fa-address-card"></i>
        </div>
        <div class="icon-box projects" data-modal="projects">
          <i class="fa-solid fa-laptop-code"></i>
        </div>
        <div class="icon-box testimonial" data-modal="testimonial">
          <i class="fa-solid fa-users-rectangle"></i>
        </div>
        <div class="icon-box contact" data-modal="contact">
          <i class="fa-solid fa-envelope"></i>
        </div>
      </div>
    </section>

    <div class="popup" id="about">
      <div class="popup-container">
        <div class="popup-header">
          <div class="button-container">
            <button class="close-btn circle-btn red">
              <i class="fa-solid fa-xmark"></i>
            </button>
            <button class="close-btn circle-btn yellow">
              <i class="fa-solid fa-window-minimize"></i>
            </button>
            <button class="maximize-btn circle-btn green">
              <i class="fa-solid fa-up-right-and-down-left-from-center"></i>
            </button>
          </div>
        </div>
        <div class="popup-body about-container">
          <div class="img-frame">
            <img
              src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/1f842b2d-1245-497e-9a9e-b1cdb0da1eec"
              alt="" />
          </div>
          <div class="hero-content">
            <h1>Jewel Dennis</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum saepe, eius, iste repellat quae animi sint nam odit accusamus illum, et eos nemo. Provident necessitatibus, assumenda rerum nemo doloribus, corporis obcaecati magni, hic possimus voluptatum sit sapiente sequi pariatur amet tenetur! Recusandae aliquam dolorem a rerum molestias eligendi quasi nisi! Tenetur, esse aspernatur ipsam officia illum necessitatibus incidunt iusto, quisquam qui mollitia doloribus dicta quas quasi sapiente excepturi nostrum laboriosam eveniet possimus tempore sunt. Voluptate autem aspernatur optio! Unde id soluta accusantium exercitationem qui esse adipisci sit ullam nihil rerum? Incidunt porro totam eaque minus saepe ad dignissimos ut laudantium.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="popup" id="projects">
      <div class="popup-container">
        <div class="popup-header">
          <div class="button-container">
            <button class="close-btn circle-btn red">
              <i class="fa-solid fa-xmark"></i>
            </button>
            <button class="close-btn circle-btn yellow">
              <i class="fa-solid fa-window-minimize"></i>
            </button>
            <button class="maximize-btn circle-btn green">
              <i class="fa-solid fa-up-right-and-down-left-from-center"></i>
            </button>
          </div>
        </div>

    {/* </div> */}
    {/* </div> */}

    
    <div class="popup-body contact-container">
          <h1>Contact</h1>
          <p>Hi there, you can contact with me via email.</p>
          <form>
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name.." />

            <label for="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Your mail.." />

            {/* <label for="subject">Subject</label>
            <textarea
              id="subject"
              name="subject"
              placeholder="Write something.."
              style="height: 200px"></textarea> */}

            <button class="submit-btn more-btn" type="submit">
              <span>Submit <i class="fa-solid fa-paper-plane"></i></span>
            </button>
          </form>
        </div>
      </div>
    </div>

    </body>
  );
}

export default Home;
