import React, { useEffect, useState } from 'react'
import './BirthdayWish.css'
import qr from './Origin.png'
import fireworks from './fireworks.mp3'
import { Howl,Howler } from 'howler'
const BirthdayWish = () => {
   
   
  return (
    <div className='ticketdiv'>
    
            <div class="ticket">
        <div class="left">
            <div class="image">
                <p class="admit-one">
                    <span>HAPPY</span>
                    <span>BIRTHDAY</span>
                    <span>DUDEEE</span>
                </p>
                <div class="ticket-number">
                    <p>
                        #20102002
                    </p>
                </div>
            </div>
            <div class="ticket-info">
                <p class="date">
                    <span>FRIDAY</span>
                    <span class="june-29">OCT 20TH</span>
                    <span>2023</span>
                </p>
                <div class="show-name">
                    <h1>MEGHNA SINGH</h1>
                    <h3>AVIATION MILESTONE</h3>
                </div>
                <div class="time">
                    <p>12:00 AM <span>TO</span> 12:00 PM</p>
                    <p>FLIGHTS <span>@</span> 21 and Still Airborne</p>
                </div>
                <p class="location"><span>26.2243° N, 84.3600° E</span>
                    <span class="separator"><i class="far fa-smile"></i></span><span>Siwan,Bihar</span>
                </p>
            </div>
        </div>
        <div class="right">
            <p class="admit-one">
                <span>HAPPY</span>
                <span>BIRTHDAY</span>
                <span>DUDEEE</span>
            </p>
            <div class="right-info-container">
               
                <div class="time">
                    <p>SINCE 2002</p>
                    <p>PRICE <span>@</span> PRICELESS</p>
                </div>
                <div class="barcode">
                    <img src={qr} alt="QR code"/>
                </div>
                <p class="ticket-number">
                    #20102002
                </p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default BirthdayWish