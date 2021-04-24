import { Component, HostBinding, Inject, OnInit } from "@angular/core";
import { OverlayContainer } from "@angular/cdk/overlay";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  @HostBinding("class") activeThemeCssClass: string;

  constructor(private overlayContainer: OverlayContainer) {}

  ngOnInit(): void {
    this.setTheme();
  }

  private setTheme(): void {
    const cssClass = `theme-is-activated-by-class-selector`;
    const classList: DOMTokenList = this.overlayContainer.getContainerElement()
      .classList;

    if (classList.contains(this.activeThemeCssClass)) {
      classList.replace(this.activeThemeCssClass, cssClass);
    } else {
      classList.add(cssClass);
    }

    this.activeThemeCssClass = cssClass;
  }
}
