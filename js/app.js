// app.js – Navigation, theme, alarm
(function () {

  /* ── Screen navigation ── */
  function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const target = document.getElementById(id);
    if (target) target.classList.add('active');
    window.scrollTo(0, 0);
  }

  // Delegate all navigation clicks
  document.addEventListener('click', function (e) {
    const link = e.target.closest('[data-target]');
    if (!link) return;
    e.preventDefault();

    const targetId = link.dataset.target;

    // Detail screen
    if (targetId === 'screen-detail') {
      const key = link.dataset.detail;
      const data = DETAILS[key];
      if (!data) return;

      // Set back button
      document.getElementById('detail-back-btn').dataset.target = data.back;

      // Set header color
      const header = document.getElementById('detail-header');
      header.style.background = data.color;

      // Set content
      document.getElementById('detail-title').textContent = data.title;
      document.getElementById('detail-content').innerHTML = data.content;
      document.getElementById('detail-img').src = 'img/placeholder.svg';

      showScreen('screen-detail');
      return;
    }

    showScreen(targetId);
  });

  /* ── Header buttons ── */
  document.getElementById('btn-settings').addEventListener('click', () => showScreen('screen-settings'));
  document.getElementById('btn-alarm').addEventListener('click',    () => showScreen('screen-alarma'));

  /* ── Theme toggle ── */
  const body       = document.body;
  const themeToggle = document.getElementById('theme-toggle');
  const themeLabel  = document.getElementById('theme-label');
  let darkMode = false;

  document.getElementById('toggle-theme').addEventListener('click', () => {
    darkMode = !darkMode;
    body.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    themeToggle.classList.toggle('on', darkMode);
    themeLabel.textContent = darkMode ? 'Modo oscuro activo' : 'Modo claro activo';
  });

  /* ── Alarm ── */
  let alarmCtx = null;
  let alarmNodes = [];
  let alarmActive = false;

  function buildAlarmSound(ctx) {
    // Simulate ambulance siren: alternating hi/lo tones
    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0.55, ctx.currentTime);
    masterGain.connect(ctx.destination);

    function sirenCycle(startTime) {
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const g1   = ctx.createGain();
      const g2   = ctx.createGain();

      osc1.type = 'sawtooth'; osc1.frequency.setValueAtTime(960, startTime);
      osc1.frequency.linearRampToValueAtTime(640, startTime + 0.5);

      osc2.type = 'sawtooth'; osc2.frequency.setValueAtTime(640, startTime + 0.5);
      osc2.frequency.linearRampToValueAtTime(960, startTime + 1.0);

      g1.gain.setValueAtTime(1, startTime); g1.gain.setValueAtTime(0, startTime + 0.5);
      g2.gain.setValueAtTime(0, startTime + 0.5); g2.gain.setValueAtTime(1, startTime + 1.0);

      osc1.connect(g1); g1.connect(masterGain);
      osc2.connect(g2); g2.connect(masterGain);

      osc1.start(startTime); osc1.stop(startTime + 1.0);
      osc2.start(startTime + 0.5); osc2.stop(startTime + 1.5);

      alarmNodes.push(osc1, osc2, g1, g2);
    }

    return { masterGain, sirenCycle };
  }

  let sirenInterval = null;

  function startAlarm() {
    alarmCtx = new (window.AudioContext || window.webkitAudioContext)();
    const { sirenCycle } = buildAlarmSound(alarmCtx);
    let t = alarmCtx.currentTime;
    for (let i = 0; i < 30; i++) sirenCycle(t + i * 1.0); // 30 seconds max
  }

  function stopAlarm() {
    if (alarmCtx) { alarmCtx.close(); alarmCtx = null; }
    alarmNodes = [];
  }

  const btnAlarm  = document.getElementById('btn-alarma-sound');
  const alarmIcon = document.getElementById('alarma-icon');
  const alarmStatus = document.getElementById('alarma-status');

  btnAlarm.addEventListener('click', () => {
    if (!alarmActive) {
      alarmActive = true;
      startAlarm();
      alarmIcon.classList.add('ringing');
      alarmStatus.textContent = '🚨 Alarma activa';
      alarmStatus.classList.add('active');
      btnAlarm.innerHTML = '<span class="material-symbols-rounded">volume_off</span> Detener Alarma';
      btnAlarm.classList.add('active-alarm');
    } else {
      alarmActive = false;
      stopAlarm();
      alarmIcon.classList.remove('ringing');
      alarmStatus.textContent = 'Alarma inactiva';
      alarmStatus.classList.remove('active');
      btnAlarm.innerHTML = '<span class="material-symbols-rounded">volume_up</span> Activar Alarma';
      btnAlarm.classList.remove('active-alarm');
    }
  });

  // Stop alarm when leaving alarm screen
  document.addEventListener('click', function (e) {
    const back = e.target.closest('.back-btn');
    if (back && alarmActive) {
      alarmActive = false;
      stopAlarm();
      alarmIcon.classList.remove('ringing');
      alarmStatus.textContent = 'Alarma inactiva';
      alarmStatus.classList.remove('active');
      btnAlarm.innerHTML = '<span class="material-symbols-rounded">volume_up</span> Activar Alarma';
      btnAlarm.classList.remove('active-alarm');
    }
  });

})();
