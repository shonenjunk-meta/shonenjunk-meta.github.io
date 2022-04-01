var data = {
  title: {
    guardians: 'Guardian',
    anbu: 'ANBU',
    warrior: 'Warrior',

    fullmatch: 'Full Match',
    triplematch: 'Triple Color Match',
    eyebgmatch: 'Matching Eye & Backdrop',
    eyehairmatch: 'Matching Eye & Hair',
    hairbgmatch: 'Matching Hair & Backdrop',
    hairclothesmatch: 'Matching Hair & Clothes',
    clothesbgmatch: 'Matching Clothes & Backdrop',
    clotheseyematch: 'Matching Clothes & Eye',

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
  ],
  guts: [
    {
      value: ["Fantasy Battle Gear"],
      trait_type: "Clothes"
    },
    {
      value: ["Short Spiky Hair"],
      trait_type: "Hair",
    },
  ],
  yugi: [
    {
      value: ["Androgynous Jacket"],
      trait_type: "Clothes"
    },
    {
      value: ["Star"],
      trait_type: "Hair",
    },
  ],
  naruto: [
    {
      value: ["Turtleneck Sweater"],
      trait_type: "Clothes"
    },
    {
      value: ["Spiky Top"],
      trait_type: "Hair",
    },
  ],
  sailormoon: [
    {
      value: ["School Girl Uniform A"],
      trait_type: "Clothes"
    },
    {
      value: ["Pigtails"],
      trait_type: "Hair",
    },
  ],
  opm: [
    {
      value: ["Superhero"],
      trait_type: "Clothes"
    },
    {
      value: ["Bald"],
      trait_type: "Hair",
    },
  ],
  sakura: [
    {
      value: ["Qipao"],
      trait_type: "Clothes"
    },
    {
      value: ["Mid Middle Part"],
      trait_type: "Hair",
    },
  ],
  eren: [
    {
      value: ["Field Jacket"],
      trait_type: "Clothes"
    },
    {
      value: ["Short"],
      trait_type: "Hair",
    },
  ],
  mugen: [
    {
      value: ["Noragi"],
      trait_type: "Clothes"
    },
    {
      value: ["Spiky Afro"],
      trait_type: "Hair",
    },
  ],
  sentai: [
    {
      value: "Sentai Helmet",
      trait_type: "Props"
    },
  ],
  mecha: [
    {
      value: "Mecha Helmet",
      trait_type: "Props"
    },
  ],
  aura: [
    {
      value: "Force Aura",
      trait_type: "Props"
    },
  ],
  birdhelmet: [
    {
      value: "Bird Helmet",
      trait_type: "Props"
    },
  ],
  straw: [
    {
      value: "Straw Hat",
      trait_type: "Hair accessories",
    },
  ],
  raysbold: [
    {
      value: "Rays Bold",
      trait_type: "Background",
    },
  ],
  commsa: [
    {
      value: "Comms A",
      trait_type: "Hair accessories",
    }
  ],
  chunkyhair: [
    {
      value: "Chunky Spiky Hair",
      trait_type: "Hair",
    }
  ],
  raysthin: [
    {
      value: "Rays Thin",
      trait_type: "Background",
    },
  ],
  partialmask: [
    {
      value: "Partial Mask",
      trait_type: "Tattoos",
    }
  ],
  animeeyes: [
    {
      value: "Anime Eyes",
      trait_type: "Eyes",
    }
  ],
  sketchy: [
    {
      value: "Sketchy Nose-Mouth",
      trait_type: "Nose & Mouth",
    }
  ],
  focusedeyes: [
    {
      value: "Focused Eyes",
      trait_type: "Eyes",
    }
  ],
  aloofeyes: [
    {
      value: "Aloof Eyes",
      trait_type: "Eyes",
    }
  ],
  commsb: [
    {
      value: "Comms B",
      trait_type: "Hair accessories",
    }
  ],
  goggles: [
    {
      value: "Goggles",
      trait_type: "Hair accessories",
    }
  ],
  starhair: [
    {
      value: "Star", 
      trait_type: "Hair",
    }
  ],
  cyborgeyes: [
    {
      value: "Cyborg Eyes",
      trait_type: "Eyes",
    }
  ],
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
  getColorMetaJunkies: function(metaFilter) {
    let metaJunkies = [];
    let isValid = false;
    junkies.forEach(junk => {
      console.log(metaFilter);
      if (metaFilter === 'fullmatch') {
        isValid = junk.hair === junk.clothes && junk.clothes === junk.eyes && junk.eyes === junk.backdrop;
      } else if (metaFilter ===  'triplematch') {
        isValid = (junk.eyes === junk.backdrop &&  junk.eyes === junk.clothes && junk.eyes !== junk.hair)
        || (junk.hair === junk.eyes &&  junk.hair === junk.clothes && junk.hair !== junk.backdrop)
        || (junk.hair === junk.eyes &&  junk.hair === junk.backdrop && junk.hair !== junk.clothes)
        || (junk.clothes === junk.backdrop &&  junk.clothes === junk.eyes && junk.clothes !== junk.hair)
        || (junk.clothes === junk.backdrop &&  junk.clothes === junk.hair && junk.clothes !== junk.eyes);
      } else if (metaFilter ===  'eyebgmatch') {
        isValid = junk.eyes === junk.backdrop;
      } else if (metaFilter ===  'eyehairmatch') {
        isValid = junk.eyes === junk.hair;
      } else if (metaFilter ===  'hairbgmatch') {
        isValid = junk.hair === junk.backdrop;
      } else if (metaFilter ===  'hairclothesmatch') {
        isValid = junk.hair === junk.clothes;
      } else if (metaFilter ===  'clothesbgmatch') {
        isValid = junk.clothes === junk.backdrop;
      } else if (metaFilter ===  'clotheseyematch') {
        isValid = junk.clothes === junk.eyes;
      }

      if (isValid) { metaJunkies.push(junk); }
      isValid = false;
    });

    // Sort by Color
      if (metaFilter ===  'triplematch') {
         metaJunkies.sort(function(a, b){ return ('' + a.backdrop).localeCompare(b.backdrop) });
      } else if (metaFilter ===  'eyebgmatch') {
         metaJunkies.sort(function(a, b){ return ('' + a.backdrop).localeCompare(b.backdrop) });
      } else if (metaFilter ===  'eyehairmatch') {
         metaJunkies.sort(function(a, b){ return ('' + a.hair).localeCompare(b.hair) });
      } else if (metaFilter ===  'hairbgmatch') {
         metaJunkies.sort(function(a, b){ return ('' + a.backdrop).localeCompare(b.backdrop) });
      } else if (metaFilter ===  'hairclothesmatch') {
         metaJunkies.sort(function(a, b){ return ('' + a.hair).localeCompare(b.hair) });
      } else if (metaFilter ===  'clothesbgmatch') {
         metaJunkies.sort(function(a, b){ return ('' + a.backdrop).localeCompare(b.backdrop) });
      } else if (metaFilter ===  'clotheseyematch') {
         metaJunkies.sort(function(a, b){ return ('' + a.clothes).localeCompare(b.clothes) });
      }

   
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
  loadColorMeta: function(metaName) {
    main.clearList();
    var innerHtml = '';

    let metaJunkies = this.getColorMetaJunkies(metaName);

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
