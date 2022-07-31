import React, { Component } from 'react'
import './style.css'
import '../Data/dataGlasses.json'

export default class Index extends Component {
    state={
        "id": 2,
        "price": 50,
        "name": "GUCCI G8759H",
        "url": "./glassesImage/v2.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }
  render() {
    return (
      <div className='container'>
        <div className="header ">
            <h2>TRY CLASSES APP ONLINE</h2>
        </div>
        <div className="plan">
            <div className="row">
                <div className="col">
                    <div className="item">
                        <div className="img-crele">
                            <img src='./glassesImage/model.jpg' alt="..."/>
                            <img src={this.state.url} alt='...' style={{width:'130px',opacity: '0.6'}} className='img_v'/>
                        </div>
                        <div className="info">
                            <h3>{this.state.name}</h3>
                            <p>{this.state.desc}</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="item">
                        <img src='./glassesImage/model.jpg' alt="..."/>
                    </div>
                </div>
            </div>
        </div>
        <div className="carousel">
            <div className="row">
                <div className="col">
                    <div className="item">
                        <img src='./glassesImage/g1.jpg' alt='...' onClick={()=>{
                    //thay doi hinh
                    this.setState({
                        "id": 1,
                        "price": 30,
                        "name": "GUCCI G8850U",
                        "url": "./glassesImage/v1.png",
                        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
                    })
                }}/>
                    </div>
                </div>
                <div className="col">
                    <div className="item">
                        <img src='./glassesImage/g2.jpg' alt='...'onClick={()=>{
                    //thay doi hinh
                    this.setState({                     
                        "id": 2,
                        "price": 50,
                        "name": "GUCCI G8759H",
                        "url": "./glassesImage/v2.png",
                        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
                    })
                }} />
                    </div>
                </div>
                <div className="col">
                    <div className="item">
                        <img src='./glassesImage/g3.jpg' alt='...'onClick={()=>{
                    //thay doi hinh
                    this.setState({
                        "id": 3,
                        "price": 30,
                        "name": "DIOR D6700HQ",
                        "url": "./glassesImage/v3.png",
                        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
                    })
                }} />
                    </div>
                </div>
                <div className="col">
                    <div className="item">
                        <img src='./glassesImage/g4.jpg' alt='...'onClick={()=>{
                    //thay doi hinh
                    this.setState({
                        "id": 4,
                        "price": 70,
                        "name": "DIOR D6005U",
                        "url": "./glassesImage/v4.png",
                        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
                    })
                }} />
                    </div>
                </div>
                <div className="col">
                    <div className="item">
                        <img src='./glassesImage/g5.jpg' alt='...'onClick={()=>{
                    //thay doi hinh
                    this.setState({
                        "id": 5,
                        "price": 40,
                        "name": "PRADA P8750",
                        "url": "./glassesImage/v5.png",
                        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
                    })
                }} />
                    </div>
                </div>
                <div className="col">
                    <div className="item">
                        <img src='./glassesImage/g6.jpg' alt='...' onClick={()=>{
                    //thay doi hinh
                    this.setState({                       
                        "id": 6,
                        "price": 60,
                        "name": "PRADA P9700",
                        "url": "./glassesImage/v6.png",
                        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
                    })
                }}/>
                    </div>
                </div>
                <div className="col">
                    <div className="item">
                        <img src='./glassesImage/g7.jpg' alt='...' onClick={()=>{
                    //thay doi hinh
                    this.setState({
                        "id": 7,
                        "price": 80,
                        "name": "FENDI F8750",
                        "url": "./glassesImage/v7.png",
                        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
                    })
                }}/>
                    </div>
                </div>
                <div className="col">
                    <div className="item">
                        <img src='./glassesImage/g8.jpg' alt='...'onClick={()=>{
                    //thay doi hinh
                    this.setState({
                        "id": 8,
                        "price": 100,
                        "name": "FENDI F8500",
                        "url": "./glassesImage/v8.png",
                        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
                    })
                }} />
                    </div>
                </div>
                <div className="col">
                    <div className="item">
                        <img src='./glassesImage/g9.jpg' alt='...'onClick={()=>{
                    //thay doi hinh
                    this.setState({
                        "id": 9,
                        "price": 60,
                        "name": "FENDI F4300",
                        "url": "./glassesImage/v9.png",
                        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
                    })
                }} />
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
