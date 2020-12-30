import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateService, TranslateStore  } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader (http: HttpClient){
return new TranslateHttpLoader(http, '../../assets/i18n/', '.json');
}

@NgModule({
    imports: [
        TranslateModule.forChild({
            loader: {
                provide: TranslateLoader, 
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            },
            isolate: true
        })
    ],
    exports:[TranslateModule],
    providers: [
        TranslateService,
        TranslateStore
      ]
})
export class TanslateSharedLazyLoadedModule { }