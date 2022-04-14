var http = {
  loadJSON: function(path, callback) {   

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', path, true);
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
  }
};

var data = {
  loadMetadata: function() {
    if (metadata !== null) {
      app.start();
      return;
    }

    http.loadJSON('https://raw.githubusercontent.com/shonenjunk-meta/data/main/community-metadata.json', function(response) {
      metadata = JSON.parse(response);
      app.start();
    });
  },
  initializeData: function() {
    let counter = 0;
    let midShaggyHashes = [
      'd5887d73aef36b78cec25617a5c5f9b8a23c492b4015d524b7fff1b1838c897a', // oange
      '38e303d81668d8c57cc8f9e9ca2175f7a616f227d0467b6c3d11befd7d458bab', // silver
      'b5072413ba96d1be73db67357b06f82620962d2f956b7ae09fbbfbbd472b67c8', // pink
      'ffa3f213ab28ce6c12fefb4116adc464643ce746b3fb8536040f5c1b11e0ec74', // green
      '6dcde5f52dac6b577d7bfd8b59f0175c431d35a1e98e32b2f3d4445afa12c708', // red
      'b16887830f25b7e4d982ea840cfe72e430b407025d9534baae6f7aefb1a51a5e', // black
      '0818f1b0284b1c5906d63abb1c0b64475b794761e01bbadb42d28167a5383096', // brown
      'd59f283e0747dfd48ccfc9a29d6ee221f1ac1f8c2c6df3569df64775f106c4a3', // yellow
      '4ad5e3d787690292f3c6eb38211808758df72c3cd7555eabcf4a66af7b891474'  // blue
    ];

    avatars.forEach((av) => {
      junkies[counter].colors = {
        hair: traitColors.find((c) => c.hash === av.hair && c.trait_type_name === 'hair')?.color,
        eyes: traitColors.find((c) => c.hash === av.eyes && c.trait_type_name === 'eyes')?.color,
        clothes: traitColors.find((c) => c.hash === av.clothes && c.trait_type_name === 'clothes')?.color,
        backdrop: traitColors.find((c) => c.hash === av.backdrop && c.trait_type_name === 'backdrop')?.color,
        backprop: traitColors.find((c) => c.hash === av.backprop && c.trait_type_name === 'backprop')?.color,
        prop: traitColors.find((c) => c.hash === av.prop && c.trait_type_name === 'prop')?.color,
        hairprop: traitColors.find((c) => c.hash === av.hairprop && c.trait_type_name === 'hairprop')?.color
      };

      // Mid Shaggy Fix
      if (midShaggyHashes.includes(avatars[counter].hair)) {
        junkies[counter].metadata.attributes.find((att) => att.trait_type === 'Hair').value = 'Mid Shaggy';
      }

      counter++;
    });
  },
  getMetaById: function(metaId) {
    return metadata.find((meta) => meta.id === metaId);
  }
};

var ui = {
  navBar: function() {
    return document.getElementById("mainNavBar");
  },
  navBarContent: function() {
    return document.getElementById("navBarContent");
  },
  burgerMenu: function() {
    return document.getElementById("burgerMenu");
  },
  collectionTitleWrapper: function() {
    return document.getElementById("collectionInfo");
  },
  collectionTitle: function() {
    return document.getElementById("collectionTitle");
  },
  collectionSubtitle: function() {
    return document.getElementById("collectionSubtitle");
  },
  collectionContainer: function() {
    return document.getElementById("collectionContainer");
  },
  collection: function() {
    return document.getElementById("collection");
  },
  searchResultWrapper: function() {
    return document.getElementById("searchResultWrapper");
  },
  tokenId: function() {
    return document.getElementById("tokenId");
  }
};

var template = {
  menuIsOpen: false,
  clearCollection: function() {
    ui.collectionContainer().innerHTML = '';
  },
  hideCollectionTitle: function() {
    ui.collectionTitleWrapper().style.display = 'none';
  },
  showCollectionTitle: function() {
    ui.collectionTitleWrapper().style.display = 'block';
  },
  updateCollectionTitle: function(title, subtitle) {
    ui.collectionTitle().innerHTML = title;
    ui.collectionSubtitle().innerHTML = subtitle;
  },
  updateCollection: function(html) {
    ui.collectionContainer().innerHTML = html;
  },
  hideCollection: function() {
    ui.collection().style.display = 'none';
  },
  showCollection: function() {
    ui.collection().style.display = 'block';
  },
  openMenu: function() {
    ui.burgerMenu().classList.add('is-active');
    ui.navBar().classList.add('is-active');
    template.menuIsOpen = true;
  },
  closeMenu: function() {
    ui.burgerMenu().classList.remove('is-active');
    ui.navBar().classList.remove('is-active');
    template.menuIsOpen = false;
  },
  toggleMenu: function() {
    if (template.menuIsOpen) {
      template.closeMenu();
    } else {
      template.openMenu();
    }
  },
  clearSearchResults: function() {
    ui.searchResultWrapper().innerHTML = '';
  },
  addCardToSearchResult: function(card) {
    template.hideCollection();
    template.hideCollectionTitle();
    template.clearCollection();
    ui.searchResultWrapper().innerHTML = card;
  },
  createCard: function(junk) {
    let img = junk.metadata.image;
    let coreMeta = app.getCoreMetaByTokenId(junk.tokenId);
    let communityMeta = app.getCommunityMetaByTokenId(junk.tokenId);
    let coreMetaTags = '';
    let communityMetaTags = '';
    coreMeta.forEach((meta) => {
      coreMetaTags += `<span class="tag is-info" style="margin: 5px;" title="${meta.story}">${meta.name}</span>`;
    });
    communityMeta.forEach((meta) => {
      communityMetaTags += `<span class="tag is-warning" style="margin: 5px;" title="${meta.story}">${meta.name}</span>`;
    });
    return `
      <div class="card" style="max-width: 300px; margin-bottom: 20px;">
        <div class="card-image">
          <figure class="image is-48by48">
            <img src="${img}" style="height: 300px;">
          </figure>
        </div>

        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4"><span class="heading">Token ID: ${junk.tokenId}</span></p>
              <p class="subtitle is-6"><span class="heading">Rank: ${junk.rarity.rank}</span></p>
            </div>
          </div>
      
          <div class="content">
            <span class="heading">meta traits</span>
            ${coreMetaTags}
            ${communityMetaTags}
          </div>
        </div>
      </div>`;
  }
}

var app = {
  start: function() {
    app.loadNavBar();
    app.loadMetaHub();
  },
  reset: function() {
    template.clearSearchResults();
    template.clearCollection();
    template.closeMenu();
    template.hideCollectionTitle();
    app.loadMetaHub();
    template.showCollection();
  },
  loadNavBar: function() {
    let category = '';
    let template = '';

    metadata.forEach(meta => {
      let newCategory = meta.category !== category;
      if (newCategory) {
        // Create Category
        let endOfCategory = category !== '';
        if (endOfCategory) { template += `</div></div>`; }

        template += `
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link heading is-arrowless">
              ${meta.category}
            </a>
            <div class="navbar-dropdown">`;

        // Set current category
        category = meta.category;
      }

      // Add Items
      template += `
      <a class="navbar-item heading" onclick="app.getMetaCollection('${meta.id}');">
        ${meta.name}
      </a> `;
    });
    template += `</div></div>`;

    ui.navBarContent().innerHTML = template + ui.navBarContent().innerHTML;
  },
  loadMetaHub: function() {
    let category = '';
    let template = '';
    let counter = 0;

    metadata.forEach(meta => {
      let newCategory = meta.category !== category;

      if (newCategory) {
        counter = 0;
        // Create Category
        let endOfCategory = category !== '';
        let coreMeta = meta?.meta_type === 0 ? 'is-dark' : ''; 
        if (endOfCategory) { template += `</nav></section>`; }

        template += `
        <section class="hero is-small ${coreMeta}" style="padding: 20px;">
        <h1 class="heading title"> ${meta.category}</h1>
        <nav class="level" >`;

        // Set current category
        category = meta.category;
      }
      
      if (counter === 6) {
        template += `</nav> <nav class="level" >`;
        counter = 0;
      }

      let posterImage = isNaN(meta.poster) ?  meta.poster : junkies[meta.poster].metadata.image;

      // Add Items
      template += `
        <div class="level-item has-text-centered">
          <div onclick="app.getMetaCollection('${meta.id}');">
            <p>
              <img src="${posterImage}" style="max-width: 140px; padding-bottom: 10px;">
            </p>
            <p class="heading">${meta.name}</p>
          </div>
        </div> `;

      counter++;
    });

    ui.collection().innerHTML = template;
  },
  getCoreMetaByTokenId: function(tokenId) {
    let myMeta = [];
    
    let coreMeta = metadata.filter((meta) => meta?.meta_type === 0);

    coreMeta.forEach((meta) => {
      if (this.isIncludedInMeta(junkies[tokenId], meta)) {
        myMeta.push(meta);
      }
    });

    return myMeta;
  },
  getCommunityMetaByTokenId: function(tokenId) {
    let myMeta = [];
    
    let communityMeta = metadata.filter((meta) => meta?.meta_type !== 0);

    communityMeta.forEach((meta) => {
      if (this.isIncludedInMeta(junkies[tokenId], meta)) {
        myMeta.push(meta);
      }
    });

    return myMeta;
  },
  getColorFilteredJunkies: function() {
    let hairColor = document.getElementById("hairColor").value;
    let eyeColor = document.getElementById("eyeColor").value;
    let clothingColor = document.getElementById("clothingColor").value;
    let backdropColor = document.getElementById("backdropColor").value;
    // let backpropColor = document.getElementById("backpropColor").value;

    let metaJunkies = [];
    let isValid = true;
    junkies.forEach(junk => {
      if (hairColor !== 'Any') {
        isValid = junk.colors.hair === hairColor;
      }
      
      if (isValid && eyeColor !== 'Any') {
        isValid = junk.colors.eyes === eyeColor;
      }
      if (isValid && clothingColor !== 'Any') {
        isValid = junk.colors.clothes === clothingColor;
      }
      if (isValid && backdropColor !== 'Any') {
        isValid = junk.colors.backdrop === backdropColor;
      }
      // if (isValid && backpropColor !== 'Any') {
      //   isValid = junk.colors.backprop === backpropColor;
      // }

      if (isValid) { metaJunkies.push(junk); }
      isValid = true;
    });

    return metaJunkies;
  },
  getMetaCollection: function(metaId) {
    let meta = data.getMetaById(metaId);

    template.clearSearchResults();
    template.clearCollection();

    var innerHtml = '';
    let metaJunkies = [];
    let metaName = '';
    if (metaId === 'customcolorfilter') {
      metaJunkies = this.getColorFilteredJunkies();
      metaName = 'Custom Color Filter';
    } else {
      metaName = meta.name;
      metaJunkies = this.getJunkiesBasedOnMeta(meta);
    }
    
    metaJunkies.forEach(junk => {
      let img = junk.metadata.image;

      innerHtml = innerHtml + 
      `<a href="https://opensea.io/assets/0xf4121a2880c225f90dc3b3466226908c9cb2b085/${junk.tokenId}" target="_blank" style="height: 310px;">
        <img src="${img}" style="max-width: 260px;">
        <div style="height: 40px; text-align: left;">
          <span class="heading" style="color: #363636;">SJ#${junk.tokenId}<span>
          <span class="heading" style="color: #363636;font-weight: bold;">RANK ${junk.rarity.rank}<span>
        </div>
      </a>`;
    });

    // Update header
    let percentInCollection = Math.round((((metaJunkies.length / 9001) * 100) + Number.EPSILON) * 1000) / 1000;
    template.updateCollectionTitle(metaName, `Total: ${metaJunkies.length} (${percentInCollection}%)`);
    template.updateCollection(innerHtml);
    template.closeMenu();
    template.showCollectionTitle();
    template.hideCollection();
  },
  getJunkiesBasedOnMeta: function(meta) {
    let metaJunkies = [];

    junkies.forEach(junk => {
      if (this.isIncludedInMeta(junk, meta)) { metaJunkies.push(junk); }
    });

    if (meta.sort?.includes('-color')) {
      // Sort by Color
      meta.sort = meta.sort.replace('-color','')
      metaJunkies.sort(function(a, b){ return ('' + a.colors[meta.sort]).localeCompare(b.colors[meta.sort]) });
    } else {
      // Sort by Rarity
      metaJunkies.sort(function(a, b){return a.rarity.rank - b.rarity.rank});
    }

    return metaJunkies;
  },
  isIncludedInMeta: function(junk, meta) {
    let whitelisted = meta.whitelist?.includes(junk.tokenId);
    let blacklisted = meta.blacklist?.includes(junk.tokenId);
    let special = whitelisted || blacklisted;
    isValid = !special && (meta.traits || meta.colors || meta.trait_count);

    // Verify Trait Matches
    if (isValid && meta.traits) {
      isValid = this.isValidTrait(junk, meta.traits);
    }

    // Verify Color Matches
    if (isValid && meta.colors) {
      isValid = this.isValidColorMatches(junk, meta.colors);
    }

    // Verify Trait Count
    if (isValid && meta.trait_count) {
      isValid = meta.trait_count === junk.metadata.attributes.length;
    }

    // Verify Color Count
    if (isValid && (meta.colors?.max_match || meta.colors?.match_count)) {
      isValid = this.isValidColorMatchCount(junk,meta.colors.max_match, meta.colors.match_count);
    }
    
    return !blacklisted && (whitelisted || isValid);
  },
  isValidTrait: function(junk, metaTraits) {
    let isValid = true;
    for (let i = 0; i < metaTraits.length; i++) {
      traitFilter = metaTraits[i];
      let junkTraits = junk.metadata.attributes;

      if (traitFilter.value === 'none' && junkTraits.find((att) => att.trait_type === traitFilter.trait_type)?.value === undefined) {
        isValid = true;
      } else {
        isValid = traitFilter.value.includes(junkTraits.find((att) => att.trait_type === traitFilter.trait_type)?.value);
      }
      
      if (!isValid) { break; }
    }

    return isValid;
  },
  isValidColorMatches: function(junk, metaColors) {
    let validHair = metaColors.hair === undefined;
    if (!validHair && metaColors.hair.includes('match-')) {
      let matchHairWith = metaColors.hair.replace('match-', '');
      validHair = junk.colors.hair === junk.colors[matchHairWith] && junk.colors.hair !== 'base';
    } else if(!validHair) {
      validHair = metaColors.hair.includes(junk.colors.hair);
    }

    let validEyes = metaColors.eyes === undefined;
    if (!validEyes && metaColors.eyes.includes('match-')) {
      let matchEyesWith = metaColors.eyes.replace('match-', '');
      validEyes = junk.colors.eyes === junk.colors[matchEyesWith] && junk.colors.hair !== 'base';
    } else if(!validEyes) {
      validEyes = metaColors.eyes.includes(junk.colors.eyes);
    }

    let validClothes = metaColors.clothes === undefined;
    if (!validClothes && metaColors.clothes.includes('match-')) {
      let matchClothessWith = metaColors.clothes.replace('match-', '');
      validClothes = junk.colors.clothes === junk.colors[matchClothessWith] && junk.colors.hair !== 'base';
    } else if(!validClothes) {
      validClothes = metaColors.clothes.includes(junk.colors.clothes);
    }

    let validBackdrop = metaColors.backdrop === undefined;
    if (!validBackdrop && metaColors.backdrop.includes('match-')) {
      let matchBackdropWith = metaColors.backdrop.replace('match-', '');
      validBackdrop = junk.colors.backdrop === junk.colors[matchBackdropWith] && junk.colors.hair !== 'base';
    } else if(!validBackdrop) {
      validBackdrop = metaColors.backdrop.includes(junk.colors.backdrop);
    }

    let validBackprop = metaColors.backprop === undefined || junk.colors.backprop === 'base';
    if (!validBackprop && metaColors.backprop.includes('match-')) {
      let matchBackpropWith = metaColors.backprop.replace('match-', '');
      validBackprop = junk.colors.backprop === junk.colors[matchBackpropWith];
    } else if(!validBackprop) {
      validBackprop = metaColors.backprop.includes(junk.colors.backprop);
    }

    let validHairProp = metaColors.hairprop === undefined || junk.colors.hairprop === 'base';
    if (!validHairProp && metaColors.hairprop.includes('match-')) {
      let matchHairPropWith = metaColors.hairprop.replace('match-', '');
      validHairProp = junk.colors.hairprop === junk.colors[matchHairPropWith];
    } else if(!validHairProp) {
      validHairProp = metaColors.hairprop.includes(junk.colors.hairprop);
    }

    let validProp = metaColors.prop === undefined  || junk.colors.prop === 'base';
    if (!validProp && metaColors.prop.includes('match-')) {
      let matchPropWith = metaColors.prop.replace('match-', '');
      validProp = junk.colors.prop === junk.colors[matchPropWith];
    } else if(!validProp) {
      validProp = metaColors.prop.includes(junk.colors.prop);
    }

    return validHair && validEyes && validClothes && validBackdrop && validBackprop && validHairProp && validProp;
  },
  isValidColorMatchCount: function(junk, maxMatch, maxCount) {
    const arr = [junk.colors.hair, junk.colors.eyes, junk.colors.clothes, junk.colors.backdrop];
    const colorSummary = {};
    let maxColorMatch = 0;
    let matchCount = 0;
    arr.forEach((x) => {
      if (x !== 'base') {
        colorSummary[x] = (colorSummary[x] || 0) + 1;
      }
      // Watch max color match
      if (colorSummary[x] > maxColorMatch) { 
        maxColorMatch = colorSummary[x];
      }
    });
    // Count doubles
    Object.values(colorSummary).forEach((value) => {
      if (value === maxMatch) {
        matchCount = matchCount + 1;
      }
    });
    
    return maxColorMatch === maxMatch && (!maxCount || maxCount === matchCount);
  },
  findJunk: function() {
    let tokenId = ui.tokenId().value;
    if (tokenId >= 0 && tokenId <= 9000) {
      template.addCardToSearchResult(template.createCard(junkies[tokenId]));
    }
  }
}

document.onreadystatechange = function () {
  if (document.readyState === "interactive") {
    data.initializeData();
    data.loadMetadata();
  }
}
