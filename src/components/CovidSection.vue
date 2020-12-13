<template>
  <div class="container">
      <h2 class="text-center heading typewriter">COVID GUIDELINES WHILE TRAVEL</h2>
      <div class="card mt-5">
        <h3 class="pl-4 pt-3 subheading">District Covid War Room Helpline Number</h3>
        <div class="ml-md-2  pt-3 pb-3 contacts row">
            <div class="ml-3 m-4 m-md-0 col-xs-12 col-sm-11 col-md-5 col-lg-4 col-xl-3 contact">
                <span class="p-2"><i class="fa fa-phone p-3" aria-hidden="true"></i>0821-2957711</span>
            </div>
            <div class="col-1"></div>
            <div class="ml-3 m-4 m-md-0 col-sm-11 col-md-5 col-lg-4 col-xl-3 contact">
                <span class="p-2"><i class="fa fa-phone p-3" aria-hidden="true"></i>0821-2957811</span>
            </div>
        </div>

        <h3 class="pl-4 pt-3 subheading">COVID-19 helpline for citizens under Mysuru Metropolitan jurisdiction.</h3>
        <div class="ml-md-2 pt-3 pb-3 contacts row">
            <div class="ml-3 m-4 m-md-0 col-xs-12 col-sm-11 col-md-5 col-lg-4 col-xl-3 contact">
                <span class="p-2"><i class="fa fa-phone p-3" aria-hidden="true"></i>0821-2519531</span>
            </div>
            <div class="col-1"></div>
            <div class="ml-3 m-4 m-md-0 col-sm-11 col-md-5 col-lg-4 col-xl-3 contact">
                <span class="p-2"><i class="fa fa-phone p-3" aria-hidden="true"></i>0821-2519531</span>
            </div>
        </div>

        <h3 class="pl-4 pt-3 subheading">Quarantine Rules for International Passengers</h3>
        <ul class="pt-2">
            <li>
                All passengers have to submit a self-declaration form on the online portal of Yatri Karnataka, 
                72 hours (at least) before the travelling date.
            </li>
            <li>
                Short-term travelers, business travelers and those carrying a negative COVID test report (RT-PCR) 
                won’t need to undergo quarantine. But, if you have a test report, you need to fill a self-declaration 
                form that attests the test’s authenticity.
            </li>
            <li>
                At the time of ticket booking, passengers will be provided a list of dos and don’ts regarding testing 
                and quarantine rules, by the concerned travel agency.
            </li>
            <li>
                You need to install the Aarogya Setu app, Apthamitra app and Quarantine watch app on your mobile phone 
                by visiting 
                <a href="https://covid-19.karnataka.gov.in/new-page/softwares/en.">
                https://covid-19.karnataka.gov.in/new-page/softwares/en.
                </a>
            </li>
            <li>
                Only passengers without symptoms will be allowed to board the flight post thermal screening. 
                Physical distancing and hygiene must be maintained while boarding and de-boarding. At the 
                time of de-boarding, duplicate self-declaration forms will be collected from the passengers.  
            </li>
            <li>
                On arrival, symptomatic passengers have to visit COVID health centers to undergo tests. 
                For RAT or Rapid Antigen Test, one nasopharyngeal swab will be taken. And for RT-PCR test, 
                two swabs (throat and nasopharyngeal) will be taken. If you test positive for RAT, you will 
                be either sent to a COVID hospital or advised home isolation. If you test negative for RAT, 
                you have to take the RT-PCR test. If the result is negative, you have to undergo 14 days of 
                home quarantine. And if the result is positive, you will be sent to a COVID hospital.
            </li>
        </ul>

        <h3 class="pl-4 pt-3 subheading">Quarantine Rules for Inter-State Travel</h3>
        <p class="pl-4">
            <strong>Karnataka quarantine rules for train </strong>travel, road travel and domestic flights, if you are 
            coming from a different state, have changed too: 
        </p>
        <ul class="pt-2">
            <li>
                If you don’t have any symptoms on arrival – 
                <ol>
                    <li>
                        You need to monitor yourself for 14 days and watch out for signs like cough, cold, 
                        fever, throat soreness and breathing difficulty.
                    </li>
                    <li>
                        In case you notice symptoms, you should call Apthamitra helpline number 14410 or seek 
                        medical help.
                    </li>
                    <li>
                        If no symptoms appear, you can go about your work normally in the state, without any restrictions
                    </li>
                </ol>
            </li>
            <li>
                If you show symptoms on arrival – 
                <ol>
                    <li>
                        You should isolate yourself immediately and call Apthamitra helpline number 14410 or get 
                        medical help.
                    </li>
                    <li>
                        Follow standard precautions like maintaining physical distance of 6 feet from others and 
                        wearing mask.
                    </li>
                    <li>
                        Wash your hands with soap and water frequently, use hand sanitizer, and cover your mouth 
                        while coughing with the inside of your elbow, in public places.
                    </li>
                </ol>
            </li>
        </ul>

      </div>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.card {
    background-color: rgba(237,201,81,0.8);
}

.heading {
    font-size: 3.0rem !important;
    font-family: 'Langar', cursive;
    font-weight: 600;
}

.subheading {
    font-family: 'Patua One', cursive;
    color: red;
}

.contact {
    background-color: rgba(107,142,35,0.6);
    font-size: 1.5rem;
    text-align: center;
    border-radius: 20px;
}

.typewriter h2{
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .15em; /* Adjust as needed */
  animation: 
    typing infinite steps(40, end),
    blink-caret .75s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: orange; }
}
</style>