import React from "react";

class Map extends React.Component{

    render(){

        return(
            <>
            {
                this.props.showResult &&
                <img  src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_API_KEY}&center=${this.props.lat},${this.props.lon}&zoom=<zoom>&size=<width>x<height>&format=<format>&maptype=<MapType>&markers=icon:<icon>|<latitude>,<longitude>&markers=icon:<icon>|<latitude>,<longitude>`}/>
            }
            </>
        )
    }
}

export default Map;