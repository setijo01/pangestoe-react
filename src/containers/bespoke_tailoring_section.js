import React, {Component} from 'react';
import {connect} from 'react-redux';


export default class BespokeTailoringSection extends Component{
    render() {

        return (
            <div id='bespoke-tailoring-section' className='section-outer-block container-fluid d-flex flex-fill justify-content-center align-items-stretch'>
                <div className='container section-inner-block-2nth d-flex flex-column align-items-center'>
                    <div className='header-title'>
                        <div className='upper-border container'/>
                        <div className='text-align-center'>
                            <h1>Bespoke Tailoring</h1>
                        </div>
                        <div className='text-align-center'>
                            <h4>WHAT IT MEANS TO THE WAY WE CRAFT</h4>
                        </div>
                        <div className='bottom-border container'/>
                    </div>
                    <div className='text-container container'>
                        <span style={{'fontStyle': 'italic'}}>Bespoke</span> terms are widely used in sartorial world, the definition might be different from one
                        perspective to other’s. In general, our bespoke cloth means individual paper pattern will be
                        made for every client by our master craftsman, and the paper pattern will be the foundation for
                        client’s cloth. We ensure every cloth we make are specially made just for you based on your own
                        measurements & individual requirements.
                    </div>
                    <div className='text-container container'>
                        On crafting bespoke suit we will meet at least 3 times during the process, with 2-3 weeks
                        interval between each meeting (depend on availability). In general it could takes 6-9 weeks to
                        complete a bespoke suit.
                    </div>
                    <div className='text-container container'>
                        Our <span style={{'fontWeight': 600, 'fontStyle': 'bold'}}>first</span> meeting is consultation session where you will choose the fabric for your cloth,
                        then your measurements will be taken.
                    </div>
                    <div className='text-container container'>
                        On <span style={{'fontWeight': 600, 'fontStyle': 'bold'}}>second</span> meeting we will do the first fitting (baste fitting) where only the base fabric of
                        cloth will be fitted to your body, adjustment will be taken from this fitting stage to ensure the cloth fit you nicely.
                    </div>
                    <div className='text-container container'>
                        <span style={{'fontWeight': 600, 'fontStyle': 'bold'}}>Third</span> meeting will be the second fitting (forward fitting) where the cloth is almost finished.
                        The lapel & pocket could be seen at this stage. Minor adjustment also will be taken before we deliver your final cloth.
                    </div>
                </div>
            </div>
        );
    }
}