var info = (function (exports) {
  var allPetList = {
    "abyssal_orphan": {
      "name": "Abyssal orphan",
      "inventory_image_url": "https://oldschool.runescape.wiki/images/Abyssal_orphan.png?5bab3",
      "following_image_url": "./resources/images/Abyssal_orphan.png",
      "silhouette_url": "./resources/images/silhouettes/1.png",
      "region": "Abyssal Space",
      "type": "PvM", 
      "alt_names": []
    },
    "baby_mole": {
      "name": "Baby mole",
      "inventory_image_url": "https://oldschool.runescape.wiki/images/Baby_mole.png?81388", 
      "following_image_url": "./resources/images/Baby_Mole.png",
      "silhouette_url": "./resources/images/silhouettes/4.png",
      "region": "Asgarnia",
      "type": "PvM", 
      "alt_names": [] 
    },
    "callisto_cub": {
      "name": "Callisto cub",
      "inventory_image_url": "https://oldschool.runescape.wiki/images/Callisto_cub.png?d6057",
      "following_image_url": "./resources/images/Callisto_cub.png",
      "silhouette_url": "./resources/images/silhouettes/7.png",
      "region": "Wilderness",
      "type": "PvM", 
      "alt_names": []
    },
    "hellpuppy": {
      "name": "Hellpuppy",
      "inventory_image_url": "https://oldschool.runescape.wiki/images/Hellpuppy.png?80b36",
      "following_image_url": "./resources/images/Hellpuppy.png",
      "silhouette_url": "./resources/images/silhouettes/17.png",
      "region": "Asgarnia",
      "type": "PvM", 
      "alt_names": []
    },
    "ikkle_hydra": {
      "name": "Ikkle hydra",
      "inventory_image_url": "https://oldschool.runescape.wiki/images/Ikkle_hydra_%28serpentine%29.png?80b36",
      "following_image_url": "./resources/images/Ikkle_Hydra.png",
      "silhouette_url": "./resources/images/silhouettes/20.png",
      "region": "Great Kourend",
      "type": "PvM", 
      "alt_names": []
    },
    "jal_nib_rek": {
      "name": "Jal-nib-rek",
      "inventory_image_url": "https://oldschool.runescape.wiki/images/Jal-nib-rek.png?b3ec1",
      "following_image_url": "./resources/images/Jal-Nib-Rek.png",
      "silhouette_url": "./resources/images/silhouettes/21.png",
      "region": "Karamja",
      "type": "PvM", 
      "alt_names": []
    },
    "kalphite_princess": {
      "name": "Kalphite princess",
      "inventory_image_url": "https://oldschool.runescape.wiki/images/Kalphite_princess.png?d8722",
      "following_image_url": "./resources/images/Kalphite_Princess.png",
      "silhouette_url": "./resources/images/silhouettes/22.png",
      "region": "Kharidian Desert",
      "type": "PvM", 
      "alt_names": ["Kalphite Queen"]
    },
    "muphin": {
      "name": "Muphin",
      "inventory_image_url": "https://oldschool.runescape.wiki/images/Muphin_%28ranged%29.png?11c7e",
      "following_image_url": "./resources/images/Muphin.png",
      "silhouette_url": "./resources/images/silhouettes/29.png",
      "region": "Troll Country",
      "type": "PvM", 
      "alt_names": ["Lil' Grumble", "The Grumbler"]
    },
    "lil_zik": {
      "name": "Lil' zik",
      "inventory_image_url": "https://oldschool.runescape.wiki/images/Lil%27_zik.png?c62f1",
      "following_image_url": "./resources/images/Lil'_Zik.png",
      "silhouette_url": "./resources/images/silhouettes/27.png",
      "region": "Morytania",
      "type": "PvM", 
      "alt_names": []
    },
    "little_nightmare": {
      "name": "Little nightmare",
      "inventory_image_url": "https://oldschool.runescape.wiki/images/Little_nightmare.png?f3f6a",
      "following_image_url": "./resources/images/Little_nightmare.png",
      "silhouette_url": "./resources/images/silhouettes/28.png",
      "region": "Morytania",
      "type": "PvM", 
      "alt_names": []
    },
    "nexling": {
      "name": "Nexling",
      "inventory_image_url": "https://oldschool.runescape.wiki/images/Nexling.png?23e0d",
      "following_image_url": "./resources/images/Nexling.png",
      "silhouette_url": "./resources/images/silhouettes/30.png",
      "region": "Troll Country",
      "type": "PvM", 
      "alt_names": []
    },
    "noon": {
      "name": "Noon",
      "inventory_image_url": "https://oldschool.runescape.wiki/images/Noon.png?4068d",
      "following_image_url": "./resources/images/Noon.png",
      "silhouette_url": "./resources/images/silhouettes/31.png",
      "region": "Morytania",
      "type": "PvM", 
      "alt_names": ["Midnight"]
    },
    "olmlet": {
      "name": "Olmlet",
      "inventory_image_url": "https://oldschool.runescape.wiki/images/Olmlet.png?d8722",
      "following_image_url": "./resources/images/Olmlet.png",
      "silhouette_url": "./resources/images/silhouettes/32.png",
      "region": "Great Kourend",
      "type": "PvM", 
      "alt_names": []
    },
    "pet_chaos_elemental": {
      "name": "Pet chaos elemental",
      "inventory_image_url": "https://oldschool.runescape.wiki/images/Pet_chaos_elemental.png?e2d9b",
      "following_image_url": "./resources/images/Chaos_Elemental_Jr.png",
      "silhouette_url": "./resources/images/silhouettes/8.png",
      "region": "Wilderness",
      "type": "PvM", 
      "alt_names": []
    },
    "pet_dagannoth_prime": {
      "name": "Pet dagannoth prime",
      "inventory_image_url": "https://oldschool.runescape.wiki/images/Pet_dagannoth_prime.png?e2d9b",
      "following_image_url": "./resources/images/Dagannoth_Prime_Jr.png",
      "silhouette_url": "./resources/images/silhouettes/10.png",
      "region": "Fremennik Province",
      "type": "PvM", 
      "alt_names": []
    },
    "pet_dagannoth_rex": {
      "name": "Pet dagannoth rex",
      "inventory_image_url": "https://oldschool.runescape.wiki/images/Pet_dagannoth_rex.png?e2d9b",
      "following_image_url": "./resources/images/Dagannoth_Rex_Jr.png",
      "silhouette_url": "./resources/images/silhouettes/11.png",
      "region": "Fremennik Province",
      "type": "PvM", 
      "alt_names": []
    },
    "pet_dagannoth_supreme": {
      "name": "Pet dagannoth supreme",
      "inventory_image_url": "https://oldschool.runescape.wiki/images/Pet_dagannoth_supreme.png?e2d9b",
      "following_image_url": "./resources/images/Dagannoth_Supreme_Jr.png",
      "silhouette_url": "./resources/images/silhouettes/12.png",
      "region": "Fremennik Province",
      "type": "PvM", 
      "alt_names": []
    },
    "pet_dark_core": {
      "name": "Pet dark core",
      "inventory_image_url": "https://oldschool.runescape.wiki/images/Pet_dark_core.png?85699",
      "following_image_url": "./resources/images/Dark_core.png",
      "silhouette_url": "./resources/images/silhouettes/13.png",
      "region": "Wilderness",
      "type": "PvM", 
      "alt_names": []
    },
    "pet_general_graardor": {
      "name": "Pet general graardor",
      "inventory_image_url": "https://oldschool.runescape.wiki/images/Pet_general_graardor.png?85699",
      "following_image_url": "./resources/images/General_Graardor_Jr.png",
      "silhouette_url": "./resources/images/silhouettes/14.png",
      "region": "Troll Country",
      "type": "PvM", 
      "alt_names": []
    },
    "pet_kril_tsutsaroth": {
      "name": "Pet k'ril tsutsaroth",
      "inventory_image_url": "https://oldschool.runescape.wiki/images/Pet_k%27ril_tsutsaroth.png?fe846",
      "following_image_url": "./resources/images/K'ril_Tsutsaroth_Jr.png",
      "silhouette_url": "./resources/images/silhouettes/25.png",
      "region": "Troll Country",
      "type": "PvM", 
      "alt_names": ["Pet kril tsutsaroth"]
    },
    "pet_kraken": {
      "name": "Pet kraken",
      "inventory_image_url": "https://oldschool.runescape.wiki/images/Pet_kraken.png?85699",
      "following_image_url": "./resources/images/Kraken.png",
      "silhouette_url": "./resources/images/silhouettes/23.png",
      "region": "Kandarin",
      "type": "PvM", 
      "alt_names": []
    },
    "pet_kreearra": {
      "name": "Pet kree'arra",
      "inventory_image_url": "https://oldschool.runescape.wiki/images/Pet_kree%27arra.png?f3f6a",
      "following_image_url": "./resources/images/Kree'arra_Jr.png",
      "silhouette_url": "./resources/images/silhouettes/24.png",
      "region": "Troll Country",
      "type": "PvM", 
      "alt_names": ["Pet kreearra"]
    },
    "pet_smoke_devil": {
      "name": "Pet smoke devil",
      "inventory_image_url": "https://oldschool.runescape.wiki/images/Pet_smoke_devil.png?fe846",
      "following_image_url": "./resources/images/Smoke_Devil.png",
      "silhouette_url": "./resources/images/silhouettes/41.png",
      "region": "Kandarin",
      "type": "PvM", 
      "alt_names": ["Thermy", "Thermonuclear smoke devil"]
    },
    "pet_snakeling": {
      "name": "Pet snakeling",
      "inventory_image_url": "https://oldschool.runescape.wiki/images/Pet_snakeling.png?c0946",
      "following_image_url": "./resources/images/Snakeling.png",
      "silhouette_url": "./resources/images/silhouettes/43.png",
      "region": "Tirannwn",
      "type": "PvM", 
      "alt_names": ["Zulrah"]
    },
    "pet_zilyana": {
      "name": "Pet zilyana",
      "inventory_image_url": "https://oldschool.runescape.wiki/images/Pet_zilyana.png?f3f6a",
      "following_image_url": "./resources/images/Zilyana_Jr.png",
      "silhouette_url": "./resources/images/silhouettes/53.png",
      "region": "Troll Country",
      "type": "PvM", 
      "alt_names": []
    },
    "phoenix": {
      "name": "Phoenix",
      "inventory_image_url": "https://oldschool.runescape.wiki/images/Phoenix.png?fe846",
      "following_image_url": "./resources/images/Phoenix.png",
      "silhouette_url": "./resources/images/silhouettes/34.png",
      "region": "Great Kourend",
      "type": "PvM", 
      "alt_names": []
    },
    "prince_black_dragon": {
      "name": "Prince black dragon",
      "inventory_image_url": "https://oldschool.runescape.wiki/images/Prince_black_dragon.png?c0946",
      "following_image_url": "./resources/images/Prince_Black_Dragon.png",
      "silhouette_url": "./resources/images/silhouettes/35.png",
      "region": "Wilderness",
      "type": "PvM", 
      "alt_names": ["King black dragon"]
    },
    "scorpias_offspring": {
      "name": "Scorpia's offspring",
      "inventory_image_url": "https://oldschool.runescape.wiki/images/Scorpia%27s_offspring.png?85699",
      "following_image_url": "./resources/images/Scorpia's_offspring.png",
      "silhouette_url": "./resources/images/silhouettes/39.png",
      "region": "Wilderness",
      "type": "PvM", 
      "alt_names": []
    },
    "skotos": {
      "name": "Skotos",
      "inventory_image_url": "https://oldschool.runescape.wiki/images/Skotos.png?52875",
      "following_image_url": "./resources/images/Skotos.png",
      "silhouette_url": "./resources/images/silhouettes/25.png",
      "region": "Great Kourend",
      "type": "PvM", 
      "alt_names": ["Skotizo"]
    },
    "smolcano": {
      "name": "Smolcano",
      "inventory_image_url": "https://oldschool.runescape.wiki/images/Smolcano.png?52875",
      "following_image_url": "./resources/images/Smolcano.png",
      "silhouette_url": "./resources/images/silhouettes/42.png",
      "region": "Tirannwn",
      "type": "PvM", 
      "alt_names": ["Zalcano"]
    },
    "sraracha": {
      "name": "Sraracha",
      "inventory_image_url": "https://oldschool.runescape.wiki/images/Sraracha.png?52875",
      "following_image_url": "./resources/images/Sraracha.png",
      "silhouette_url": "./resources/images/silhouettes/44.png",
      "region": "Great Kourend",
      "type": "PvM", 
      "alt_names": ["Sarachnis"]
    },
    "tiny_tempor": {
      "name": "Tiny tempor",
      "inventory_image_url": "https://oldschool.runescape.wiki/images/Tiny_tempor.png?77385",
      "following_image_url": "./resources/images/Tiny_Tempor.png",
      "silhouette_url": "./resources/images/silhouettes/46.png",
      "region": "Karamja",
      "type": "Minigame", 
      "alt_names": []
    },
    "tumekens_guardian": {
      "name": "Tumeken's guardian",
      "inventory_image_url": "https://oldschool.runescape.wiki/images/Tumeken%27s_guardian.png?5790e",
      "following_image_url": "./resources/images/Tumeken's_Guardian.png",
      "silhouette_url": "./resources/images/silhouettes/47.png",
      "region": "Kharidian Desert",
      "type": "PvM", 
      "alt_names": ["ToA"]
    },
    "tzrek_jad": {
      "name": "TzRek-Jad",
      "inventory_image_url": "https://oldschool.runescape.wiki/images/Tzrek-jad.png?420f4",
      "following_image_url": "./resources/images/TzRek-Jad.png",
      "silhouette_url": "./resources/images/silhouettes/48.png",
      "region": "Karamja",
      "type": "PvM", 
      "alt_names": []
    },
    "venenatis_spiderling": {
      "name": "Venenatis spiderling",
      "inventory_image_url": "https://oldschool.runescape.wiki/images/Venenatis_spiderling.png?26d89",
      "following_image_url": "./resources/images/Venenatis_spiderling.png",
      "silhouette_url": "./resources/images/silhouettes/49.png",
      "region": "Wilderness",
      "type": "PvM", 
      "alt_names": []
    },
    "vetion_jr.": {
      "name": "Vet'ion jr.",
      "inventory_image_url": "https://oldschool.runescape.wiki/images/Vet%27ion_jr..png?26d89",
      "following_image_url": "./resources/images/Vet'ion_Jr.png",
      "silhouette_url": "./resources/images/silhouettes/50.png",
      "region": "Wilderness",
      "type": "PvM", 
      "alt_names": ["Vetion jr."]
    },
    "vorki": {
      "name": "Vorki",
      "inventory_image_url": "https://oldschool.runescape.wiki/images/Vorki.png?03aa0",
      "following_image_url": "./resources/images/Vorki.png",
      "silhouette_url": "./resources/images/silhouettes/51.png",
      "region": "Fremennik Province",
      "type": "PvM", 
      "alt_names": ["Vorkath"]
    },
    "youngllef": {
      "name": "Youngllef",
      "inventory_image_url": "https://oldschool.runescape.wiki/images/Youngllef.png?1e205",
      "following_image_url": "./resources/images/Youngllef.png",
      "silhouette_url": "./resources/images/silhouettes/52.png",
      "region": "Tirannwn",
      "type": "PvM", 
      "alt_names": ["Hunllef", "Hunleff", "Youngleff"]
    },
    "baby_chinchompa": {
      "name": "Baby chinchompa",
      "inventory_image_url": "https://oldschool.runescape.wiki/images/Baby_chinchompa_%28red%29.png?b5841",
      "following_image_url": "./resources/images/Baby_Chinchompa.png",
      "silhouette_url": "./resources/images/silhouettes/3.png",
      "region": "N/A",
      "type": "Skilling", 
      "alt_names": []
    },
    "beaver": {
      "name": "Beaver",
      "inventory_image_url": "https://oldschool.runescape.wiki/images/Beaver.png?0d4ed",
      "following_image_url": "./resources/images/Beaver.png",
      "silhouette_url": "./resources/images/silhouettes/5.png",
      "region": "N/A",
      "type": "Skilling", 
      "alt_names": []
    },
    "giant_squirrel": {
      "name": "Giant squirrel",
      "inventory_image_url": "https://oldschool.runescape.wiki/images/Giant_squirrel.png?3b568",
      "following_image_url": "./resources/images/Giant_squirrel.png",
      "silhouette_url": "./resources/images/silhouettes/15.png",
      "region": "N/A",
      "type": "Skilling", 
      "alt_names": []
    },
    "heron": {
      "name": "Heron",
      "inventory_image_url": "https://oldschool.runescape.wiki/images/Heron.png?80b36",
      "following_image_url": "./resources/images/Heron.png",
      "silhouette_url": "./resources/images/silhouettes/19.png",
      "region": "N/A",
      "type": "Skilling", 
      "alt_names": []
    },
    "rift_guardian": {
      "name": "Rift guardian",
      "inventory_image_url": "https://oldschool.runescape.wiki/images/Rift_guardian_%28fire%29.png?c0946",
      "following_image_url": "./resources/images/Rift_guardian.png",
      "silhouette_url": "./resources/images/silhouettes/36.png",
      "region": "N/A",
      "type": "Skilling", 
      "alt_names": []
    },
    "rock_golem": {
      "name": "Rock golem",
      "inventory_image_url": "https://oldschool.runescape.wiki/images/Rock_golem.png?77385",
      "following_image_url": "./resources/images/Rock_golem.png",
      "silhouette_url": "./resources/images/silhouettes/37.png",
      "region": "N/A",
      "type": "Skilling", 
      "alt_names": []
    },
    "rocky": {
      "name": "Rocky",
      "inventory_image_url": "https://oldschool.runescape.wiki/images/Rocky.png?3f71e",
      "following_image_url": "./resources/images/Rocky.png",
      "silhouette_url": "./resources/images/silhouettes/38.png",
      "region": "N/A",
      "type": "Skilling", 
      "alt_names": []
    },
    "tangleroot": {
      "name": "Tangleroot",
      "inventory_image_url": "https://oldschool.runescape.wiki/images/Tangleroot.png?52875",
      "following_image_url": "./resources/images/Tangleroot.png",
      "silhouette_url": "./resources/images/silhouettes/45.png",
      "region": "N/A",
      "type": "Skilling", 
      "alt_names": []
    },
    "abyssal_protector": {
      "name": "Abyssal protector",
      "inventory_image_url": "https://oldschool.runescape.wiki/images/Abyssal_protector.png?1e68e",
      "following_image_url": "./resources/images/Abyssal_protector.png",
      "silhouette_url": "./resources/images/silhouettes/2.png",
      "region": "Eastern Sea",
      "type": "Minigame", 
      "alt_names": ["GotR"]
    },
    "bloodhound": {
      "name": "Bloodhound",
      "inventory_image_url": "https://oldschool.runescape.wiki/images/Bloodhound.png?0d4ed",
      "following_image_url": "./resources/images/Bloodhound.png",
      "silhouette_url": "./resources/images/silhouettes/6.png",
      "region": "N/A",
      "type": "Other", 
      "alt_names": []
    },
    "cat": {
      "name": "Cat",
      "inventory_image_url": "https://oldschool.runescape.wiki/images/Pet_cat_%28black%29.png?e2d9b",
      "following_image_url": "",
      "silhouette_url": "",
      "region": "N/A",
      "type": "Other", 
      "alt_names": []
    },
    "chompy_chick": {
      "name": "Chompy chick",
      "inventory_image_url": "https://oldschool.runescape.wiki/images/Chompy_chick.png?36657",
      "following_image_url": "./resources/images/Chompy_chick.png",
      "silhouette_url": "./resources/images/silhouettes/9.png",
      "region": "Kandarin",
      "type": "PvM", 
      "alt_names": []
    },
    "hellcat": {
      "name": "Hellcat",
      "inventory_image_url": "https://oldschool.runescape.wiki/images/Hell_cat.png?80b36",
      "following_image_url": "",
      "silhouette_url": "",
      "region": "N/A",
      "type": "Other", 
      "alt_names": []
    },
    "herbi": {
      "name": "Herbi",
      "inventory_image_url": "https://oldschool.runescape.wiki/images/Herbi.png?d8722",
      "following_image_url": "./resources/images/Herbi.png",
      "silhouette_url": "./resources/images/silhouettes/18.png",
      "region": "Fossil Island",
      "type": "Skilling", 
      "alt_names": []
    },
    "lil_creator": {
      "name": "Lil' creator",
      "inventory_image_url": "https://oldschool.runescape.wiki/images/Lil%27_creator.png?60046",
      "following_image_url": "./resources/images/Lil'_Creator.png",
      "silhouette_url": "./resources/images/silhouettes/26.png",
      "region": "Western Sea",
      "type": "Minigame", 
      "alt_names": ["Soul wars"]
    },
    "pet_fish": {
      "name": "Pet fish",
      "inventory_image_url": "https://oldschool.runescape.wiki/images/Fishbowl_%28blue%29.png?5abba",
      "following_image_url": "",
      "silhouette_url": "",
      "region": "N/A",
      "type": "Other", 
      "alt_names": []
    },
    "pet_penance_queen": {
      "name": "Pet penance queen",
      "inventory_image_url": "https://oldschool.runescape.wiki/images/Pet_penance_queen.png?c0946",
      "following_image_url": "./resources/images/Penance_Pet.png",
      "silhouette_url": "./resources/images/silhouettes/33.png",
      "region": "Kandarin",
      "type": "Minigame", 
      "alt_names": []
    },
    "pet_rock": {
      "name": "Pet rock",
      "inventory_image_url": "https://oldschool.runescape.wiki/images/Pet_rock.png?97482",
      "following_image_url": "",
      "silhouette_url": "",
      "region": "N/A",
      "type": "Other", 
      "alt_names": []
    },
    "toy_cat": {
      "name": "Toy cat",
      "inventory_image_url": "https://oldschool.runescape.wiki/images/Toy_cat.png?d1c2e",
      "following_image_url": "",
      "silhouette_url": "",
      "region": "N/A",
      "type": "Other", 
      "alt_names": []
    },
    "metamorphic_dust": {
      "name": "Metamorphic dust",
      "inventory_image_url": "https://oldschool.runescape.wiki/images/Metamorphic_dust.png?ccf02",
      "following_image_url": "./resources/images/Metamorphic_dust.png",
      "silhouette_url": "./resources/images/silhouettes/55.png",
      "region": "Great Kourend",
      "type": "PvM", 
      "alt_names": []
    },
    "sanguine_dust": {
      "name": "Sanguine dust",
      "inventory_image_url": "https://oldschool.runescape.wiki/images/Sanguine_dust.png?7313d",
      "following_image_url": "./resources/images/Sanguine_dust.png",
      "silhouette_url": "./resources/images/silhouettes/54.png",
      "region": "Morytania",
      "type": "PvM", 
      "alt_names": []
    }
  };

  var petDropList = [["abyssal_orphan", "2020-06-22T22:06:00Z", [5653], [2560]],
                     ["baby_mole", "2019-10-23T02:27:00Z", [4871], [3000]],
                     ["callisto_cub", "2019-03-11T14:47:00Z", [2368], [2000]],
                     ["hellpuppy", "2019-02-19T12:00:00Z", [4261], [3000]],
                     ["ikkle_hydra", "2019-01-13T22:26:00Z", [181], [3000]],
                     ["kalphite_princess", "2020-09-02T23:36:00Z", [12429], [3000]],
                     ["muphin", "2023-01-18T23:20:00Z", [450], [2500]],
                     ["little_nightmare", "2023-04-20T00:14:00Z", [2066], [1400]],
                     ["noon", "2019-07-10T13:19:00Z", [1559], [3000]],
                     ["olmlet", "2021-08-04T02:14:00Z", [731, 86], [1839, 821]],
                     ["pet_chaos_elemental", "2019-12-04T17:08:00Z", [39], [300]],
                     ["pet_dagannoth_prime", "2020-01-06T22:17:00Z", [975], [5000]],
                     ["pet_dagannoth_rex", "2019-10-24T03:17:00Z", [796], [5000]],
                     ["pet_dagannoth_supreme", "2020-04-24T21:55:00Z", [1596], [5000]],
                     ["pet_general_graardor", "2022-04-21T00:13:00Z", [3881], [5000]],
                     ["pet_kril_tsutsaroth", "2021-08-11T22:10:00Z", [767], [5000]],
                     ["pet_kraken", "2019-04-21T21:44:00Z", [6922], [3000]],
                     ["pet_smoke_devil", "2021-04-18T23:38:00Z", [15380], [3000]],
                     ["pet_zilyana", "2021-05-05T22:42:00Z", [2892], [5000]],
                     ["phoenix", "2019-08-17T15:58:00Z", [952], [1880]],
                     ["prince_black_dragon", "2019-03-20T12:00:00Z", [798], [3000]],
                     ["smolcano", "2023-03-14T17:48:00Z", [3252], [2250]],
                     ["sraracha", "2021-03-22T23:42:00Z", [4703], [3000]],
                     ["tumekens_guardian", "2022-09-01T01:55:00Z", [88], [1360]],
                     ["tzrek_jad", "2018-04-23T21:05:00Z", [16], [67]],
                     ["vetion_jr.", "2023-05-10T00:59:00Z", [1348, 1422], [2000, 2800]],
                     ["vorki", "2019-03-28T16:35:00Z", [1287], [3000]],
                     ["youngllef", "2021-07-24T19:20:00Z", [1317], [800]],
                     ["beaver", "2018-04-28T13:17:00Z", [7090372], [22260000]],
                     ["heron", "2018-08-17T14:48:00Z", [14700000], [28270000]],
                     ["rock_golem", "2019-05-21T16:15:00Z", [13900000], [20000000]],
                     ["bloodhound", "2019-09-16T22:55:00Z", [275], [1000]],
                     ["herbi", "2023-02-11T17:01:00Z", [14323], [6500]],
                     ["lil_creator", "2021-12-23T20:50:00Z", [5928], [12000]],
                     ["sanguine_dust", "2022-05-20T02:40:13Z", [92], [275]],
                     ["metamorphic_dust", "2023-06-27T20:19:00Z", [646], [400]],
                     ["abyssal_protector", "2023-06-29T00:14:00Z", [1340], [4000]],
                     ["skotos", "2023-07-04T20:47:00Z", [135], [65]]];

  var answerKey = [
    "pet_smoke_devil",
    "callisto_cub",
    "youngllef",
    "lil_creator",
    "pet_dagannoth_supreme",
    "vetion_jr.",
    "abyssal_protector",
    "hellpuppy",
    "pet_dagannoth_rex",
    "tumekens_guardian",
    "pet_zilyana",
    "bloodhound",
    "tzrek_jad",
    "ikkle_hydra",
    "baby_mole",
    "noon",
    "metamorphic_dust",
    "pet_general_graardor",
    "rock_golem",
    "little_nightmare",
    "prince_black_dragon",
    "sraracha",
    "sanguine_dust",
    "olmlet",
    "heron",
    "pet_kraken",
    "pet_dagannoth_prime",
    "muphin",
    "abyssal_orphan",
    "vorki",
    "kalphite_princess",
    "skotos",
    "pet_chaos_elemental",
    "pet_kril_tsutsaroth",
    "beaver",
    "herbi",
    "phoenix",
    "smolcano"
  ];

  exports.allPetList = allPetList;
  exports.petDropList = petDropList;
  exports.answerKey = answerKey;

  return exports;

})({});