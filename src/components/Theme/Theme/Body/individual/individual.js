import React,{Component} from "react";
import { BiRocket } from "@react-icons/all-files/bi/BiRocket";
import { BiSearchAlt } from "@react-icons/all-files/bi/BiSearchAlt";
import { BiDotsHorizontalRounded } from "@react-icons/all-files/bi/BiDotsHorizontalRounded";
import { Accordion } from "react-bootstrap";
import Recharts from './Recharts';
import Chartone from './Chartone';
import { fetchMoonRever} from '../../../../../redux/actionCreator';
import { connect } from 'react-redux';
import {fetchMoonBeam} from '../../../../../redux/actionCreator';
import Collator from '../../../../elements/Collactor';
import ResponsiveCollator from "../../../../elements/ResponsiveCollator";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";


const mapStateToProps = state => {
  return {
    collators: state.collators,

  }
}


const mapDisptachToProps = dispatch => {
  return {
    fetchMoonBeam: () => dispatch(fetchMoonBeam())
  }
}


class Individual extends Component {
  constructor(props){
    super(props)
    this.state = {
      individual:'',
      blocks:[],
    }
}


  componentDidMount(){
    this.props.fetchMoonBeam();

    axios.get(`https://moonbeam.brightlystake.com/api/moonbeam/getBlockCount/${this.props.match.params.id}`)
            .then(response => response)
            .then(collators => {
              this.setState({
                individual:collators.data,
              })
            })
    axios.get(`https://moonbeam.brightlystake.com/api/moonbeam/getDailyBlockCount/${this.props.match.params.id}`)
            .then(response => response)
            .then(collators => {
              this.setState({
                blocks:collators.data,
              })
            })
}
render(){
  console.log(this.state.blocks);
    let  collators =null;
    collators = this.props.collators.map(collator => {
      return <Collator collator={collator} key={collator.id} />;
  })
  
    let  rescollators =null;
    rescollators = this.props.collators.map(collator => {
      return <ResponsiveCollator collator={collator} key={collator.id} />;
  });

    return (
      <div>
        <div id="individualBanner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h4>
                  <a href="#">0x0a0952e7d58817c40473d57a7e37f188ddb81ff9</a>
                </h4>
  
                <div className="luckyveBtn">
                  <p>'luckyve'</p>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div id="moonbeamBoxes">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-6 col-md-4">
                <div className="box">
                  <p>Total Supply</p>
                  <h6>1,007,966,870</h6>
                </div>
              </div>
              <div className="col-lg-2 col-6 col-md-4">
                <div className="box">
                  <p>Inflation</p>
                  <h6>5%</h6>
                </div>
              </div>
              <div className="col-lg-2 col-6 col-md-4">
                <div className="box">
                  <p>Collators</p>
                  <h6>53</h6>
                </div>
              </div>
              <div className="col-lg-2 col-6 col-md-4 ">
                <div className="box">
                  <p>Total Stakedt</p>
                  <h6>{this.state.individual_totalStake}</h6>
                </div>
              </div>
              <div className="col-lg-2 col-6 col-md-4">
                <div className="box">
                  <p>Approx APY</p>
                  <h6>440931%</h6>
                </div>
              </div>
              <div className="col-lg-2 col-6 col-md-4">
                <div className="box">
                  <p>Round Length</p>
                  <h6>1800 blocks</h6>
                </div>
              </div>
            </div>
            <div className="row second-line">
              <div className="col-lg-1"></div>
              <div className="col-lg-2 col-6 col-md-4">
                <div className="box">
                  <p>Minimum Stacking</p>
                  <h6>{this.state.individual_totalStake} GLMR</h6>
                </div>
              </div>
              <div className="col-lg-2 col-6 col-md-4">
                <div className="box">
                  <p>Block time</p>
                  <h6>~{this.state.individual_totalStake} sec</h6>
                </div>
              </div>
              <div className="col-lg-2 col-6 col-md-4">
                <div className="box">
                  <p>UnStake Durationt</p>
                  <h6>~ {this.state._7day}days</h6>
                </div>
              </div>
              <div className="col-lg-2 col-6 col-md-4">
                <div className="box">
                  <p>Rewards Distribution</p>
                  <h6>~ {this.state._24hrs} hrs</h6>
                </div>
              </div>
              <div className="col-lg-2 col-12 col-md-8">
                <div className="box">
                  <p>Rewards Eligibility</p>
                  <h6>Top 300 Nominators</h6>
                </div>
              </div>
              <div className="col-lg-1"></div>
            </div>
          </div>
        </div>
  
        <div id="chartPart">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
              <div className="chart-number-two">
                <Chartone blocks={this.state.blocks}/>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="chart-number-two">
                <Recharts/>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div id="moonbeamStage" className="moonriver">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2>Click on each collator address for more details</h2>
                <p>Updated every 5 minutes.</p>
                <p className="last-line">
                  Updated as of block : <span>446812</span>{" "}
                </p>
              </div>
  
              <div className="col-lg-12">
              <div className="mobile-none">
              <div className="table-head">
                <ul>
                  <li className="one">Collator</li>
                  <li className="two">Collator Address</li>
                  <li className="three">GLMR</li>
                  <li className="four">Rank</li>
                  <li className="five">Effective On</li>
                  <li className="six">Status</li>
                </ul>
              </div>
              <Accordion defaultActiveKey="0">
              {collators}
              </Accordion>
              </div>

              <div className="disk-none mobile-block">
              <Accordion defaultActiveKey="0">
                {rescollators}
              </Accordion>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default connect(mapStateToProps,mapDisptachToProps) (Individual);
