// particles.js – Landing page particle animation
(function () {
  const canvas = document.getElementById('particles-canvas');
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  function rand(min, max) { return Math.random() * (max - min) + min; }

  function createParticle() {
    return {
      x:    rand(0, W),
      y:    rand(0, H),
      r:    rand(2, 5),
      dx:   rand(-0.6, 0.6),
      dy:   rand(-0.8, -0.2),
      alpha: rand(0.3, 0.8),
      da:   rand(-0.005, 0.005),
    };
  }

  for (let i = 0; i < 80; i++) particles.push(createParticle());

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${p.alpha})`;
      ctx.fill();

      p.x += p.dx; p.y += p.dy;
      p.alpha += p.da;
      if (p.alpha <= 0.1 || p.alpha >= 0.9) p.da *= -1;
      if (p.y < -10) { p.y = H + 10; p.x = rand(0, W); }
      if (p.x < -10) p.x = W + 10;
      if (p.x > W + 10) p.x = -10;
    });
    requestAnimationFrame(draw);
  }
  draw();
})();
