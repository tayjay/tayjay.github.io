// Parse the JSON data
let data = JSON.parse('{"Janitor Keycard": [{"operation": "Rough", "outputs": [{"item": "Destroyed", "probability": 100.0}]}, {"operation": "Coarse", "outputs": [{"item": "Destroyed", "probability": 100.0}]}, {"operation": "1:1", "outputs": [{"item": "Zone Manager Keycard", "probability": 100.0}]}, {"operation": "Fine", "outputs": [{"item": "Scientist Keycard", "probability": 100.0}]}, {"operation": "Very Fine", "outputs": [{"item": "Scientist Keycard", "probability": 50.0}, {"item": " Research Supervisor Keycard", "probability": 50.0}]}], "Scientist Keycard": [{"operation": "Rough", "outputs": [{"item": "Destroyed (50%) Janitor Keycard", "probability": 50.0}]}, {"operation": "Coarse", "outputs": [{"item": "Janitor Keycard", "probability": 100.0}]}, {"operation": "1:1", "outputs": [{"item": "Zone Manager Keycard", "probability": 100.0}]}, {"operation": "Fine", "outputs": [{"item": "Research Supervisor Keycard", "probability": 100.0}]}, {"operation": "Very Fine", "outputs": [{"item": "Scientist Keycard", "probability": 33.0}, {"item": " Research Supervisor Keycard", "probability": 33.0}, {"item": " Containment Engineer Keycard", "probability": 33.0}]}], "Research Supervisor Keycard": [{"operation": "Rough", "outputs": [{"item": "Janitor Keycard", "probability": 50.0}, {"item": " Scientist Keycard", "probability": 50.0}]}, {"operation": "Coarse", "outputs": [{"item": "Scientist Keycard", "probability": 100.0}]}, {"operation": "1:1", "outputs": [{"item": "Guard Keycard", "probability": 100.0}]}, {"operation": "Fine", "outputs": [{"item": "Containment Engineer Keycard", "probability": 100.0}]}, {"operation": "Very Fine", "outputs": [{"item": "Research Supervisor Keycard", "probability": 50.0}, {"item": " Containment Engineer Keycard", "probability": 50.0}]}], "Containment Engineer Keycard": [{"operation": "Rough", "outputs": [{"item": "Scientist Keycard", "probability": 50.0}, {"item": " Research Supervisor Keycard", "probability": 50.0}]}, {"operation": "Coarse", "outputs": [{"item": "Research Supervisor Keycard", "probability": 100.0}]}, {"operation": "1:1", "outputs": [{"item": "Facility Manager Keycard", "probability": 100.0}]}, {"operation": "Fine", "outputs": [{"item": "Captain Keycard", "probability": 50.0}, {"item": " O5 Keycard", "probability": 50.0}]}, {"operation": "Very Fine", "outputs": [{"item": "Destroyed", "probability": 33.0}, {"item": " O5 Keycard", "probability": 66.0}]}], "Guard Keycard": [{"operation": "Rough", "outputs": [{"item": "Janitor Keycard", "probability": 50.0}, {"item": " Scientist Keycard", "probability": 50.0}]}, {"operation": "Coarse", "outputs": [{"item": "Scientist Keycard", "probability": 100.0}]}, {"operation": "1:1", "outputs": [{"item": "Research Supervisor Keycard", "probability": 100.0}]}, {"operation": "Fine", "outputs": [{"item": "Private Keycard", "probability": 100.0}]}, {"operation": "Very Fine", "outputs": [{"item": "Guard Keycard", "probability": 33.0}, {"item": " Sergeant Keycard", "probability": 33.0}, {"item": " Captain Keycard", "probability": 33.0}]}], "Private Keycard": [{"operation": "Rough", "outputs": [{"item": "Scientist Keycard", "probability": 50.0}, {"item": " Research Supervisor Keycard", "probability": 50.0}]}, {"operation": "Coarse", "outputs": [{"item": "Research Supervisor Keycard", "probability": 100.0}]}, {"operation": "1:1", "outputs": [{"item": "Containment Engineer Keycard", "probability": 100.0}]}, {"operation": "Fine", "outputs": [{"item": "Sergeant Keycard", "probability": 100.0}]}, {"operation": "Very Fine", "outputs": [{"item": "Sergeant Keycard", "probability": 50.0}, {"item": " Captain Keycard", "probability": 50.0}]}], "Sergeant Keycard": [{"operation": "Rough", "outputs": [{"item": "Guard Keycard", "probability": 50.0}, {"item": " Private Keycard", "probability": 50.0}]}, {"operation": "Coarse", "outputs": [{"item": "Private Keycard", "probability": 100.0}]}, {"operation": "1:1", "outputs": [{"item": "Containment Engineer Keycard", "probability": 100.0}]}, {"operation": "Fine", "outputs": [{"item": "Captain Keycard", "probability": 100.0}]}, {"operation": "Very Fine", "outputs": [{"item": "Sergeant Keycard", "probability": 33.0}, {"item": " Captain Keycard", "probability": 33.0}, {"item": " O5 Keycard", "probability": 33.0}]}], "Captain Keycard": [{"operation": "Rough", "outputs": [{"item": "Guard Keycard", "probability": 50.0}, {"item": " Private Keycard", "probability": 50.0}]}, {"operation": "Coarse", "outputs": [{"item": "Sergeant Keycard", "probability": 100.0}]}, {"operation": "1:1", "outputs": [{"item": "CI Access Device", "probability": 100.0}]}, {"operation": "Fine", "outputs": [{"item": "O5 Keycard", "probability": 100.0}]}, {"operation": "Very Fine", "outputs": [{"item": "Destroyed", "probability": 25.0}, {"item": " O5 Keycard", "probability": 75.0}]}], "Zone Manager Keycard": [{"operation": "Rough", "outputs": [{"item": "Janitor Keycard", "probability": 50.0}, {"item": " Scientist Keycard", "probability": 50.0}]}, {"operation": "Coarse", "outputs": [{"item": "Scientist Keycard", "probability": 100.0}]}, {"operation": "1:1", "outputs": [{"item": "Guard Keycard", "probability": 100.0}]}, {"operation": "Fine", "outputs": [{"item": "Facility Manager Keycard", "probability": 100.0}]}, {"operation": "Very Fine", "outputs": [{"item": "Zone Manager Keycard", "probability": 40.0}, {"item": " Facility Manager Keycard", "probability": 40.0}, {"item": " CI Access Device", "probability": 20.0}]}], "Facility Manager Keycard": [{"operation": "Rough", "outputs": [{"item": "Zone Manager Keycard", "probability": 100.0}]}, {"operation": "Coarse", "outputs": [{"item": "Captain Keycard", "probability": 100.0}]}, {"operation": "1:1", "outputs": [{"item": "CI Access Device", "probability": 100.0}]}, {"operation": "Fine", "outputs": [{"item": "O5 Keycard", "probability": 100.0}]}, {"operation": "Very Fine", "outputs": [{"item": "Destroyed", "probability": 25.0}, {"item": " O5 Keycard", "probability": 75.0}]}], "CI Access Device": [{"operation": "Rough", "outputs": [{"item": "Private Keycard", "probability": 100.0}]}, {"operation": "Coarse", "outputs": [{"item": "Sergeant Keycard", "probability": 100.0}]}, {"operation": "1:1", "outputs": [{"item": "Captain Keycard", "probability": 100.0}]}, {"operation": "Fine", "outputs": [{"item": "O5 Keycard", "probability": 100.0}]}, {"operation": "Very Fine", "outputs": [{"item": "Destroyed", "probability": 25.0}, {"item": " O5 Keycard", "probability": 75.0}]}], "O5 Keycard": [{"operation": "Rough", "outputs": [{"item": "Private Keycard", "probability": 100.0}]}, {"operation": "Coarse", "outputs": [{"item": "Containment Engineer Keycard", "probability": 33.0}, {"item": " Facility Manager Keycard", "probability": 33.0}, {"item": " Captain Keycard", "probability": 33.0}]}, {"operation": "1:1", "outputs": [{"item": "O5 Keycard", "probability": 100.0}]}, {"operation": "Fine", "outputs": [{"item": "Destroyed", "probability": 50.0}, {"item": " O5 Keycard", "probability": 50.0}]}, {"operation": "Very Fine", "outputs": [{"item": "Destroyed", "probability": 75.0}, {"item": " O5 Keycard", "probability": 25.0}]}], "COM-15": [{"operation": "Rough", "outputs": [{"item": "Destroyed", "probability": 50.0}, {"item": " 9x19mm", "probability": 50.0}]}, {"operation": "Coarse", "outputs": [{"item": "Randomized Attachments", "probability": 50.0}, {"item": " 9x19mm", "probability": 50.0}]}, {"operation": "1:1", "outputs": [{"item": "Randomized Attachments", "probability": 100.0}]}, {"operation": "Fine", "outputs": [{"item": "COM-18", "probability": 100.0}]}, {"operation": "Very Fine", "outputs": [{"item": "FSP-9", "probability": 55.5}, {"item": " Revolver", "probability": 29.5}, {"item": " COM-45", "probability": 15.0}]}], "COM-18": [{"operation": "Rough", "outputs": [{"item": "9x19mm (50%) (15 rounds) 9x19mm", "probability": 50.0}]}, {"operation": "Coarse", "outputs": [{"item": "COM-15", "probability": 100.0}]}, {"operation": "1:1", "outputs": [{"item": "Randomized Attachments", "probability": 100.0}]}, {"operation": "Fine", "outputs": [{"item": "FSP-9", "probability": 100.0}]}, {"operation": "Very Fine", "outputs": [{"item": "Crossvec", "probability": 55.0}, {"item": " Revolver", "probability": 45.0}]}], "Crossvec": [{"operation": "Rough", "outputs": [{"item": "Destroyed", "probability": 50.0}, {"item": " 9x19mm", "probability": 50.0}]}, {"operation": "Coarse", "outputs": [{"item": "FSP-9", "probability": 100.0}]}, {"operation": "1:1", "outputs": [{"item": "Randomized Attachments", "probability": 100.0}]}, {"operation": "Fine", "outputs": [{"item": "MTF-E11-SR", "probability": 60.0}, {"item": " AK", "probability": 40.0}]}, {"operation": "Very Fine", "outputs": [{"item": "MTF-E11-SR", "probability": 70.0}, {"item": " Shotgun", "probability": 30.0}]}], "FSP-9": [{"operation": "Rough", "outputs": [{"item": "Destroyed", "probability": 50.0}, {"item": " 9x19mm", "probability": 50.0}]}, {"operation": "Coarse", "outputs": [{"item": "COM-18", "probability": 50.0}, {"item": " 9x19mm", "probability": 50.0}]}, {"operation": "1:1", "outputs": [{"item": "Randomized Attachments", "probability": 100.0}]}, {"operation": "Fine", "outputs": [{"item": "Crossvec", "probability": 100.0}]}, {"operation": "Very Fine", "outputs": [{"item": "Crossvec", "probability": 70.0}, {"item": " MTF-E11-SR", "probability": 30.0}]}], "MTF-E11-SR": [{"operation": "Rough", "outputs": [{"item": "COM-15", "probability": 50.0}, {"item": " 5.56x45mm", "probability": 50.0}]}, {"operation": "Coarse", "outputs": [{"item": "Crossvec", "probability": 100.0}]}, {"operation": "1:1", "outputs": [{"item": "Randomized Attachments", "probability": 100.0}]}, {"operation": "Fine", "outputs": [{"item": "AK", "probability": 100.0}]}, {"operation": "Very Fine", "outputs": [{"item": "AK", "probability": 30.0}, {"item": " Crossvec", "probability": 30.0}, {"item": " Logicer", "probability": 25.0}, {"item": " Shotgun", "probability": 10.0}, {"item": " Micro H.I.D.", "probability": 5.0}]}], "AK": [{"operation": "Rough", "outputs": [{"item": "COM-15", "probability": 50.0}, {"item": " 7.62x39mm", "probability": 50.0}]}, {"operation": "Coarse", "outputs": [{"item": "Crossvec", "probability": 100.0}]}, {"operation": "1:1", "outputs": [{"item": "Randomized Attachments", "probability": 100.0}]}, {"operation": "Fine", "outputs": [{"item": "MTF-E11-SR", "probability": 100.0}]}, {"operation": "Very Fine", "outputs": [{"item": "Crossvec", "probability": 30.0}, {"item": " MTF-E11-SR", "probability": 30.0}, {"item": " Logicer", "probability": 25.0}, {"item": " Shotgun", "probability": 10.0}, {"item": " Micro H.I.D.", "probability": 5.0}]}], "Logicer": [{"operation": "Rough", "outputs": [{"item": "AK", "probability": 50.0}, {"item": " 7.62x39mm", "probability": 50.0}]}, {"operation": "Coarse", "outputs": [{"item": "AK", "probability": 100.0}]}, {"operation": "1:1", "outputs": [{"item": "Randomized Attachments", "probability": 100.0}]}, {"operation": "Fine", "outputs": [{"item": "Shotgun", "probability": 100.0}]}, {"operation": "Very Fine", "outputs": [{"item": "Multiple Items", "probability": 60.0}, {"item": "Multiple Items", "probability": 30.0}, {"item": " Micro H.I.D.", "probability": 10.0}]}], "Revolver": [{"operation": "Rough", "outputs": [{"item": "Destroyed", "probability": 50.0}, {"item": " .44 Mag", "probability": 50.0}]}, {"operation": "Coarse", "outputs": [{"item": "COM-18", "probability": 80.0}, {"item": " High-Explosive Grenade", "probability": 20.0}]}, {"operation": "1:1", "outputs": [{"item": "Randomized Attachments", "probability": 100.0}]}, {"operation": "Fine", "outputs": [{"item": "Crossvec", "probability": 100.0}]}, {"operation": "Very Fine", "outputs": [{"item": "Multiple Items", "probability": 50.0}, {"item": " High-Explosive Grenade", "probability": 50.0}]}], "Shotgun": [{"operation": "Rough", "outputs": [{"item": "AK", "probability": 50.0}, {"item": " 12/70 Buckshot", "probability": 50.0}]}, {"operation": "Coarse", "outputs": [{"item": "AK", "probability": 100.0}]}, {"operation": "1:1", "outputs": [{"item": "Randomized Attachments", "probability": 100.0}]}, {"operation": "Fine", "outputs": [{"item": "Logicer", "probability": 100.0}]}, {"operation": "Very Fine", "outputs": [{"item": "AK", "probability": 40.0}, {"item": " Crossvec", "probability": 30.0}, {"item": " Logicer", "probability": 25.0}, {"item": " Micro H.I.D.", "probability": 5.0}]}], "High-Explosive Grenade": [{"operation": "Rough", "outputs": [{"item": "Destroyed", "probability": 100.0}]}, {"operation": "Coarse", "outputs": [{"item": "Flashbang Grenade", "probability": 100.0}]}, {"operation": "1:1", "outputs": [{"item": "Flashbang Grenade", "probability": 100.0}]}, {"operation": "Fine", "outputs": [{"item": "High-Explosive Grenade", "probability": 100.0}]}, {"operation": "Very Fine", "outputs": [{"item": "Destroyed", "probability": 50.0}, {"item": " High-Explosive Grenade", "probability": 25.0}, {"item": " SCP-018", "probability": 25.0}]}], "Flashbang Grenade": [{"operation": "Rough", "outputs": [{"item": "Destroyed", "probability": 100.0}]}, {"operation": "Coarse", "outputs": [{"item": "Flashlight", "probability": 100.0}]}, {"operation": "1:1", "outputs": [{"item": "High-Explosive Grenade", "probability": 100.0}]}, {"operation": "Fine", "outputs": [{"item": "High-Explosive Grenade", "probability": 100.0}]}, {"operation": "Very Fine", "outputs": [{"item": "Destroyed", "probability": 75.0}, {"item": " SCP-207", "probability": 25.0}]}], "3-X Particle Disruptor": [{"operation": "Rough", "outputs": [{"item": "Flashlight", "probability": 100.0}]}, {"operation": "Coarse", "outputs": [{"item": "MTF-E11-SR", "probability": 100.0}]}, {"operation": "1:1", "outputs": [{"item": "Jailbird", "probability": 100.0}]}, {"operation": "Fine", "outputs": [{"item": "3-X Particle Disruptor (Refueled)", "probability": 100.0}]}, {"operation": "Very Fine", "outputs": [{"item": "Micro H.I.D.", "probability": 100.0}]}], "COM-45": [{"operation": "Rough", "outputs": [{"item": "Destroyed", "probability": 50.0}, {"item": " 9x19mm", "probability": 50.0}]}, {"operation": "Coarse", "outputs": [{"item": "9x19mm (50%) (15 rounds) COM-15", "probability": 50.0}]}, {"operation": "1:1", "outputs": [{"item": "COM-45", "probability": 100.0}]}, {"operation": "Fine", "outputs": [{"item": "Crossvec", "probability": 100.0}]}, {"operation": "Very Fine", "outputs": [{"item": "Revolver", "probability": 100.0}]}], "Jailbird": [{"operation": "Rough", "outputs": [{"item": "Flashlight", "probability": 100.0}]}, {"operation": "Coarse", "outputs": [{"item": "Jailbird (Heavily damaged)1", "probability": 100.0}]}, {"operation": "1:1", "outputs": [{"item": "3-X Particle Disruptor", "probability": 100.0}]}, {"operation": "Fine", "outputs": [{"item": "Jailbird (Refueled)", "probability": 100.0}]}, {"operation": "Very Fine", "outputs": [{"item": "Micro H.I.D.", "probability": 100.0}]}], "Micro H.I.D.": [{"operation": "Rough", "outputs": [{"item": "MTF-E11-SR", "probability": 100.0}]}, {"operation": "Coarse", "outputs": [{"item": "3-X Particle Disruptor", "probability": 50.0}, {"item": " Jailbird", "probability": 50.0}]}, {"operation": "1:1", "outputs": [{"item": "Micro H.I.D. (Refueled)", "probability": 100.0}]}, {"operation": "Fine", "outputs": [{"item": "Micro H.I.D. (Refueled)", "probability": 100.0}]}, {"operation": "Very Fine", "outputs": [{"item": "Micro H.I.D. (Refueled)", "probability": 100.0}]}], "Adrenaline": [{"operation": "Rough", "outputs": [{"item": "Destroyed", "probability": 50.0}, {"item": " Painkillers", "probability": 50.0}]}, {"operation": "Coarse", "outputs": [{"item": "First Aid Kit", "probability": 50.0}, {"item": " Painkillers", "probability": 50.0}]}, {"operation": "1:1", "outputs": [{"item": "Painkillers", "probability": 100.0}]}, {"operation": "Fine", "outputs": [{"item": "SCP-500", "probability": 100.0}]}, {"operation": "Very Fine", "outputs": [{"item": "Destroyed", "probability": 70.0}, {"item": " SCP-1853", "probability": 30.0}]}], "First Aid Kit": [{"operation": "Rough", "outputs": [{"item": "Destroyed", "probability": 100.0}]}, {"operation": "Coarse", "outputs": [{"item": "Painkillers", "probability": 100.0}]}, {"operation": "1:1", "outputs": [{"item": "First Aid Kit", "probability": 100.0}]}, {"operation": "Fine", "outputs": [{"item": "Adrenaline", "probability": 100.0}]}, {"operation": "Very Fine", "outputs": [{"item": "Destroyed", "probability": 33.0}, {"item": " First Aid Kit", "probability": 33.0}, {"item": " SCP-500", "probability": 33.0}]}], "Painkillers": [{"operation": "Rough", "outputs": [{"item": "Destroyed", "probability": 100.0}]}, {"operation": "Coarse", "outputs": [{"item": "Destroyed", "probability": 50.0}, {"item": " Painkillers", "probability": 50.0}]}, {"operation": "1:1", "outputs": [{"item": "Painkillers", "probability": 100.0}]}, {"operation": "Fine", "outputs": [{"item": "First Aid Kit", "probability": 100.0}]}, {"operation": "Very Fine", "outputs": [{"item": "Adrenaline", "probability": 50.0}, {"item": " First Aid Kit", "probability": 50.0}]}], "SCP-018": [{"operation": "Rough", "outputs": [{"item": "Flashbang Grenade", "probability": 100.0}]}, {"operation": "Coarse", "outputs": [{"item": "Flashbang Grenade", "probability": 100.0}]}, {"operation": "1:1", "outputs": [{"item": "SCP-018", "probability": 100.0}]}, {"operation": "Fine", "outputs": [{"item": "High-Explosive Grenade", "probability": 100.0}]}, {"operation": "Very Fine", "outputs": [{"item": "Coin", "probability": 100.0}]}], "SCP-207": [{"operation": "Rough", "outputs": [{"item": "Painkillers", "probability": 100.0}]}, {"operation": "Coarse", "outputs": [{"item": "Adrenaline", "probability": 100.0}]}, {"operation": "1:1", "outputs": [{"item": "SCP-207?", "probability": 100.0}]}, {"operation": "Fine", "outputs": [{"item": "SCP-1853", "probability": 100.0}]}, {"operation": "Very Fine", "outputs": [{"item": "Destroyed", "probability": 100.0}]}], "SCP-207?": [{"operation": "Rough", "outputs": [{"item": "Painkillers", "probability": 100.0}]}, {"operation": "Coarse", "outputs": [{"item": "Adrenaline", "probability": 100.0}]}, {"operation": "1:1", "outputs": [{"item": "SCP-207", "probability": 100.0}]}, {"operation": "Fine", "outputs": [{"item": "SCP-1853", "probability": 100.0}]}, {"operation": "Very Fine", "outputs": [{"item": "Destroyed", "probability": 100.0}]}], "SCP-244-A": [{"operation": "Rough", "outputs": [{"item": "Destroyed", "probability": 100.0}]}, {"operation": "Coarse", "outputs": [{"item": "Coin", "probability": 100.0}]}, {"operation": "1:1", "outputs": [{"item": "SCP-244-B", "probability": 100.0}]}, {"operation": "Fine", "outputs": [{"item": "SCP-244-A", "probability": 100.0}]}, {"operation": "Very Fine", "outputs": [{"item": "SCP-244-A", "probability": 100.0}]}], "SCP-244-B": [{"operation": "Rough", "outputs": [{"item": "Destroyed", "probability": 100.0}]}, {"operation": "Coarse", "outputs": [{"item": "Coin", "probability": 100.0}]}, {"operation": "1:1", "outputs": [{"item": "SCP-244-A", "probability": 100.0}]}, {"operation": "Fine", "outputs": [{"item": "SCP-244-B", "probability": 100.0}]}, {"operation": "Very Fine", "outputs": [{"item": "SCP-244-B", "probability": 100.0}]}], "SCP-268": [{"operation": "Rough", "outputs": [{"item": "Destroyed", "probability": 100.0}]}, {"operation": "Coarse", "outputs": [{"item": "SCP-268", "probability": 100.0}]}, {"operation": "1:1", "outputs": [{"item": "SCP-268", "probability": 100.0}]}, {"operation": "Fine", "outputs": [{"item": "SCP-268", "probability": 100.0}]}, {"operation": "Very Fine", "outputs": [{"item": "SCP-268", "probability": 100.0}]}], "SCP-500": [{"operation": "Rough", "outputs": [{"item": "First Aid Kit", "probability": 50.0}, {"item": " Painkillers", "probability": 50.0}]}, {"operation": "Coarse", "outputs": [{"item": "Adrenaline", "probability": 100.0}]}, {"operation": "1:1", "outputs": [{"item": "SCP-500", "probability": 100.0}]}, {"operation": "Fine", "outputs": [{"item": "Destroyed", "probability": 50.0}, {"item": " SCP-500", "probability": 50.0}]}, {"operation": "Very Fine", "outputs": [{"item": "Destroyed", "probability": 100.0}]}], "SCP-1576": [{"operation": "Rough", "outputs": [{"item": "Radio", "probability": 100.0}]}, {"operation": "Coarse", "outputs": [{"item": "SCP-2176", "probability": 100.0}]}, {"operation": "1:1", "outputs": [{"item": "SCP-1576", "probability": 100.0}]}, {"operation": "Fine", "outputs": [{"item": "Destroyed", "probability": 100.0}]}, {"operation": "Very Fine", "outputs": [{"item": "Destroyed", "probability": 100.0}]}], "SCP-1853": [{"operation": "Rough", "outputs": [{"item": "Painkillers", "probability": 100.0}]}, {"operation": "Coarse", "outputs": [{"item": "Adrenaline", "probability": 100.0}]}, {"operation": "1:1", "outputs": [{"item": "SCP-1853", "probability": 100.0}]}, {"operation": "Fine", "outputs": [{"item": "SCP-207", "probability": 100.0}]}, {"operation": "Very Fine", "outputs": [{"item": "Destroyed", "probability": 50.0}, {"item": " SCP-500", "probability": 50.0}]}], "SCP-2176": [{"operation": "Rough", "outputs": [{"item": "Activates", "probability": 100.0}]}, {"operation": "Coarse", "outputs": [{"item": "Flashbang Grenade", "probability": 100.0}]}, {"operation": "1:1", "outputs": [{"item": "Coin (x12)", "probability": 100.0}]}, {"operation": "Fine", "outputs": [{"item": "COM-18", "probability": 100.0}]}, {"operation": "Very Fine", "outputs": [{"item": "Flashlight", "probability": 80.0}, {"item": " MTF-E11-SR", "probability": 20.0}]}], "Light Armor": [{"operation": "Rough", "outputs": [{"item": "Destroyed", "probability": 50.0}, {"item": " Radio", "probability": 50.0}]}, {"operation": "Coarse", "outputs": [{"item": "Flashlight", "probability": 100.0}]}, {"operation": "1:1", "outputs": [{"item": "Light Armor", "probability": 100.0}]}, {"operation": "Fine", "outputs": [{"item": "Combat Armor", "probability": 100.0}]}, {"operation": "Very Fine", "outputs": [{"item": "Combat Armor", "probability": 50.0}, {"item": " Heavy Armor", "probability": 50.0}]}], "Combat Armor": [{"operation": "Rough", "outputs": [{"item": "Light Armor", "probability": 50.0}, {"item": " Flashlight", "probability": 50.0}]}, {"operation": "Coarse", "outputs": [{"item": "Light Armor", "probability": 100.0}]}, {"operation": "1:1", "outputs": [{"item": "Combat Armor", "probability": 100.0}]}, {"operation": "Fine", "outputs": [{"item": "Heavy Armor", "probability": 100.0}]}, {"operation": "Very Fine", "outputs": [{"item": "Heavy Armor", "probability": 100.0}]}], "Heavy Armor": [{"operation": "Rough", "outputs": [{"item": "Light Armor", "probability": 50.0}, {"item": " Combat Armor", "probability": 50.0}]}, {"operation": "Coarse", "outputs": [{"item": "Combat Armor", "probability": 100.0}]}, {"operation": "1:1", "outputs": [{"item": "Heavy Armor", "probability": 100.0}]}, {"operation": "Fine", "outputs": [{"item": "Coin", "probability": 100.0}]}, {"operation": "Very Fine", "outputs": [{"item": "Coin", "probability": 100.0}]}], "Coin": [{"operation": "Rough", "outputs": [{"item": "Destroyed", "probability": 100.0}]}, {"operation": "Coarse", "outputs": [{"item": "Coin", "probability": 100.0}]}, {"operation": "1:1", "outputs": [{"item": "Coin", "probability": 100.0}]}, {"operation": "Fine", "outputs": [{"item": "Coin", "probability": 100.0}]}, {"operation": "Very Fine", "outputs": [{"item": "Coin", "probability": 100.0}]}], "Flashlight": [{"operation": "Rough", "outputs": [{"item": "Destroyed", "probability": 100.0}]}, {"operation": "Coarse", "outputs": [{"item": "Destroyed", "probability": 50.0}, {"item": " Flashlight", "probability": 50.0}]}, {"operation": "1:1", "outputs": [{"item": "Flashlight", "probability": 100.0}]}, {"operation": "Fine", "outputs": [{"item": "Radio", "probability": 100.0}]}, {"operation": "Very Fine", "outputs": [{"item": "Flashbang Grenade", "probability": 90.0}, {"item": " SCP-2176", "probability": 10.0}]}], "Radio": [{"operation": "Rough", "outputs": [{"item": "Destroyed", "probability": 100.0}]}, {"operation": "Coarse", "outputs": [{"item": "Destroyed", "probability": 100.0}]}, {"operation": "1:1", "outputs": [{"item": "Radio ((Recharged))", "probability": 100.0}]}, {"operation": "Fine", "outputs": [{"item": "Radio ((Recharged))", "probability": 100.0}]}, {"operation": "Very Fine", "outputs": [{"item": "Flashlight", "probability": 75.0}, {"item": " SCP-1576", "probability": 25.0}]}]}');

// Populate the "input" dropdown
let inputDropdown = document.getElementById('input');
for (let input in data) {
    let option = document.createElement('option');
    option.value = input;
    option.text = input;
    inputDropdown.add(option);
}

// Add event listener to the "Submit" button
document.getElementById('submit').addEventListener('click', () => {
    // Get the selected input and operation
    let input = document.getElementById('input').value;
    let operation = document.getElementById('operation').value;

    // Get the output for the selected input and operation
    let outputs = data[input].find(op => op.operation === operation).outputs;

    // Display the output
    document.getElementById('output').innerHTML = JSON.stringify(outputs);
});
