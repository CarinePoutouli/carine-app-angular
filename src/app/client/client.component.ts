import {Component, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {

  constructor(private renderer: Renderer2) {

  }


  ngOnInit(): void {
    this.loadScripts();
    this.loadStyles();
  }

  loadStyles() {
    const styles = [
      'client/css/bootstrap.min.css',
      'client/css/style.css',
      'client/css/responsive.css',
      'client/css/jquery.mCustomScrollbar.min.css',
    ];
    styles.forEach(style => {
      const styleElement = this.renderer.createElement('link');
      this.renderer.setAttribute(styleElement, 'href', style);
      this.renderer.setAttribute(styleElement, 'rel', 'stylesheet');
      this.renderer.setAttribute(styleElement, 'type', 'text/css');
      this.renderer.appendChild(document.head, styleElement);
    });
  }

  loadScripts() {
    const scripts = [
      'client/js/jquery.min.js',
      'client/js/popper.min.js',
      'client/js/bootstrap.bundle.min.js',
      'client/js/jquery-3.0.0.min.js',
      'client/js/plugin.js',
      'client/js/jquery.mCustomScrollbar.concat.min.js',
      'client/js/custom.js'
    ];

    scripts.forEach(script => {
      const scriptElement = this.renderer.createElement('script');
      this.renderer.setAttribute(scriptElement, 'src', script);
      this.renderer.appendChild(document.body, scriptElement);
    });
  }
}

