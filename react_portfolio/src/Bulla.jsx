import Group1 from './assets/Group1.png'
import Group2 from './assets/Group2.png'
import Frontbackend from './assets/frontbackend.png'

function Bulla (){
return(
<div>
<h1 className="rubric">Radio BULLA</h1>
<div class='pinfo'> <img className="pimg" src="https://patrykb.com/wp-content/uploads/2024/01/Splash-screen-2-kopia.png" alt=" "/></div>
<div className='pinfo'> <h2 className="rubric2">About the project</h2></div>
<div className="pintro"><p>This project was a collaboration between Malmö University and Radio BULLA, which is a feminist radio show highlighting female and non-binary sound artists from Latin America. The project involved working with multiple stakeholders, including the host and founder, artists, participants and platform owners. </p></div>
<div className="pinfo"> <h2 className="rubric2">Back-end solution</h2>
    <img src={Frontbackend} alt=" "/>
<p className="pintro">Apart from crafting a front-end solution, the back-end had to be included in order to have a full product. This is why information architecture and back-end solutions were an important part of the process. This solution proposes use of AI tools to make the final product an efficient solution that automates the process and ensures easy maintenance of the platform. </p>
</div>

<div className="pinfo"> <h2 className="rubric2">Early sketches</h2>
    <img src={Group1} alt=" "/>
</div>
<div className="pinfo"> <h2 className="rubric2">Final design</h2>
    <img src={Group2} alt=" "/>
    <p className="pintro">The result was a prototype of an interactive data visualization platform, responsive to the needs of various user groups. As we wanted to keep the open spirit of the community and at the same time deliver a broad solution, it was important to create a product that isn’t restrictive. The platform instead focuses on exploring how data can be visualized and categorized in a way that does not restrict the artist to labels. </p>
</div>

</div>

)
}
export default Bulla
