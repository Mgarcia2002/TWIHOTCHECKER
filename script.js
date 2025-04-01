const slicRanges = [
  { start: 606, end: 699, ob: 1, origin: 'BETPA T' },
  { start: 635, end: 635, ob: 1, origin: 'BETPAT' },
  { start: 703, end: 799, ob: 1, origin: 'PARNJ T' },
  { start: 860, end: 899, ob: 1, origin: 'PARNJ T' },
  { start: 1009, end: 1189, ob: 1, origin: 'PARNJ T' },
  { start: 2711, end: 2782, ob: 4, origin: 'GRENCN' },
  { start: 2791, end: 2799, ob: 4, origin: 'GRENCN' },
  { start: 2801, end: 2810, ob: 4, origin: 'GRENCN' },
  { start: 2811, end: 2840, ob: 4, origin: 'GRENCN' },
  { start: 2860, end: 2891, ob: 4, origin: 'GRENCN' },
  { start: 2910, end: 2941, ob: 4, origin: 'CAHSCT' },
  { start: 2950, end: 2950, ob: 4, origin: 'CAHSCT' },
  { start: 2960, end: 2992, ob: 4, origin: 'GRENCN' },
  { start: 3148, end: 3160, ob: 10, origin: 'JACFL N' },
  { start: 3200, end: 3230, ob: 10, origin: 'JACFL N' },
  { start: 3321, end: 3321, ob: 10, origin: 'JACFL N' },
  { start: 3343, end: 3350, ob: 10, origin: 'JACFL N' },
  { start: 3491, end: 3491, ob: 1, origin: 'JACFL D' },
  { start: 4022, end: 4022, ob: 7, origin: 'BLUKY P LCHKY P' },
  { start: 4029, end: 4029, ob: 7, origin: 'BLUKY P LCHKY P' },
  { start: 4369, end: 4369, ob: 7, origin: 'TOLOH P' },
  { start: 4519, end: 4529, ob: 7, origin: 'SHAOH P CINOH P' },
  { start: 4539, end: 4549, ob: 7, origin: 'WCAOH P DAYOH P' },
  { start: 4601, end: 4601, ob: 8, origin: 'ANDIN P, CASIN P, EVNIN P, I81IN P' },
  { start: 4624, end: 4624, ob: 8, origin: 'ANDIN P, CASIN P, EVNIN P, I81IN P' },
  { start: 4629, end: 4629, ob: 8, origin: 'ANDIN P, CASIN P, EVNIN P, I81IN P' },
  { start: 4770, end: 4770, ob: 8, origin: 'ANDIN P, CASIN P, EVNIN P, I81IN P' },
  { start: 4619, end: 4619, ob: 5, origin: '16IN P' },
  { start: 4628, end: 4628, ob: 3, origin: 'FLDIN P' },
  { start: 4514, end: 4514, ob: 6, origin: 'MARWI P' },
  { start: 4807, end: 4809, ob: 10, origin: '4807 P MHEMIP' },
  { start: 4822, end: 4830, ob: 10, origin: 'WOOMIP CICMIP' },
  { start: 4850, end: 4860, ob: 10, origin: 'FLIMIP SAGMIP' },
  { start: 4890, end: 4890, ob: 10, origin: 'LANMI P' },
  { start: 4920, end: 4922, ob: 10, origin: 'JACMI P ADRMI P' },
  { start: 5010, end: 5010, ob: 3, origin: 'WTEIA P' },
  { start: 5039, end: 5039, ob: 3, origin: 'WTEIA P' },
  { start: 5079, end: 5079, ob: 3, origin: 'WTEIA P' },
  { start: 5220, end: 5260, ob: 3, origin: 'DAVIA N' },
  { start: 5380, end: 5390, ob: 6, origin: 'OAKWIN' },
  { start: 5414, end: 5449, ob: 6, origin: 'OAKWIN' },
  { start: 5459, end: 5469, ob: 6, origin: 'OAKWIN' },
  { start: 5549, end: 5549, ob: 1, origin: 'MINMN P MGRMN P' },
  { start: 5599, end: 5599, ob: 1, origin: 'MINMN P MGRMN P' },
  { start: 6200, end: 6245, ob: 8, origin: 'DECILN' },
  { start: 6265, end: 6265, ob: 8, origin: 'DECILN' },
  { start: 6280, end: 6290, ob: 8, origin: 'DECILN' },
  { start: 6300, end: 6330, ob: 4, origin: 'EARMO S' },
  { start: 6357, end: 6357, ob: 4, origin: 'EARMO S' },
  { start: 7229, end: 7229, ob: 5, origin: 'LITART' },
  { start: 7270, end: 7270, ob: 5, origin: 'LITART' },
  { start: 7500, end: 7512, ob: 10, origin: 'INDTX N' },
  { start: 7519, end: 7529, ob: 10, origin: 'INDTX N' },
  { start: 7619, end: 7619, ob: 10, origin: 'INDTX N' },
  { start: 7687, end: 7699, ob: 10, origin: 'INDTX N' },
  { start: 7800, end: 7884, ob: 10, origin: 'INDTXN' },
  { start: 7864, end: 7864, ob: 10, origin: 'INDTX N' },
  { start: 7880, end: 7884, ob: 10, origin: 'INDTX N' },
  { start: 7999, end: 7999, ob: 7, origin: 'EPATX P' },
  { start: 8363, end: 8363, ob: 4, origin: 'NAPID P, MRIID P, BOIID P' },
  { start: 8367, end: 8367, ob: 4, origin: 'NAPID P, MRIID P, BOIID P' },
  { start: 8379, end: 8379, ob: 4, origin: 'NAPID P, MRIID P, BOIID P' },
  { start: 8472, end: 8472, ob: 1, origin: 'GDRAZ N' },
  { start: 8643, end: 8643, ob: 3, origin: 'LVENV P' },
  { start: 8909, end: 8909, ob: 4, origin: 'LASNV P, LVENV P' },
  { start: 8919, end: 8919, ob: 4, origin: 'LASNV P, LVENV P' },
  { start: 8913, end: 8913, ob: 3, origin: '8913 P' }
];
function checkSLIC() {
  const rawInput = document.getElementById('slicInput').value.trim();
  const slic = parseInt(rawInput, 10);
  const resultDiv = document.getElementById('result');
  const detailDiv = document.getElementById('detail');

  if (isNaN(slic)) {
    resultDiv.innerHTML = '<span style="color: blue">COLD</span>';
    detailDiv.innerHTML = '';
    detailDiv.style.color = 'blue';
    return;
  }

  const range = slicRanges.find(r => slic >= r.start && slic <= r.end);

  if (range) {
    resultDiv.innerHTML = '<span style="color: red">HOT</span>';
    detailDiv.innerHTML = `OB ${range.ob}<br>${range.origin}`;
    detailDiv.style.color = 'red';
  } else {
    resultDiv.innerHTML = '<span style="color: blue">COLD</span>';
    detailDiv.innerHTML = '';
    detailDiv.style.color = 'blue';
  }
}

window.onload = () => {
  const logo = document.getElementById('logo');
  logo.classList.add('fade-in');
  setTimeout(() => {
    logo.classList.remove('fade-in');
    logo.classList.add('fade-out');
  }, 2000);
};
