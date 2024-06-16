import {Component, OnInit, Renderer2} from '@angular/core';
import {CarService} from "../Service/car/car.service";

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrl: './administration.component.css'
})
export class AdministrationComponent implements OnInit {


  constructor(
    private renderer: Renderer2,
  ) {
  }

  ngOnInit(): void {
    this.loadScripts();
    this.loadStyles();
  }

  loadStyles() {
    const styles = [
      "admin/vendor/bootstrap/css/bootstrap.min.css",
      "admin/vendor/bootstrap-icons/bootstrap-icons.css",
      "admin/vendor/boxicons/css/boxicons.min.css",
      "admin/vendor/quill/quill.snow.css",
      "admin/vendor/quill/quill.bubble.css",
      "admin/vendor/remixicon/remixicon.css",
      "admin/vendor/simple-datatables/style.css",
      "admin/css/style.css",
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
      "admin/vendor/apexcharts/apexcharts.min.js",
        "admin/vendor/bootstrap/js/bootstrap.bundle.min.js",
        "admin/vendor/chart.js/chart.umd.js",
        "admin/vendor/echarts/echarts.min.js",
        "admin/vendor/quill/quill.min.js",
        "admin/vendor/simple-datatables/simple-datatables.js",
        "admin/vendor/tinymce/tinymce.min.js",
        "admin/vendor/php-email-form/validate.js",
        "admin/js/main.js",
    ];

    scripts.forEach(script => {
      const scriptElement = this.renderer.createElement('script');
      this.renderer.setAttribute(scriptElement, 'src', script);
      this.renderer.appendChild(document.body, scriptElement);
    });
  }
}
