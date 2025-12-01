// app.js — desktop-only player logic

// ======== CONFIG ========
// If you later want to stream from your backend use BASE_API + '/stream/:id'
const BASE_API = ''; // set e.g. 'http://localhost:4000' if you want backend stream routes

// 🎶 Bond's Personal Tracks
const TRACKS = [
  {
    id: 'b1',
    title: 'Idre Nemdhi Yagi Erbeku',
    artist: 'B.Ajaneesh Loknath',
    album: 'DEVIL',
    cover: 'assets/cover1.jpeg',    // optional album cover
    url: 'assets/songs/Idre Nemdhi Yagi Erbeku.mp3'
  },
  {
    id: 'b2',
    title: 'Yaaru Yaaru',
    artist: 'C.Ashwath, B.Jayashree',
    album: 'Hatavadhi',
    cover: 'assets/cover2.jpeg',
    url: 'assets/songs/Yaaru Yaaru.mp3'
  },
    {
    id: 'b3',
    title: 'Khali Quateru',
    artist: 'Sharan, Arjun Janya',
    album: 'Victory',
   cover: 'assets/cover3.jpeg',    // optional album cover
    url: 'assets/songs/Khali Quateru.mp3'
  }, 
    {
    id: 'b4',
    title: 'Preethiya Hesaru Neenu',
    artist: 'Raghu Dixit',
    album: 'Happy New Year',
    cover: 'assets/cover4.jpeg',    // optional album cover
    url: 'assets/songs/Preethiya Hesaru Neenu.mp3'
  },  {
    id: 'b5',
    title: 'Shiva Antha Hoguthidhe',
    artist: 'V.Harikrishna',
    album: 'Jackie',
   cover: 'assets/cover5.jpeg',    // optional album cover
    url: 'assets/songs/Shiva Antha Hoguthidhe.mp3'
  },  {
    id: 'b6',
    title: 'Bangle Bangari',
    artist: 'Rohith Padaki',
    album: 'Ekka',
    cover: 'assets/cover6.jpeg',    // optional album cover
    url: 'assets/songs/Bangle Bangari.mp3'
  },  {
    id: 'b8',
    title: 'Guruvara',
    artist: 'Dr.Puneeth Rajakumar',
    album: 'Power',
    cover: 'assets/cover8.jpeg',    // optional album cover
    url: 'assets/songs/Guruvara.mp3'
  },  {
    id: 'b9',
    title: 'Thumba Nodbedi',
    artist: 'V.Harikrishna',
    album: 'Anna Bond',
   cover: 'assets/cover9.jpeg',    // optional album cover
    url: 'assets/songs/Thumba Nodbedi.mp3'
  },  {
    id: 'b10',
    title: 'Ninthali Nillalare',
    artist: 'S S.Thaman',
    album: 'Chakravyuha',
    cover: 'assets/cover10.jpeg',    // optional album cover
    url: 'assets/songs/Ninthali Nillalare.mp3'
  },  {
    id: 'b11',
    title: 'Yakingadhe',
    artist: 'Dr.Puneeth Rajakumar',
    album: 'Rajakumara',
    cover: 'assets/cover11.jpeg',    // optional album cover
    url: 'assets/songs/Yakingadhe.mp3'
  },  {
    id: 'b12',
    title: 'Mungaru Maleyali',
    artist: 'Sid Sriram',
    album: 'Andondittu Kaala',
    cover: 'assets/cover12.jpeg',    // optional album cover
    url: 'assets/songs/Mungaru Maleyali.mp3'
  },  {
    id: 'b13',
    title: 'Mele Neeli',
    artist: 'Dibhu Neenan Thomas, Anuradha but',
    album: 'Arm',
    cover: 'assets/cover13.jpeg',    // optional album cover
    url: 'assets/songs/Mele Neeli.mp3'
  },  {
    id: 'b14',
    title: 'Aigiri Nandhini',
    artist: 'Brodha v',
    album: 'Rap',
    cover: 'assets/cover14.jpeg',    // optional album cover
    url: 'assets/songs/Aigiri Nandhini.mp3'
  },  {
    id: 'b15',
    title: 'Bhale Bhale Chandhadha',
    artist: 'Ramesh, Suvashini',
    album: 'Amruthavarshini',
    cover: 'assets/cover15.jpeg',    // optional album cover
    url: 'assets/songs/Bhale Bhale Chandhadha.mp3'
  },  {
    id: 'b16',
    title: 'Boni Yagadha Hrudhayana',
    artist: 'V.Harikrishna',
    album: 'Anna Bond',
    cover: 'assets/cover16.jpeg',    // optional album cover
    url: 'assets/songs/Boni Yagadha Hrudhayana.mp3'
  },  {
    id: 'b17',
    title: 'No Problem',
    artist: 'Dhanush',
    album: 'Vajrakaya',
    cover: 'assets/cover17.jpeg',    // optional album cover
    url: 'assets/songs/No Problem.mp3'
  },  {
    id: 'b18',
    title: 'Agidhe agidhe',
    artist: 'Preetham Gubi',
    album: '99',
    cover: 'assets/cover18.jpeg',    // optional album cover
    url: 'assets/songs/Agidhe agidhe.mp3'
  },  {
    id: 'b19',
    title: 'Hosa Gana Bajana',
    artist: 'V.Harikrishna',
    album: 'Ram',
    cover: 'assets/cover19.jpeg',    // optional album cover
    url: 'assets/songs/Hosa Gana Bajana.mp3'
  },  {
    id: 'b20',
    title: 'Kareyole',
    artist: 'Radhika Chethan',
    album: 'Rangitharanga',
    cover: 'assets/cover20.jpeg',    // optional album cover
    url: 'assets/songs/Kareyole.mp3'
  },  {
    id: 'b21',
    title: 'Pankaja',
    artist: 'V.Harikrishna',
    album: 'Hudugaru',
    cover: 'assets/cover21.jpeg',    // optional album cover
    url: 'assets/songs/Pankaja.mp3'
  },  {
    id: 'b22',
    title: 'Chandra Chooda',
    artist: 'Midhun Mukundhan',
    album: 'Garuda Gamana Vrushaba Vahana',
    cover: 'assets/cover22.jpeg',    // optional album cover
    url: 'assets/songs/Chandra Chooda.mp3'
  }
];


// ======== DOM ========
const audio = document.getElementById('audio');
const trackListEl = document.getElementById('trackList');
const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progress = document.getElementById('progress');
const currentTimeEl = document.getElementById('currentTime');
const durationEl = document.getElementById('duration');
const volumeEl = document.getElementById('volume');
const muteBtn = document.getElementById('muteBtn');
const coverImg = document.getElementById('coverImg');
const trackTitle = document.getElementById('trackTitle');
const trackArtist = document.getElementById('trackArtist');
const trackAlbum = document.getElementById('trackAlbum');
const statusEl = document.getElementById('status');

let currentIndex = -1;
let isSeeking = false;
let isMuted = false;

// ======== INIT ========
function init() {
  // render track list
  TRACKS.forEach((t, i) => {
    const item = document.createElement('div');
    item.className = 'track-item';
    item.dataset.index = i;
    item.innerHTML = `
      <div class="track-meta">
        <div class="track-title">${escapeHtml(t.title)}</div>
        <div class="track-sub">${escapeHtml(t.artist)} • ${escapeHtml(t.album)}</div>
      </div>
      <div><button class="btn small play-direct">Play</button></div>
    `;
    item.addEventListener('click', () => selectTrack(i));
    item.querySelector('.play-direct').addEventListener('click', (e) => {
      e.stopPropagation();
      selectTrack(i);
    });
    trackListEl.appendChild(item);
  });

  // attach listeners
  playBtn.addEventListener('click', togglePlay);
  prevBtn.addEventListener('click', playPrev);
  nextBtn.addEventListener('click', playNext);

  audio.addEventListener('timeupdate', onTimeUpdate);
  audio.addEventListener('loadedmetadata', onLoadedMetadata);
  audio.addEventListener('ended', onEnded);
  audio.addEventListener('waiting', () => (statusEl.textContent = 'Buffering…'));
  audio.addEventListener('playing', () => (statusEl.textContent = 'Playing'));

  progress.addEventListener('input', onSeekInput);
  progress.addEventListener('change', onSeekChange);

  volumeEl.addEventListener('input', () => {
    audio.volume = Number(volumeEl.value);
    if (audio.volume === 0) {
      muteBtn.textContent = '🔇';
      isMuted = true;
    } else {
      muteBtn.textContent = '🔈';
      isMuted = false;
    }
  });
  muteBtn.addEventListener('click', toggleMute);

  // upload form (optional)
  const uploadForm = document.getElementById('uploadForm');
  if (uploadForm) {
    uploadForm.addEventListener('submit', onUploadSubmit);
  }

  // pre-set volume
  audio.volume = Number(volumeEl.value);
  statusEl.textContent = 'Idle';

  // initialize progress bar color
  updateProgressColor();
}

function escapeHtml(s) {
  return (s + '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

// ======== TRACK SELECTION & CONTROL ========
function selectTrack(index) {
  if (index < 0 || index >= TRACKS.length) return;
  currentIndex = index;
  const t = TRACKS[index];
  // if you use backend streaming route, uncomment and use BASE_API + '/stream/' + t.id
  const src = BASE_API && t.id && !t.id.startsWith('sh') ? `${BASE_API}/stream/${t.id}` : t.url;
  audio.src = src;
  audio.load();
  audio
    .play()
    .then(() => {
      playBtn.textContent = '⏸';
      statusEl.textContent = 'Playing';
    })
    .catch(() => {
      playBtn.textContent = '▶';
      statusEl.textContent = 'Ready';
    });
  // update UI
  coverImg.src = t.cover;
  trackTitle.textContent = t.title;
  trackArtist.textContent = t.artist;
  trackAlbum.textContent = t.album;
  highlightSelected();
}

function highlightSelected() {
  const items = document.querySelectorAll('.track-item');
  items.forEach((it) => it.classList.remove('selected'));
  if (currentIndex >= 0) items[currentIndex].classList.add('selected');
}

function togglePlay() {
  if (!audio.src) {
    // play first if none selected
    selectTrack(0);
    return;
  }
  if (audio.paused) {
    audio.play().then(() => (playBtn.textContent = '⏸')).catch(() => {});
  } else {
    audio.pause();
    playBtn.textContent = '▶';
    statusEl.textContent = 'Paused';
  }
}

function playNext() {
  if (currentIndex < 0) {
    selectTrack(0);
    return;
  }
  const next = (currentIndex + 1) % TRACKS.length;
  selectTrack(next);
}

function playPrev() {
  if (currentIndex < 0) {
    selectTrack(0);
    return;
  }
  const prev = (currentIndex - 1 + TRACKS.length) % TRACKS.length;
  selectTrack(prev);
}

// ======== PROGRESS & TIME ========

// Update the purple progress bar dynamically
function updateProgressColor() {
  if (!progress || !progress.max) return;
  const val = (progress.value / progress.max) * 100;
  progress.style.background = `linear-gradient(90deg, #a84eff ${val}%, rgba(255,255,255,0.1) ${val}%)`;
}

function onTimeUpdate() {
  if (!isSeeking) {
    progress.max = isFinite(audio.duration) ? audio.duration : 0;
    progress.value = audio.currentTime || 0;
    currentTimeEl.textContent = fmtTime(audio.currentTime || 0);
    updateProgressColor();
  }
}

function onLoadedMetadata() {
  durationEl.textContent = fmtTime(audio.duration || 0);
  progress.max = isFinite(audio.duration) ? audio.duration : 0;
  updateProgressColor();
}

function onSeekInput(e) {
  isSeeking = true;
  currentTimeEl.textContent = fmtTime(Number(e.target.value));
  updateProgressColor();
}

function onSeekChange(e) {
  audio.currentTime = Number(e.target.value);
  isSeeking = false;
  updateProgressColor();
}

function onEnded() {
  playBtn.textContent = '▶';
  statusEl.textContent = 'Ended';
}

// ======== MISC ========
function fmtTime(secs) {
  if (!isFinite(secs) || isNaN(secs)) return '0:00';
  const m = Math.floor(secs / 60);
  const s = Math.floor(secs % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

function toggleMute() {
  isMuted = !isMuted;
  if (isMuted) {
    audio.muted = true;
    muteBtn.textContent = '🔇';
  } else {
    audio.muted = false;
    muteBtn.textContent = '🔈';
  }
}

// ======== UPLOAD (optional) ========
async function onUploadSubmit(e) {
  e.preventDefault();
  const fileInput = document.getElementById('uploadFile');
  const titleInput = document.getElementById('uploadTitle');
  const file = fileInput.files[0];
  const title = titleInput.value || (file && file.name) || 'Untitled';
  if (!file) return alert('Choose an audio file to upload');

  // If you have a backend endpoint, set it here:
  const UPLOAD_URL = BASE_API ? BASE_API + '/api/songs' : null;
  if (!UPLOAD_URL) {
    return alert('No backend configured. Set BASE_API in app.js to enable upload.');
  }

  const fd = new FormData();
  fd.append('audio', file);
  fd.append('title', title);

  try {
    statusEl.textContent = 'Uploading…';
    const res = await fetch(UPLOAD_URL, { method: 'POST', body: fd });
    if (!res.ok) throw new Error('Upload failed');
    const saved = await res.json();
    statusEl.textContent = 'Uploaded';
    // after upload you might want to refresh the track list from backend (not implemented)
  } catch (err) {
    console.error(err);
    statusEl.textContent = 'Upload error';
    alert('Upload failed: ' + err.message);
  }
}
// ======== INIT ON LOAD ========
init();

// ======== SEARCH BAR FUNCTIONALITY ========
window.addEventListener('load', () => {
  const searchInput = document.getElementById('searchInput');
  const trackListEl = document.getElementById('trackList');

  if (searchInput && trackListEl) {
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase().trim();
      const items = trackListEl.querySelectorAll('.track-item');

      items.forEach(item => {
        const title = item.querySelector('.track-title').textContent.toLowerCase();
        const artist = item.querySelector('.track-sub').textContent.toLowerCase();
        const match = title.includes(query) || artist.includes(query);
        item.style.display = match ? 'flex' : 'none';
      });
    });
  }
});
