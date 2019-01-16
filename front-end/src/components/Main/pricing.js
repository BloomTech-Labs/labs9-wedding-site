import React, { Component } from 'react';


import Prices from './Prices';
import StickyTop from '../Navigation/topBar';

//images
import flower1 from "./images/flower1.png";
import flower2 from "./images/flower2.png";
import flower3 from "./images/flower3.png";
import flower4 from "./images/flower4.png";
import flower5 from "./images/flower5.png";



const Pricing = () => {
    return ( 
        <div>
            <StickyTop />
            <Prices />
            <div>
            <img src={flower1} alt='yellow flower' style={yellow3} />
            <img src={flower2} alt='pink flowers' style={pinks1} />
            <img src={flower4} alt='red flower' style={red1} />
            <img src={flower4} alt='red flower' style={red2} />
            <img src={flower3} alt='blue flower' style={blue} />
            <img src={flower5} alt='lavender flower' style={purple} />
            </div>
            <div>
            <img src={flower2} alt='pink flowers' style={pinks2} />
            <img src={flower3} alt='blue flower' style={blue2} />
            <img src={flower1} alt='yellow flower' style={yellow2} />
            <img src={flower5} alt='lavender flower' style={purple2} />
            <img src={flower4} alt='red flower' style={red3} />
            {/* <img src={flower1} alt='yellow flower' style={yellow1} /> */}
            </div>
        </div>
     );
}

const yellow1={
    height:80,
    display:'flex',
    flexDirection:'column',
    marginTop:10,
    position:'relative',
    left:20,
    top:360,
    zIndex:600,
    }

    const yellow2={
        height:200,
        width:200,
        display:'flex',
        flexDirection:'column',
        marginTop:10,
        position:'absolute',
        left:'2%',
        top:350,
        zIndex:600,
        }

        const yellow3={
            height:300,
            display:'flex',
            flexDirection:'column',
            marginTop:10,
            position:'absolute',
            left:'77.6%',
            top:300,
            zIndex:400,
            }

            const pinks1={
                height:600,
                width:840,
                display:'flex',
                flexDirection:'column',
                marginTop:10,
                position:'absolute',
                left:'46%',
                top:50,
                zIndex:450,
                }

                const pinks2={
                    height:600,
                    display:'flex',
                    flexDirection:'column',
                    marginTop:10,
                    position:'absolute',
                    left:'-40%',
                    top:60,
                    }
        
                    const blue={
                        height:200,
                        width:200,
                        display:'flex',
                        flexDirection:'column',
                        marginTop:10,
                        position:'absolute',
                        left:'46%',
                        top:530,
                        zIndex:690,
                        }

                        const blue2={
                            height:300,
                            width:300,
                            display:'flex',
                            flexDirection:'column',
                            marginTop:10,
                            position:'absolute',
                            left:'-10%',
                            top:305,
                            zIndex:450,
                            }
            
                            const red1={
                                height:190,
                                width:190,
                                display:'flex',
                                flexDirection:'column',
                                marginTop:10,
                                position:'absolute',
                                left:'88%',
                                top:500,
                                zIndex:600,
                                }
                
                                const red2={
                                    height:300,
                                    display:'flex',
                                    flexDirection:'column',
                                    marginTop:10,
                                    position:'absolute',
                                    left:'43.3%',
                                    top:300,
                                    zIndex:400,
                                    }
                
                                    const red3={
                                        height:190,
                                        width:190,
                                        display:'flex',
                                        flexDirection:'column',
                                        marginTop:10,
                                        position:'absolute',
                                        left:'-1%',
                                        top:550,
                                        }
                
                                        const purple={
                                            height:220,
                                            width:220,
                                            display:'flex',
                                            flexDirection:'column',
                                            marginTop:10,
                                            position:'absolute',
                                            left:'47%',
                                            top:410,
                                            zIndex:490,
                                            }

                                            const purple2={
                                                height:200,
                                                width:220,
                                                display:'flex',
                                                flexDirection:'column',
                                                marginTop:10,
                                                position:'absolute',
                                                left:100,
                                                top:460,
                                                zIndex:400,
                                            }
 
export default Pricing;