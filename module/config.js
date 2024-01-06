/** @name CONFIG.Monolith */
export const Monolith = {};

Monolith.characterGenerator = {
  ability: "3d6",
  hitProtection: "1d6",
  gold: "3d6",
  name: {
    text: "{name} {surname}",
    items: {
      name: "monolith.character-creation-tables-srd;Names",
      surname: "monolith.character-traits;Surnames"
    }
  },
  background: "monolith.character-traits;Background",
  startingItems: [
    "monolith.expeditionary-gear;Rations;1",
    "monolith.expeditionary-gear;Torch;1"
  ],
  startingGear: [
    "monolith.character-creation-tables-srd;Starting Gear - Armor",
    "monolith.character-creation-tables-srd;Starting Gear - Helmet & Shields",
    "monolith.character-creation-tables-srd;Starting Gear - Weapons",
    "monolith.character-creation-tables-srd;Starting Gear - Expeditionary Gear",
    "monolith.character-creation-tables-srd;Starting Gear - Tools",
    "monolith.character-creation-tables-srd;Starting Gear - Trinkets",
    "monolith.character-creation-tables-srd;Starting Gear - Bonus Item"
  ],
  biography: {
    text: "I have a <strong>{physique}</strong> physique, <strong>{skin}</strong> skin, <strong>{hair}</strong> hair, and a <strong>{face}</strong> face. I speak in a <strong>{speech}</strong> manner and wear <strong>{clothing}</strong> clothing. I am <strong>{vice}</strong> yet <strong>{virtue}</strong>, and I am generally regarded as <strong>{reputation}</strong>. I have had the misfortune of being <strong>{misfortune}</strong>. I am <strong>{age}</strong> years old.",
    age: "2d20 + 10",
    items: {
      physique: "monolith.character-traits;Physique",
      skin: "monolith.character-traits;Skin",
      hair: "monolith.character-traits;Hair",
      face: "monolith.character-traits;Face",
      speech: "monolith.character-traits;Speech",
      clothing: "monolith.character-traits;Clothing",
      vice: "monolith.character-traits;Vice",
      virtue: "monolith.character-traits;Virtue",
      misfortune: "monolith.character-traits;Misfortunes",
      reputation: "monolith.character-traits;Reputation"
    }
  }
};

CONFIG.Monolith = Monolith;

