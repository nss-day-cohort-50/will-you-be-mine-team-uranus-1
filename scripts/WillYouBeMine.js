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
                
            </section>

            <section class="choices__minerals options">
                <h2>Sizes</h2>
            
         </section>

         <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

            <div class="governor-resources-container">
                 <section class="choices__governors options">
                     <h2>Sizes</h2>
                    ${Governors()}
                 </section>

                 {/* <section class="choices__styles options">
                     <h2>Styles</h2>
               
                 </section> */}

            </div>


        </article>
`
}

