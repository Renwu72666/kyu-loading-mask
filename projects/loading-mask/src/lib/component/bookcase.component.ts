import { Component, Input, OnInit } from '@angular/core';


@Component({
  template: `<div class='mask'><div class="lds-facebook"><div></div><div></div><div></div></div></div>`,
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

  .lds-facebook {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  top: 40%;
  left: 50%;
}
.lds-facebook div {
  display: inline-block;
  position: absolute;
  left: 8px;
  width: 16px;
  background: #cef !important;
  animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
.lds-facebook div:nth-child(1) {
  left: 8px;
  animation-delay: -0.24s;
}
.lds-facebook div:nth-child(2) {
  left: 32px;
  animation-delay: -0.12s;
}
.lds-facebook div:nth-child(3) {
  left: 56px;
  animation-delay: 0;
}
@keyframes lds-facebook {
  0% {
    top: 8px;
    height: 64px;
  }
  50%, 100% {
    top: 24px;
    height: 32px;
  }
}
  `]
})
export class BookCaseComponent implements OnInit {


  constructor( ) { }

  ngOnInit() {
  }

}
