<template>
  <div class="container">
    <h2 class="text-center heading">HIGHLIGHTS</h2>
    <div class="container place-container mb-5">
        <div class="card">
            <div class="row p-5 flex-wrap justify-content-center">
                <div class="col-sm-10 col-md-6 col-lg-4 col-xl-4 mb-5">
                    <div class="card">
                        <img
                            class="card-img-top p-3 card-image"
                            height="250px"
                            src="@/assets/namdroling.jpg"
                        >
                        <div class="card-body">
                            <h4 class="card-title text-center place-name">Namdroling</h4>
                        </div>
                        <div class="card-footer text-center">
                            <a data-toggle="modal" class="read-more" data-target="#modal-1">Read More</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-10 col-md-6 col-lg-4 col-xl-4 mb-5">
                    <div class="card">
                        <img
                            class="card-img-top p-3 card-image"
                            height="250px"
                            src="@/assets/brindavan_garden.jpg"
                        >
                        <div class="card-body">
                            <h4 class="card-title text-center place-name">Brindavan garden</h4>
                        </div>
                        <div class="card-footer text-center">
                            <a data-toggle="modal" class="read-more" data-target="#modal-2">Read More</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-10 col-md-6 col-lg-4 col-xl-4 mb-5">
                    <div class="card">
                        <img
                            class="card-img-top p-3 card-image"
                            height="250px"
                            src="@/assets/Mysore Zoo.jpeg"
                        >
                        <div class="card-body">
                            <h4 class="card-title text-center place-name">Mysore Zoo</h4>
                        </div>
                        <div class="card-footer text-center">
                            <a data-toggle="modal" class="read-more" data-target="#modal-3">Read More</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-10 col-md-6 col-lg-4 col-xl-4 mb-5">
                    <div class="card">
                        <img
                            class="card-img-top p-3 card-image"
                            height="250px"
                            src="@/assets/mysore-palace-city-1.jpg"
                        >
                        <div class="card-body">
                            <h4 class="card-title text-center place-name">Mysore Palace</h4>
                        </div>
                        <div class="card-footer text-center">
                            <a data-toggle="modal" class="read-more" data-target="#modal-4">Read More</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-10 col-md-6 col-lg-4 col-xl-4 mb-5">
                    <div class="card">
                        <img
                            class="card-img-top p-3 card-image"
                            height="250px"
                            src="@/assets/Mysore-Sculptures.jpg"
                        >
                        <div class="card-body">
                            <h4 class="card-title text-center place-name">Sand Sculptures</h4>
                        </div>
                        <div class="card-footer text-center">
                            <a data-toggle="modal" class="read-more" data-target="#modal-5">Read More</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-10 col-md-6 col-lg-4 col-xl-4 mb-5">
                    <div class="card">
                        <img
                            class="card-img-top p-3 card-image"
                            height="250px"
                            src="@/assets/mysuru elephants.png"
                        >
                        <div class="card-body">
                            <h4 class="card-title text-center place-name">Mysuru Elephants</h4>
                        </div>
                        <div class="card-footer text-center">
                            <a data-toggle="modal" class="read-more" data-target="#modal-6">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="modal-1" ref="vueModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="text-center pt-2 place-name">
                        Namdroling
                    </h4>
                    <button type="button" class="close closeModal" data-dismiss="modal" aria-hidden="true">X</button>
                </div>
                <div class="modal-body">
                    <div>
                        <img src="@/assets/namdroling.jpg" class="responsive">
                    </div>                    
                    <div class="p-3 place-desc">
                        <p>
                            The Namdroling Nyingmapa Monastery (or Thegchog Namdrol Shedrub Dargye Ling) 
                            is the largest teaching center of the Nyingma lineage of Tibetan Buddhism in the 
                            world. Located in Bylakuppe, part of the Mysuru district of the state of Karnataka, 
                            the monastery is home to a sangha community of over five thousand lamas (both monks 
                            and nuns), a junior high school named Yeshe Wodsal Sherab Raldri Ling, a religious 
                            college (or shedra for both monks and nuns) and hospital. 
                        </p>
                        <p>
                            The monastery was established by the 11th throneholder of the Palyul lineage, Drubwang 
                            Padma Norbu Rinpoche in 1963, following his 1959 exit from Tibet as the second seat of the 
                            Palyul Monastery, one of the six great Nyingmapa Mother monasteries of Tibet prior to 
                            annexation.
                        </p>
                        <p>
                            The monastery's full name is Thegchog Namdrol Shedrub Dargyeling, called "Namdrolling 
                            or Namdroling" for short. Its initial structure was a temple constructed from bamboo, 
                            covering an area of approximately 80 square feet (7.4 m2). It is carved into the jungle 
                            that the Indian government granted to Tibetan exiles. The initial challenges included 
                            rampaging elephants and other tropical dangers. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="modal-2" ref="vueModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="text-center pt-2 place-name">
                        Brindavan Garden
                    </h4>
                    <button type="button" class="close closeModal" data-dismiss="modal" aria-hidden="true">X</button>
                </div>
                <div class="modal-body">
                    <div>
                        <img src="@/assets/brindavan_garden.jpg" class="responsive">
                    </div>                    
                    <div class="p-3 place-desc">
                        <p>
                            indavan gardens of Mysore is one of the best terraces gardens in the world. 
                            Built in the KRS Dam complex, construction of these gardens was completed in 
                            the year of 1932. Spread over 60 acres of land, Brindavan Gardens consist of 
                            three terrace gardens which are illuminated in evenings. Its beautiful landscapes
                            , botanical park, and fountains create a breathtaking view. There is also the 
                            facility of boating here.
                        </p>
                        <p>
                            The garden is maintained by the Cauvery Niravari Nigama (Cauvery Irrigation Corporation), 
                            a Government of Karnataka enterprise.[5] It is spread across an area of 60 acres (240,000 m2).
                            Adjoining it is also a fruit orchard spread across 75 acres (300,000 m2) and 2 horticultural 
                            farms, Nagavana (30 acres) and Chandravana (5 acres). 
                        </p>
                        <p>
                            The garden is laid out in 3 terraces which contain water fountains, Ficus trees, 
                            foliage plants such as Duranta plumaria and Euphorbia and flowering plants like 
                            Celosia, Marigold and bougainvillea. The garden is open to the public and an 
                            entry-fee is charged. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="modal-3" ref="vueModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="text-center pt-2 place-name">
                        Mysore Zoo
                    </h4>
                    <button type="button" class="close closeModal" data-dismiss="modal" aria-hidden="true">X</button>
                </div>
                <div class="modal-body">
                    <div>
                        <img src="@/assets/Mysore Zoo.jpeg" class="responsive">
                    </div>                    
                    <div class="p-3 place-desc">
                        <p>
                            At a distance of only 2 km from Mysore Palace, Mysore zoo was established by 
                            Chamarajendra Wadiyar Bahadur in 1892. It used to known as Khasa Bangle'. It 
                            is one of the oldest zoos in India. A popular attraction among nature enthusiasts, 
                            this zoo has different species of animals and birds which are brought from more than 
                            40 countries. It is also known as a popular breeding center for varied endangered 
                            species from all over the world.
                        </p>
                        <p>
                            Originally called the Palace Zoo, it was renamed "Chamarajendra Zoological Gardens" in 
                            1909. Mr. A.C. Hughes, from South Wales, was the zoo's first superintendent. He served 
                            as the superintendent from 1892 to 1924. Hughes, Sir Mirza Ismail, and G.H. Krumbiegel 
                            worked towards refashioning the zoo and updating it with modern, natural enclosures. 
                            It now includes a bandstand and an artificial lake. It was given to the Department of 
                            Parks and Gardens of the Mysore State Government in 1948. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="modal-4" ref="vueModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="text-center pt-2 place-name">
                        Mysore City Palace
                    </h4>
                    <button type="button" class="close closeModal" data-dismiss="modal" aria-hidden="true">X</button>
                </div>
                <div class="modal-body">
                    <div>
                        <img src="@/assets/mysore-palace-city-1.jpg" class="responsive">
                    </div>                    
                    <div class="p-3 place-desc">
                        <p>
                            The Mysore Palace is a historical palace and the royal residence at Mysore in the 
                            Indian State of Karnataka. It is the official residence of the Wadiyar dynasty and
                            the seat of the Kingdom of Mysore. The palace is in the centre of Mysore, and faces 
                            the Chamundi Hills eastward. Mysore is commonly described as the 'City of Palaces', 
                            and there are seven palaces including this one; however, 'Mysore Palace' refers 
                            specifically to this one within the Old fort. 
                        </p>
                        <p>
                            The land on which the palace now stands was originally known as puragiri (literally, citadel), 
                            and is now known as the Old Fort. Yaduraya built the first palace inside the Old Fort in 
                            the 14th century, which was demolished and constructed multiple times. The current 
                            structure was constructed between 1897 and 1912, after the Old Palace was burnt ablaze. 
                        </p>
                        <p>
                            Mysore Palace is now one of the most famous tourist attractions in India, after the 
                            Taj Mahal, with more than 6 million annual visitors.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="modal-5" ref="vueModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="text-center pt-2 place-name">
                        Sand Sculpture Museum
                    </h4>
                    <button type="button" class="close closeModal" data-dismiss="modal" aria-hidden="true">X</button>
                </div>
                <div class="modal-body">
                    <div>
                        <img src="@/assets/Mysore-Sculptures.jpg" class="responsive">
                    </div>                    
                    <div class="p-3 place-desc">
                        <p>
                            A unique and comparatively a new addition to the list of sightseeing places in Mysore, 
                            this museum showcase a wide array of brilliantly sculpted sand creations. One of its 
                            kinds in India, Mysore sand sculpture museum, presents sculptures made just out of sand 
                            and water, depicting unparalleled craftsmanship, precision and creative excellence.
                        </p>
                        <p>
                            The museum was inaugurated in 2014, with 115 truckloads of construction sand being used 
                            to create 150 sculptures.[4] The sculptures covered up to 16 different themes, largely 
                            dealing with Mysore's cultural heritage, wildlife and religion (mainly Hinduism, Islam 
                            and Christianity). Among the subjects of the sculptures displayed at the museum were Ganesha, 
                            Mysore Dasara, Santa Claus, Christmas tree, zodiac wheel, Islamic culture, Disneyland, 
                            marine life, Laughing Buddha, Chamundeshwari, Gitopadesha and Cauvery River.
                        </p>
                        <p>
                            The monastery's full name is Thegchog Namdrol Shedrub Dargyeling, called "Namdrolling 
                            or Namdroling" for short. Its initial structure was a temple constructed from bamboo, 
                            covering an area of approximately 80 square feet (7.4 m2). It is carved into the jungle 
                            that the Indian government granted to Tibetan exiles. The initial challenges included 
                            rampaging elephants and other tropical dangers. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="modal-6" ref="vueModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="text-center pt-2 place-name">
                        Mysuru Elephants
                    </h4>
                    <button type="button" class="close closeModal" data-dismiss="modal" aria-hidden="true">X</button>
                </div>
                <div class="modal-body">
                    <div>
                        <img src="@/assets/mysuru elephants.png" class="responsive">
                    </div>                    
                    <div class="p-3 place-desc">
                        <p>
                            Elephants are an integral part of the Mysore Dasara Festival. The elephants form 
                            the core of the Mysore Dasara procession on the Vijayadashami day. The lead elephant 
                            carries the Golden Howdah (Chinnada Ambari) with the Goddess Chamundeshwari in it.
                            The Golden Howdah weighs 750 Kilograms in weight and is purely made of gold. 
                        </p>
                        <p>
                            The Elephants start arriving to Mysore city in groups. They arrive to Mysore a month 
                            or so before the start of the actual festivities and they undergo practice for their 
                            march on the final day. The elephants are accompanied by their respective keepers or
                            Mahouts. The elephants are usually brought in trucks and are occasionally walked the 
                            70-km distance from their home base in the Nagarahole National Park to Mysore. 
                        </p>
                        <p>
                            Villagers greet the sacred animals all along their designated trekking route. 
                            As each party of pachyderms arrives at the Veerana Hosahalli forest checkpost in Hunsur 
                            taluk, from the forest, they are received by the District Minister, a host of officials 
                            and prominent persons from Mysore and people from nearby villages. The villagers perform 
                            folk dances, and beat drums and sing songs to welcome the elephants. This in keeping 
                            with the royal tradition of the Mysore Maharajas. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.card {
    background-color: rgba(240,135,48,0.4);
}

.heading {
    font-size: 3.0rem !important;
    font-family: 'Langar', cursive;
    font-weight: 600;
}

.place-name {
    font-family: 'Langar', cursive;
}

.read-more {
    outline: none;
    border: none;
    font-family: 'Langar', cursive;
    font-size: 1.3rem;
}

.modal {
    z-index: 20000;
    height: 100vh !important;
}

.responsive {
  padding: 25px !important;
  width:100%;
  height: 40vh;
  object-fit: cover;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-position: center;
}

.place-desc {
    font-family: 'Langar', cursive;
    font-size: 1.3rem;
    word-spacing: 10px;
    overflow-y: scroll;
    height: 40vh;
}
</style>