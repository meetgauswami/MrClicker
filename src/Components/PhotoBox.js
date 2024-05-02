import React, {Component} from 'react'
import PhotoBoxItem from './PhotoBoxItem'
import PropTypes from "prop-types"
// import { Link } from "react-router-dom";
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";


export class PhotoBox extends Component {
 
  static defaultProps = {
    searchInput: 'everything',
  }

  static propTypes = {
    searchInput: PropTypes.string,
  }




constructor() {
  super();
  this.state = {
    results: [],
    loading: true,
    page: 1,
    totalPages: 0,
    pageSize: 10,
    total:0

  }  
}


 async componentDidMount() {
  this.props.setProgress(10)
   let url = `https://api.unsplash.com/search/photos?&page=${this.state.page}&query=random&client_id=Qh8bYT354uu4iDaFdl8MgjujeDsblcybpuDamgidduU`;
  this.setState({loading: true})
   let data = await fetch(url);
  this.props.setProgress(50)
   let parseData = await data.json()
   this.setState({results: parseData.results,
                         totalPages: parseData.total_pages,
                         loading: false,
                         total: parseData.total
  })
  this.props.setProgress(100)
}

  // articles = results
  // totalResults = total_pages

state = {
  value: 'growing'
}


changeBySearch = async(event) => {
  this.props.setProgress(10)
  event.preventDefault();
  // let  inputEL = document.querySelector(".search-value")
  let  inputData = (event.target.value)
  // let value = event.target.value
  if(inputData === "") {
    inputData = "random"
  }
  this.setState({
    value: event.target.value
  })
  // console.log(inputData)

  let url = `https://api.unsplash.com/search/photos?&query=${inputData}&client_id=Qh8bYT354uu4iDaFdl8MgjujeDsblcybpuDamgidduU`;
  this.setState({loading: true})
  let data = await fetch(url);
  let parseData = await data.json()
  this.setState({results: parseData.results,
    totalPages: parseData.total_pages,
    loading: false,
    total: parseData.total
  })
  this.props.setProgress(100)

}


fetchMoreData = async () => {
  this.props.setProgress(10)
  this.setState({page: this.state.page + 1})
  if (
    !(this.state.page + 1 > Math.ceil(this.state.total / this.state.results)
    )
  ) {
    if(this.state.value === ""){
      this.setState({value: "random"})
    }

    let url = `https://api.unsplash.com/search/photos?&page=${this.state.page}&query=${this.state.value}&client_id=Qh8bYT354uu4iDaFdl8MgjujeDsblcybpuDamgidduU`;
  let data = await fetch(url);
  let parseData = await data.json()
  this.setState({results: this.state.results.concat(parseData.results),
    totalPages: parseData.total_pages,
    total: parseData.total
  })
  this.props.setProgress(100)

  
  }
};

render() {
    return (
    <>
    <div className="heading" style={{marginTop:'7pc'}}>
    <h1 className='mt-5 mb-3 text-center' style={{color: 'white'}}>Welcome To MrClicker Page</h1>
    <h4 className='text-center' style={{color: 'white'}}>Type Some Word For Image</h4>
    {this.state.value && <h3 className='text-center mb-5' style={{color: 'white'}}>Total Images: "<b>{this.state.total}</b>"</h3>}
    </div>
    <div className='container my-3 div-box'>
      <form className="d-flex" role="search" style={{justifyContent: 'center'}}>
        <input style={{width:'28rem', border: '1px solid black'}} onChange={this.changeBySearch} className="form-control me-2 search-value" placeholder="Search" aria-label="Search"/>
      </form>
        {/* {this.state.loading && <Spinner/>} */}
             {this.state.totalPages === 0 && <h1 style={{marginTop: '1rem', color: 'white'}} className='h1NotFaound text-center'>"{this.state.value}" Not Faound</h1>}
        <InfiniteScroll
          dataLength={this.state.results.length}
          next={this.fetchMoreData}
          hasMore={this.state.results.length !== this.state.total}
          loader={<Spinner />}
        >
          <div className="container">
      <div className="row">
      {!this.state.loading && this.state.results?.map((element)=> {
       return <div className="col-md-4"  key={element.urls.small} >
      <PhotoBoxItem title={element.description ? element.description : element.alt_description} 
      description={element.alt_description}
       imgUrl={element.urls.small}
        imageTabUrl={element.links.html}
         clickBy={element.user.social.twitter_username} 
         profileUrl={element.user.links.html} 
         profileImgUrl={element.user.profile_image.small} ImageDownload={element.links.download}/>
      </div>
        
      })}

        

</div>
</div>
</InfiniteScroll>
         </div>
      
         </>
  )
}
}

export default PhotoBox