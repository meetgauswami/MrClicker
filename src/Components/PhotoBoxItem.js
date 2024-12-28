import React from 'react'

export default function PhotoBoxItem(props) {
  let {title, description, imgUrl, imageTabUrl, clickBy, profileUrl, profileImgUrl, ImageDownload} = props;
  // let articles = [
  //   author: "Solcyré Burga",
  //   title: "What to Know About the Cellular Outages Happening Across the U.S.",
  //   description" `More than 70,000 customers have been impacted by outages across AT&T’s network Thursday morning, causing internet and cellular service outages.`,
  //   url: "https://time.com/6757936/att-outage-cell-service-verizon-tmobile/",
  //   urlToImage: "https://api.time.com/wp-content/uploads/2024/02/cellular-outages-us.jpg?quality=85",
  //   publishedAt: "2024-02-22T16:04:28Z",
  //   content: "More than 70,000 customers have been impacted by outages across AT&amp;Ts network Thursday morning, causing internet and cellular service outages, according to Downdetector. \r\nAbout 1 in 2 customers … [+2079 chars]"
  // ]

  let capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  } 
  // console.log(ImageDownload)
  // console.log(imgUrl)

  return (
    <div>
      <div className="card my-3">
  <img src={imgUrl} className="card-img-top" alt={title} />
  <div className="card-body">
    <h5 className="card-title">{capitalizeFirstLetter(title)}</h5>
    <p className="card-text">{description}</p>
    <p style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>Clicked By :  &nbsp;<br/> 
    <img style={{width: '25px', height:'25px', borderRadius: '50%', marginRight:'3px'}} src={profileImgUrl} alt="" />
    <a target='_blank' style={{fontSize: '15px',backgroundColor: 'grey',textDecoration: 'none', color: 'white', borderRadius: '4px',padding: '1px'}} href={profileUrl}>{clickBy} </a>
    </p>
    <a download={`${title}.jpeg`} href={ImageDownload} className="btn btn-primary">Full Screen</a>
  </div>
</div>
    </div>
  )
}
