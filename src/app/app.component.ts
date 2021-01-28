import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-root",
  template: `
    <div>
      <h2>{{ "HOME.TITLE" | translate }}</h2>
      <p>
        {{ "PROFILE.DESCRIPTION" | translate }}
      </p>
      <label>
        {{ "HOME.SELECT" | translate }}
        <select #langSelect (change)="translate.use(langSelect.value)">
          <option
            *ngFor="let lang of translate.getLangs()"
            [value]="lang"
            [selected]="lang === translate.currentLang"
            >{{ lang }}</option
          >
        </select>
      </label>
    </div>
  `
})
export class AppComponent {
  constructor(public translate: TranslateService) {
    translate.addLangs(["en", "fr", "ph"]);
    translate.setDefaultLang("en");

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr|ph/) ? browserLang : "en");
  }
}
