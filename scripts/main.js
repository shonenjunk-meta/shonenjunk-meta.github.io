var data = {
  title: {
    guardians: 'Guardian',
    anbu: 'ANBU',
    warrior: 'Warrior',

    triplematch: 'Triple Color Match',
    eyehairmatch: 'Matching Eye & Hair',
    hairbgmatch: 'Matching Hair & Background',
    eyebgmatch: 'Matching Eye & Background',
    
    nerd: 'Nerd',
    trait6: '6-Trait',

    saint: 'Saint',
    cyborg: 'Cyborg',

    guts: 'Guts',
    yugi: 'Yugi',
    naruto: 'Naruto',
    sailormoon: 'Sailor Moon',
    opm: 'OPM',
    sakura: 'Sakura',
    eren: 'Eren',
    mugen: 'Mugen',

    sentai: 'Sentai',
    mecha: 'Mecha',
    aura: 'Force Aura',
    birdhelmet: 'Bird Helmet',
    straw: 'Straw Hat',
    raysbold: 'Rays Bold',
    commsa: 'Comms A',
    chunkyhair: 'Chunky Spiky Hair',
    raysthin: 'Rays Thin',
    partialmask: 'Partial Mask',
    animeeyes: 'Anime Eyes',
    sketchy: 'Sketchy Nose-Mouth',
    focusedeyes: 'Focused Eyes',
    aloofeyes: 'Aloof Eyes',
    commsb: 'Comms B',
    goggles: 'Googles',
    starhair: 'Star Hair',
    cyborgeyes: 'Cyborg Eyes'
    
  },
  guardians: [21, 115, 133, 285, 326, 375, 376, 437, 490, 559, 561, 584, 669, 722, 822, 1085, 1155, 1246, 1292, 1384, 1538, 1662, 1786, 1808, 1898, 2062, 2083, 2372, 2550, 2577, 2660, 2667, 2842, 2847, 2979, 2998, 3142, 3547, 3646],
  anbu: [22, 54, 429, 517, 942, 975, 1063, 1317, 1489, 1931, 2031, 2104, 2167, 2265, 2350, 2513, 2543, 2683, 2717, 2912, 3048, 3072, 3100, 3229, 3276, 3382, 3407, 3968, 4086, 4187, 4501, 4945, 5138, 5279, 5402, 5613, 6192, 6362, 6465, 6609, 6742, 6983, 7723, 7821, 7941, 8790],
  warrior: [255, 346, 372, 870, 1102, 1616, 1636, 1643, 1718, 2271, 2353, 2454, 2926, 3015, 3047, 3189, 3297, 3414, 4330, 4423, 4794, 5102, 5119, 5522, 6111, 6127, 6266, 7208, 7322, 7363, 7527, 7996, 8076, 8319, 8501, 8966],

  nerd: [0, 175, 188, 289, 427, 479, 738, 842, 890, 899, 1005, 1029, 1035, 1062, 1284, 1326, 1388, 1458, 1902, 1913, 1945, 1964, 2114, 2151, 2722, 2907, 2974, 3122, 3177, 3253, 3322, 3402, 3569, 3953, 4016, 4068, 4080, 4152, 4207, 4223, 4369, 4553, 4765, 4947, 5111, 5135, 5192, 5207, 5330, 5467, 5663, 5893, 5987, 6037, 6182, 6215, 6381, 6641, 6893, 6901, 6938, 7099, 7144, 7297, 7459, 7499, 7505, 7525, 7538, 7709, 7733, 7942, 8126, 8641, 8688, 8916, 8982],
  
  triplematch: [3220],
  eyehairmatch: [2099, 1473, 823],
  hairbgmatch: [3093, 3217, 3221],
  eyebgmatch: [1004],

  saint: [1835, 5476, 2373, 651, 2742, 1593, 1200, 8740],
  cyborg: [1583, 7928, 5448, 3855, 4333, 7285],

  guts: [4092, 6112, 6135],
  yugi: [717, 316, 2567],
  naruto: [7156, 1708, 3144, 3926],
  sailormoon: [1590, 4697, 7601, 6164],
  opm: [2252, 5811, 50, 1783, 1087, 1938],
  sakura: [7862, 716, 7622, 4341, 7982, 2207, 7800],
  eren: [438, 6086, 3205, 816, 6054, 4853, 4566, 6005, 4591, 7805],
  mugen: [2875, 5059, 8227, 2054, 915, 2195, 3114, 6637, 1493, 1599, 5362, 8516, 1393, 5697],

  sentai: [8536, 8819, 2909, 8913, 4185, 5084, 266, 2906, 5577, 2560, 8149, 7234, 6250, 5498],
  mecha: [1376, 321, 5101, 1810, 7773, 891, 3778, 8676, 7445, 4700, 2522, 7619, 6653, 7825, 8706, 3820, 3888, 5844, 8940, 4784],
  aura: [3270, 3809, 8101, 3231, 8463, 1345, 5180, 7655, 75, 2471, 6676, 4094, 5384, 2416, 5366, 5889, 8810, 2917, 769, 548],
  birdhelmet: [1727, 2580, 8551, 8096, 7467, 5150, 1128, 8545, 3181, 5316, 7679, 8024, 2700, 8295, 2010, 7707, 7721, 5599, 5959, 7977],
  straw: [8433, 5446, 4374, 4767, 4092, 7424, 3989, 3426, 617, 5066, 7224, 7657, 5600, 6644, 3512, 76, 6438, 823, 2977, 8662, 6255, 6133, 7501],
  raysbold: [5474, 5147, 3284, 1428, 6520, 5579, 4896, 4107, 405, 137, 143, 2709, 1820, 1150, 8097, 7713, 7837, 5476, 978, 2384, 1636, 740, 7964, 2373, 1738, 3084, 2604, 5095, 8710, 1889, 2547, 1714, 1061, 3145, 5465, 5700, 2712],
  commsa: [],
  chunkyhair: [],
  raysthin: [],
  partialmask: [],
  animeeyes: [],
  sketchy: [],
  focusedeyes: [],
  aloofeyes: [],
  commsb: [],
  goggles: [],
  starhair: [],
  cyborgeyes: [],
};

var meta = {
  guardians: [
    {
      value: ["Space Suit A", "Space Suit B", "Sci-Fi Jacket"],
      trait_type: "Clothes"
    },
    {
      value: ["Space Sword"],
      trait_type: "Swords & Wings"
    },
  ],
  anbu: [
    {
      value: ["Kitsune Mask"],
      trait_type: "Props"
    },
    {
      value: ["Double Katana", "Staff", "Short Staff", "Magic Staff", "M-16", "Giant Sword"],
      trait_type: "Swords & Wings"
    },
  ],
  warrior: [
    {
      value: ["Battle Armor", "Fantasy Battle Gear"],
      trait_type: "Clothes"
    },
    {
      value: ["Double Katana", "Staff", "Short Staff", "Magic Staff", "M-16", "Giant Sword"],
      trait_type: "Swords & Wings"
    },
  ],
  nerd: [
    {
      value: ["School Boy Uniform", "School Girl Uniform A", "School Girl Uniform B"],
      trait_type: "Clothes"
    },
    {
      value: ["Glasses Red"],
      trait_type: "Props",
    },
    {
      value: [undefined],
      trait_type: "Swords & Wings"
    },
  ],
  trait6: [
    {
      value: [undefined],
      trait_type: "Props",
    },
    {
      value: [undefined],
      trait_type: "Swords & Wings"
    },
    {
      value: [undefined],
      trait_type: "Tattoos"
    },
    {
      value: [undefined],
      trait_type: "Hair accessories"
    },
  ],
  saint: [
    {
      value: ["Rays Thin", "Rays Bold"],
      trait_type: "Background",
    },
    {
      value: ["Angel Wings"],
      trait_type: "Swords & Wings"
    },
  ],
  cyborg: [
    {
      value: ["Cyborg Eyes"],
      trait_type: "Eyes",
    },
    {
      value: ["Battle Armor"],
      trait_type: "Clothes"
    }
  ]
};

var main = {
  menuIsOpen: false,
  clearList: function() {
    document.getElementById("monkeyListContainer").innerHTML = "";
  },
  getMetaJunkies: function(metaFilter) {
    let metaJunkies = [];
    let isValid = true;
    junkies.forEach(junk => {
      for (let i = 0; i < metaFilter.length; i++) {
        filterData = metaFilter[i];
        isValid = filterData.value.includes(junk.metadata.attributes.find((att) => att.trait_type === filterData.trait_type)?.value);
        if (!isValid) {
          break;
        }
      }
      if (isValid) { metaJunkies.push(junk); }
    });

    // Sort by Rarity
    metaJunkies.sort(function(a, b){return a.rarity.rank - b.rarity.rank});
    return metaJunkies;
  },
  loadMeta: function(metaName) {
    main.clearList();
    var innerHtml = '';

    let metaJunkies = this.getMetaJunkies(meta[metaName]);

    metaJunkies.forEach(junk => {
      let img = junk.metadata.image;

      innerHtml = innerHtml + 
      `<a href="https://opensea.io/assets/0xf4121a2880c225f90dc3b3466226908c9cb2b085/${junk.tokenId}" target="_blank" style="height: 380px;">
        <img src="${img}" style="max-width: 330px;">
        <div style="height: 40px; text-align: left;">
          <span class="heading" style="color: #363636;">SJ#${junk.tokenId}<span>
          <span class="heading" style="color: #363636;font-weight: bold;">RANK ${junk.rarity.rank}<span>
        </div>
      </a>`;
    });

    main.updateTitle(data.title[metaName], metaJunkies.length);

    document.getElementById("monkeyListContainer").innerHTML = innerHtml;
    main.closeMenu();
    main.showListTitle();
    main.hideSummary();
  },
  loadMeta2: function(id) {
    main.clearList();
    var localData = data[id];
    var innerHtml = '';

    localData.forEach(id => {
      let img = junkies[id].metadata.image;
      let rarity = junkies[id].rarity;

      innerHtml = innerHtml + 
      `<a href="https://opensea.io/assets/0xf4121a2880c225f90dc3b3466226908c9cb2b085/${id}" target="_blank" style="height: 380px;">
        <img src="${img}" style="max-width: 330px;">
        <div style="height: 40px; text-align: left;">
          <span class="heading" style="color: #363636;">SJ#${id}<span>
          <span class="heading" style="color: #363636;">RANK ${rarity.rank}<span>
        </div>
      </a>`;
    });

    main.updateTitle(data.title[id], data[id].length);

    document.getElementById("monkeyListContainer").innerHTML = innerHtml;
    main.closeMenu();
    main.showListTitle();
    main.hideSummary();
  },
  updateTitle: function(desc, count) {
    document.getElementById("listDescription").innerHTML = desc;
    document.getElementById("listCount").innerHTML = count;
  },
  hideListTitle: function() {
    document.getElementById("listTitle").style.display = 'none';
  },
  showListTitle: function() {
    document.getElementById("listTitle").style.display = 'block';
  },
  hideSummary: function() {
    document.getElementById("summary").style.display = 'none';
  },
  showSummary: function() {
    document.getElementById("summary").style.display = 'block';
  },
  openMenu: function() {
    document.getElementById("burgerMenu").classList.add('is-active');
    document.getElementById("mainNavBar").classList.add('is-active');
    main.menuIsOpen = true;
  },
  closeMenu: function() {
    document.getElementById("burgerMenu").classList.remove('is-active');
    document.getElementById("mainNavBar").classList.remove('is-active');
    main.menuIsOpen = false;
  },
  toggleMenu: function() {
    if (main.menuIsOpen) {
      main.closeMenu();
    } else {
      main.openMenu();
    }
  },
  reset: function() {
    main.clearList();
    main.closeMenu();
    main.hideListTitle();
    main.showSummary();
  },
  initializeData: function() {
    let counter = 0;
    avatar.forEach((av) => {
      junkies[counter].hair = colors.find((c) => c.hash === av.hair && c.trait_type_name === 'hair').color;
      junkies[counter].eyes = colors.find((c) => c.hash === av.eyes && c.trait_type_name === 'eyes').color;
      junkies[counter].backdrop = colors.find((c) => c.hash === av.backdrop && c.trait_type_name === 'backdrop').color;
      junkies[counter].clothes = colors.find((c) => c.hash === av.clothes && c.trait_type_name === 'clothes').color;
      counter++;
    }); 
  }
};

var dataProcessed = false;
document.onreadystatechange = function () {
  if (document.readyState === "interactive") {
    main.initializeData();
    main.hideListTitle();
  }
}
