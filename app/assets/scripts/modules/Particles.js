class Particles {

  constructor() {
    this.particles = document.getElementById("#particles-js");
    this.particleLoad()
  }
  

  particleLoad() {
    this.particles = {
    "fpsLimit": 60,
    "particles": {
      "number": {
        "value": 40,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#7e9af5",
        "animation": {
          "enable": true,
          "speed": 20,
          "sync": true
        }
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0
        },
        "polygon": {
          "nb_sides": 5
        },
      },
      "opacity": {
        "value": 0.7,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 3,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 20,
          "size_min": 0.1,
          "sync": false
        }
      },
      "links": {
        "enable": false,
        "distance": 100,
        "color": "#dddd",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 0.3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "background": {
      "color": "none",
      "image": "",
      "position": "50% 50%",
      "repeat": "no-repeat",
      "size": "cover"
    }
  };
  tsParticles.load('particles-js', this.particles)

  }
}
  
export default Particles;