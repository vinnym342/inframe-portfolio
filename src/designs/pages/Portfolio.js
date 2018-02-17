import React, { Component } from 'react';
import Line from '../atoms/Line';

let images = [{
  title: 'Animals',
  folderName: 'animals',
  imageLocations: ["w400-5200893oqkzzc8.jpg",
              "w400-5200895SP3Zbma.jpg",
              "w400-5200898MZH5XyY.jpg",
              "w400-520089B2cH8Gd4.jpg",
              "w400-520089GB5uf4KD.jpg",
              "w400-520089GdxWUuaa.jpg",
              "w400-520089IjLZAYkQ.jpg",
              "w400-520089MS77bl03.jpg",
              "w400-520089UiQpOoAX.jpg",
              "w400-520089wMoS37ig.jpg",
              "w400-520089zrwZQzXz.jpg",
              ]
},
{
  title: 'Body Building',
  folderName: 'body-building',
  imageLocations: ["1.jpg","2.jpg","3.jpg","w400-5200894bUNZb93.jpg","w400-520089GTrgE8kH.jpg","w400-520089HZ29rEam.jpg","w400-520089M7l12mOb.jpg","w400-520089MTRs6oF5.jpg","w400-520089QdT0z6cB.jpg","w400-520089VKCUlaiV.jpg","w400-520089uy7XKHmy.jpg","w400-520089zCWqEpqY.jpg","w400-520089ztLRJToN.jpg"]
},{
  title: 'Sports',
  folderName: 'sports',
  imageLocations: ['w400-5200892lLTR88S.jpg', 'w400-5200893yCfyYnV.jpg', 'w400-5200896fOubUA5.jpg', 'w400-520089BdFUJwos.jpg', 'w400-520089DmIrJkkQ.jpg', 'w400-520089JyDNa9tZ.jpg', 'w400-520089LHGGan3R.jpg', 'w400-520089NKsnUD3N.jpg', 'w400-520089NsmIRuK2.jpg', 'w400-520089Q4wBDYCj.jpg', 'w400-520089TymZeBgX.jpg', 'w400-520089UooGmiXT.jpg', 'w400-520089W2XbrcJJ.jpg', 'w400-520089cL9MirTG.jpg', 'w400-520089lcbaDUUt.jpg', 'w400-520089oBoIEv8J.jpg', 'w400-520089s0PtPBmw.jpg', 'w400-520089t0CcVrrr.jpg', 'w400-520089xITfjxo6.jpg',]
},{
  title: 'Surf',
  folderName: 'surf',
  imageLocations: ['1.jpg', '2.jpg', '3.jpg', 'w400-5200891x4Rsav3.jpg', 'w400-5200894Rv3f6Ng.jpg', 'w400-5200898DvitPg1.jpg', 'w400-520089P8kSTwKq.jpg', 'w400-520089Tfbp7dlM.jpg', 'w400-520089XfdBZ9jY.jpg', 'w400-520089YPhWStFh.jpg', 'w400-520089odfkxa2c.jpg', 'w400-520089qkAhz3Tp.jpg', 'w400-520089vqm4uz5d.jpg', 'w400-520089wlKB6AVJ.jpg', 'w400-520089zWtsVYM2.jpg', 'w400-520089zzGZqMgB.jpg',]
},{
  title: 'Trail Running',
  folderName: 'trailrunning',
  imageLocations: ['w400-5200890E2I0js8.jpg', 'w400-5200891Bhk37pk.jpg', 'w400-5200893BbusBDI.jpg', 'w400-5200894CUe3gfi.jpg', 'w400-5200896Mve6VBr.jpg', 'w400-5200896OJDwrdF.jpg', 'w400-5200898ho7JpEk.jpg', 'w400-520089AHLQOidU.jpg', 'w400-520089CFlnYLRQ.jpg', 'w400-520089Cxy8DYc3.jpg', 'w400-520089EREvaRJq.jpg', 'w400-520089JSycMTkO.jpg', 'w400-520089KuyPpAqh.jpg', 'w400-520089MxBIbRFK.jpg', 'w400-520089PAv7W2Vx.jpg', 'w400-520089R2qGXPhR.jpg', 'w400-520089XMsxCuzZ.jpg', 'w400-520089YKATqeHU.jpg', 'w400-520089aoL6ScfP.jpg', 'w400-520089bCAUNLO9.jpg', 'w400-520089gZQCwwjf.jpg', 'w400-520089gy4EObgT.jpg', 'w400-520089ijQIYDp6.jpg', 'w400-520089kVyOiPqT.jpg', 'w400-520089mw2YAduB.jpg', 'w400-520089oiQRuqJ8.jpg', 'w400-520089xRVKu3wc.jpg', 'w400-520089yge6vb4b.jpg',]
}]

function generateTags(selectedIndex) {
  return images[selectedIndex]['imageLocations'].map((location) => {
    let image = require(`./../../assets/photos/Portfolio/${images[selectedIndex]['folderName']}/${location}`)
    return <img src={image} alt="image"/>
  })
}

class PortfolioPage extends Component {
  constructor(props) {
  super(props);
  this.state = {
    selected: 1
  };
}
changeSelection(index){
  this.setState({
    selected: index
  })
}
  render() {
    // const images = importAll(targetLink, false, /\.(png|jpe?g|svg)$/)
    // console.log(images)
    //const { children, color } = this.props;
    return (
      <div className="portfolio">
      <h1>Video Portfolio</h1>
      <Line/>
      <ul>
      {images.map((image,index)=> (
        <li onClick={() => this.changeSelection(index)}>{image.title}</li>
      ))}
      </ul>
      {generateTags(this.state.selected)}
      <img src="" alt="photos"/>
      </div>
    )
  }
}

export default PortfolioPage
