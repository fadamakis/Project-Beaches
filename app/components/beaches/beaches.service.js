'use strict';

/* Services */
angular.module('projectBeaches')
    .factory("Beaches", ['Beach', function (Beach) {
        var service = {};
        var beaches = [];
        

        service.getBeaches = function () {
            return beaches;
        };

        service.get = function (name) {
            var result = null;
            angular.forEach(service.getBeaches(), function (beach) {
                if (beach.id === name) {
                  result = angular.copy(beach);
                } 
            });
            return result;
        };

        service.getRandom = function () {
            var allBeaches = service.getBeaches();
            var result = allBeaches[Math.floor(Math.random() * allBeaches.length)];
            return result;
        };


        var fakeApi = function () {
   
            beaches.push(
                new Beach({
                    id: "karteros",
                    title: "Karteros",
                    rating: "3",
                    longitude: "25.195409",
                    latitude: "35.332417",
                    images: ['karteros1','karteros2','karteros3','karteros4'],
                    description: "The Bay of Karteros is located at the exit of the homonym Gorge, 7km east of Heraklion and extends to the east for 3-4km. It is named after the Byzantine General, Krateros, who in 824 AC landed on the beach with his ships in order to liberate Crete from the Saracens, but was defeated. On the vast bay, there are two settlements, Karteros and Amnissos. The area has grown so much that the two villages are now united. The main reason for the rapid development of the area is the small distance from Heraklion and the vast beach with the fine golden sand.The sandy beach, stretching along the bay, has a length of 3km and there are many hotels, restaurants and beach bars nearby. Karteros Bay is open to north winds and the water is usually wavy. The water is shallow and there are no rocks, apart from a very few places."
                }));
            beaches.push(
                new Beach({
                    id: "matala",
                    title: "Matala",
                    rating: "4",
                    longitude: "24.7547531",
                    latitude: "34.9911878",
                    images: ['matala1','matala2','matala3','matala4'],
                    description: "Matala is located 68km southwest of Heraklion, on the boundaries of the plain Messara and Asteroussia Mountains. It is one of the most popular tourist destinations of Crete and certainly the most famous beach of Heraklion. It is famous for the carved caves in the rocks and the hippies of the ‘70s. It is located close to Phaestus, the second largest palace of the Minoan civilization. Matala was the port of Phaestus, and on the Roman Times, it became a port of Gortys.Matala is located at the exit of a small valley, which forms a large enclosed bay with nice view to the islands of Paximadia.The bay is a beautiful long sandy beach, 300m long, with fine gravel and crystal clear deep water. Moreover, the seabed is quite rocky in some places and the waves, due to frequent westerly winds, are very large and amazing. Furthermore, there is a huge cave on the north part of the beach, from the top of which some crazy people splash in the water. The beach is very well organized with umbrellas, toilets, showers, lifeguard, first aids, beach volley courts, snack bars, water sports, excursion boats, etc. Around Matala you will find many options for accommodation, entertainment and eating. Also, a large part of the beach is covered by tamarisk trees, where you can find shade. In the evenings, the bars on the beach are full with many people, both locals and foreigners. Especially in June, the internationally renowned Matala Festival takes place."
                }));

         beaches.push(
                new Beach({
                    id: "agiofarago",
                    title: "Agiofarago",
                    rating: "5",
                    longitude: "24.7764029",
                    latitude: "34.9385069",
                    images: ['agiofarago2','agiofarago3','agiofarago1','agiofarago4'],
                    description: "The beach of Agiofarago is located about 80km south of Heraklion city, at the exit of the homonym Gorge of Agiofarago. To get there you must either cross the gorge, by easy hiking of about 30-50’, or catch a boat from Matala, Agia Galini, or Kali Limenes. We definitely recommend the first option, as the route within the vertical walls of the gorge is breathtaking. On the way you will see the large caves were some hermits still live and the chapel of St. Anthony, with a well outside. The beach at the exit of the gorge is stunning, with fine pebbles and clear blue waters, which are usually very calm. West of the beach a beautiful arch is formed, beneath which you can swim. Vertical cliffs surround the beach, on where you might see hermits praying. Nudism is not allowed here, like in all religious places of Crete. The beach is ideal for camping, but you must carry all your stuff in the gorge. However, you can gain some weight if you do not take water with you, but collect it from the well in front of the chapel, located just 5’ away from the beach. You could also wash yourself there (without shampoo!). Next to the well there is a trough from where goats drink water. If you have time fill it with water and many goats will come to drink, thanking you! If you have your sneakers with you, in the afternoon you should climb the cliffs on the east and reach the top. The view from there is fantastic. If you walk southeast you will meet a hidden saltish lake, called Vourvoulitis, surrounded by vertical cliffs. It is a sinkhole communicating with the open sea by underground passages. You can approach the lake, but it’s extremely dangerous. To see exactly where it is, check out the map. You will see a dark area southeast of the beach"
                }));

         beaches.push(
                new Beach({
                    id: "agia-pelagia",
                    title: "Agia pelagia",
                    rating: "1",
                    longitude: "25.0181429",
                    latitude: "35.4059561",
                    images: ['agia-pelagia1','agia-pelagia2','agia-pelagia3','agia-pelagia4'],
                    description: "Agia Pelagia (Santa Pelagia) is located 21km west of Heraklion, on the west side of a long peninsula, which has many small coves with beautiful beaches. Agia Pelagia, initially a small and picturesque village built from the residents of Achlada village, transformed into a very popular tourist resort with many hotels, restaurants, cafes, bars, internet cafés, ATMs, taxi, etc., that is connected with regular bus services to Heraklion.The main beach of the settlement is a long and narrow beach with sand and greenish waters. The Turks named the Gulf of Agia Pelagia in Tsanak Limani, because the area reminded them of a plate (tsanak = plate). Indeed, the water is almost always calm here and the bay forms a tranquil harbor. The beach offers many options for watersports, diving,umbrellas, food and accommodation. In recent years thousands of locals have fun daily in the beach bars of Agia Pelagia and choose its beach for swimming. Unfortunately, the beach is very narrow and the sunbeds have occupied almost the entire area, leaving little room to put someone's towel."
                }));


        };


        var init = function () {
            fakeApi();
        };

        init();

        return service;
    }]);

