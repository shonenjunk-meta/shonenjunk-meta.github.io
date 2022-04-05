# Shonen Junk
#### Community - Meta Hub

https://shonenjunk-meta.github.io

This project is intended to be a simple way for community to group together Shonen Junk NFTs that are unanimously accepted as desiable may it be interms of data or visual representation of that NFT.

## Rules/Guidelines for Adding New Meta
>This is open for changes as long as there is a consensus
- No single person shall have absolute power to add or remove meta
- New meta must always reflect a coherent look (Must be very easy to determine what it represents just by looking at them as a group)
- Adding to whitelist or blacklist should go through consensus (consult with owner if necessary)


## Categories
>This is open for changes as long as there is a consensus

- Armed - Any 2 or more trait combinations with a weapon/wings
- Unarmed - Any 2 or more trait combinations with no weapons/wings
- Trait Count - Grouping for Junkies based on number of traits they posses
- Color Match - Color combinations that are highly sought after
- Unique - 2 or more trait combinations that creates a very coherent look and only exists in less than 1% (90/9001) of the collection.
- Legendary - official single trait that only exists in less than 1% (90/9001) of the collection.

# Adding/Removing Content
1. Get collaborator access for https://github.com/shonenjunk-meta/data/blob/main/community-metadata.json
2. Add a new meta by using this template
```[
  {
    "category": "Armed",            // category of this meta
    "id": "waifuwithaknifu",        // lowercase letters + globally unique
    "name": "Waifu w/ a Knifu",     // this will be the visible name
    "poster": 1234,                 // token id of the poster
    "story": "",                    // story/description of meta
    "traits": [                     // filter for traits
      {
        "value": ["Sci-Fi Jacket"], 
        "trait_type": "Clothes"
      },
      {
        "value": ["Space Sword", "Tassel Sword"],  // we can have multiple
        "trait_type": "Swords & Wings"
      },
     {
        "value": "none",        // if you want a trait to be empty use "none"
        "trait_type": "Hair accessories"
      },
    ],
    "colors": {             // color filters, for matching use e.g. "match-hair": "match-eyes" will match hair with eyes
      "hair": [],                           // empty means it will match any color
      "eyes": [match-clothes],              // any eye color that match clothes
      "clothes": [],                      
      "backdrop": ["black", "yellow"],       // multiple value is allowed
      "backprop": ["red"]                   // will match only red
    },
    "trait_count": 6,       // trait count filter can have value of 6-10
    "whitelist": [],        // skips all the rules and includes the token ids in this list
    "blacklist": []        // skips all the rules and excludes the token ids in this list
  }
]
```
3. Ensure the JSON file is valid using https://jsonlint.com/
4. Save the file.


> Author | ZombieBoy
