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
      "type": "Minigame", 
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
    "vetion_jr": {
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

  var petDropList = [["abyssal_orphan", "2019-03-11T12:00:00Z", [1477], [2560]],
                     ["baby_mole", "2018-12-07T12:00:00Z", [4133], [3000]],
                     ["callisto_cub", "2018-08-20T12:00:00Z", [87], [2000]],
                     ["hellpuppy", "2015-08-28T12:00:00Z", [60], [3000]],
                     ["ikkle_hydra", "2019-01-13T12:00:00Z", [770], [3000]],
                     ["jal_nib_rek", "2023-07-12T12:00:00Z", [8], [43]],
                     ["kalphite_princess", "2020-02-26T12:00:00Z", [982], [3000]],
                     ["muphin", "2023-02-23T12:00:00Z", [7207], [2500]],
                     ["lil_zik", "2018-09-08T12:00:00Z", [113], [650]],
                     ["little_nightmare", "2022-07-22T12:00:00Z", [300, 350, 1700, 2678], [800, 1600, 3200, 1400]],
                     ["nexling", "2022-01-21T12:00:00Z", [1429], [4100]],
                     ["noon", "2020-07-11T12:00:00Z", [5611], [3000]],
                     ["olmlet", "2023-07-10T12:00:00Z", [2333, 1524], [1839, 1210]],
                     ["pet_chaos_elemental", "2017-08-28T12:00:00Z", [141], [1000]],
                     ["pet_dagannoth_prime", "2015-08-25T12:00:00Z", [547], [5000]],
                     ["pet_dagannoth_rex", "2019-10-17T12:00:00Z", [8882], [5000]],
                     ["pet_dagannoth_supreme", "2018-12-28T12:00:00Z", [336], [5000]],
                     ["pet_dark_core", "2021-01-18T12:00:00Z", [2291], [5000]],
                     ["pet_general_graardor", "2020-06-22T12:00:00Z", [5805], [5000]],
                     ["pet_kril_tsutsaroth", "2018-08-18T12:00:00Z", [1128], [5000]],
                     ["pet_kraken", "2018-11-29T12:00:00Z", [2650], [3000]],
                     ["pet_kreearra", "2018-04-21T12:00:00Z", [993], [5000]],
                     ["pet_smoke_devil", "2019-02-05T12:00:00Z", [3819], [3000]],
                     ["pet_snakeling", "2016-07-18T12:00:00Z", [789], [4000]],
                     ["pet_zilyana", "2020-04-30T12:00:00Z", [1339], [5000]],
                     ["phoenix", "2016-09-14T12:00:00Z", [475], [1880]],
                     ["prince_black_dragon", "2019-01-18T12:00:00Z", [3458], [3000]],
                     ["scorpias_offspring", "2019-03-26T12:00:00Z", [6461], [2016]],
                     ["skotos", "2018-08-18T12:00:00Z", [37], [65]],
                     ["smolcano", "2019-12-17T12:00:00Z", [4966], [2250]],
                     ["sraracha", "2019-09-18T12:00:00Z", [2712], [3000]],
                     ["tiny_tempor", "2021-04-09T12:00:00Z", [5900], [8000]],
                     ["tumekens_guardian", "2022-11-30T12:00:00Z", [412, 275, 400], [1618, 732, 315]],
                     ["tzrek_jad", "2018-04-13T12:00:00Z", [33], [67]],
                     ["venenatis_spiderling", "2018-11-18T12:00:00Z", [2637], [2000]],
                     ["vetion_jr", "2019-10-08T12:00:00Z", [1007], [2000]],
                     ["vorki", "2020-03-02T12:00:00Z", [1752], [3000]],
                     ["youngllef", "2020-09-16T12:00:00Z", [86, 550], [800, 2000]],
                     ["baby_chinchompa", "2019-05-25T12:00:00Z", [24700000], [25412970]],
                     ["beaver", "2018-08-08T12:00:00Z", [18600000], [25500000]],
                     ["giant_squirrel", "2020-06-15T12:00:00Z", [19900000], [18900000]],
                     ["heron", "2018-08-09T12:00:00Z", [13200000], [27400000]],
                     ["rift_guardian", "2018-07-12T12:00:00Z", [8200000], [14430000]],
                     ["rock_golem", "2018-03-25T12:00:00Z", [7200000], [10700000]],
                     ["rocky", "2016-09-03T12:00:00Z", [1200000], [19700000]],
                     ["tangleroot", "2019-07-21T12:00:00Z", [25500000], [49000000]],
                     ["abyssal_protector", "2022-03-23T12:00:00Z", [72], [4000]],
                     ["bloodhound", "2022-08-06T12:00:00Z", [1091], [1000]],
                     ["chompy_chick", "2017-03-15T12:00:00Z", [-1], [500]],
                     ["herbi", "2017-12-22T12:00:00Z", [492], [6500]],
                     ["lil_creator", "2021-01-07T12:00:00Z", [69], [400]],
                     ["pet_penance_queen", "2021-10-18T12:00:00Z", [917], [1000]],
                     ["metamorphic_dust", "2019-03-15T12:00:00Z", [114], [400]],
                     ["sanguine_dust", "2022-05-18T12:00:00Z", [952], [275]]];

  var answerKey = [
    "tzrek_jad",
    "pet_general_graardor",
    "pet_kreearra",
    "baby_mole",
    "smolcano",
    "pet_kraken",
    "callisto_cub",
    "pet_dagannoth_rex",
    "olmlet",
    "pet_zilyana",
    "bloodhound",
    "tiny_tempor",
    "beaver",
    "baby_chinchompa",
    "sanguine_dust",
    "scorpias_offspring",
    "little_nightmare",
    "venenatis_spiderling",
    "pet_kril_tsutsaroth",
    "abyssal_protector",
    "tumekens_guardian",
    "rift_guardian",
    "heron",
    "nexling",
    "rock_golem",
    "abyssal_orphan",
    "muphin",
    "chompy_chick",
    "prince_black_dragon",
    "vorki",
    "noon",
    "pet_dagannoth_supreme",
    "phoenix",
    "herbi",
    "pet_penance_queen",
    "tangleroot",
    "pet_smoke_devil",
    "sraracha",
    "pet_snakeling",
    "jal_nib_rek",
    "lil_zik",
    "metamorphic_dust",
    "skotos",
    "pet_dark_core",
    "rocky",
    "youngllef",
    "giant_squirrel",
    "hellpuppy",
    "pet_dagannoth_prime",
    "ikkle_hydra",
    "pet_chaos_elemental",
    "vetion_jr",
    "kalphite_princess",
    "lil_creator",
  ];

  exports.allPetList = allPetList;
  exports.petDropList = petDropList;
  exports.answerKey = answerKey;

  return exports;

})({});