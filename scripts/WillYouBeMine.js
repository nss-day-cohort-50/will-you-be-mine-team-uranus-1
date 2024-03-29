import {FacilityButton, MineralButtons } from "./Facilities.js"
import { Governors } from "./Governors.js"
import { ColonyQuantities} from "./ColonyQuantities.js"
import { ChosenMinerals } from "./ChosenMinerals.js"
import {MineralDisplay } from "./FacilityMinerals.js"



export const WillYouBeMine = () => {
    return `
        <h1>Will You Be Mine</h1>

        <article class="choices">

            <section class="choices__facilities options">
                <h2>Active Facilities</h2>
                ${FacilityButton()}
                ${MineralDisplay()}
            </section>



            <section class="choices__minerals options">
                <h2>Chosen Minerals</h2>
                    ${ChosenMinerals()}
            </section>


         <article>
            <button id="orderButton">Purchase All Minerals</button>
        </article>


 

            <div class="governor-resources-container">

                 <section class="choices__governors options">
                     <h2>Governors</h2>
                    ${Governors()}
                 </section>

                <section class="choices__available-resources options">
                     <h2>Available Resources for Colony</h2>
                    ${ColonyQuantities()}
                 </section>

            </div>


        </article>
`
}

