import { Governors } from "./Governors.js"


document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            addCustomOrder()
        }
    }
)

export const WillYouBeMine = () => {
    return `
        <h1>Will You Be Mine</h1>

        <article class="choices">

            <section class="choices__facilities options">
                <h2>Active Facilities</h2>
                // active factilities will be interpolated here. The minerals in each facility can show below
            </section>



            <section class="choices__minerals options">
                <h2>Chosen Minerals</h2>
            //    the chosen minerals will be interpolated here
            </section>


         <article>
            <button id="orderButton">Purchase All Minerals</button>
        </article>


        // I wraped the two sections below in a div so that we can use flexbox to make them side by side

            <div class="governor-resources-container">

                 <section class="choices__governors options">
                     <h2>Governors</h2>
                    ${Governors()}
                 </section>

                <section class="choices__available-resources options">
                     <h2>Available Resources for Colony</h2>
                    // available resources will be interpolated here
                 </section> */}

            </div>


        </article>
`
}

