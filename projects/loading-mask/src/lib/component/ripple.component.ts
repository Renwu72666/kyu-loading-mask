import { Component, Input, OnInit } from '@angular/core';


@Component({
  template: `<div class='mask'><div class="lds-ripple"><div></div><div></div></div></div>`,
  styles: [`
.mask {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: #000;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  opacity: 0.4;
}
.lds-ripple {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  top: 40%;
  left: 50%;
}
.lds-ripple div {
  position: absolute;
  border: 4px solid #cef;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}
  `]
})
export class RippleComponent implements OnInit {


  constructor( ) { }

  ngOnInit() {
  }

}
