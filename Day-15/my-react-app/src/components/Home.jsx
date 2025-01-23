import React, { Component } from 'react'
import './home.css'

export default class Home extends Component {
  render() {
    return (
      <div id="carouselExampleIndicators" class="carousel slide">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
        <img src="https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" class="d-block w-100" alt="..."/>
        <div class="carousel-caption d-none d-md-block">
        <h1>Hielo</h1>
        <p>A free responsive web site template by <strong>TEMPLATED</strong></p>
      </div>
        </div>
        <div class="carousel-item">
        <img src="https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" class="d-block w-100" alt="..."/>
        <div class="carousel-caption d-none d-md-block">
        <h1>Magna</h1>
        <p>Lorem ipsum dolor sit amet nullam feugiat</p>
        </div>
        </div>
        <div class="carousel-item">
        <img src="https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" class="d-block w-100" alt="..."/>
        <div class="carousel-caption d-none d-md-block">
        <h1>Tempus</h1>
        <p>Lorem ipsum dolor sit amet nullam feugiat</p>
        </div>
        </div>
      </div>
    </div>
    )
  }
}
