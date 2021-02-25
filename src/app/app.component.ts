import { Component, OnInit, VERSION } from "@angular/core";
import CalHeatMap from "cal-heatmap";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "Angular " + VERSION.major;
  ngOnInit() {
    let cal =  new CalHeatMap();
    cal.init({
    });
  }
}
