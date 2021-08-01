import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faHome,
    faAngleDoubleLeft,
    faAngleDoubleRight,
    faEllipsisV,
    faBell,
    faAngleDown,
    faAngleUp,
    faTimes,
    faSearch,
    faUser,
    faCross,
    faTrashAlt,
    faEdit,
    faPhoneAlt,
    faPlayCircle,
    faDownload,
    faUpload,
    faFile,
    faInfoCircle,
    faInfo
} from '@fortawesome/free-solid-svg-icons';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FontAwesomeModule
    ],
    exports: [FontAwesomeModule]
})

export class AppFontAwesomeModule {
    constructor() {
        // Add an icon to the library for convenient access in other components
        library.add(
            faHome,
            faBell,
            faAngleDoubleLeft,
            faAngleDoubleRight,
            faEllipsisV,
            faAngleDown,
            faAngleUp,
            faTimes,
            faSearch,
            faUser,
            faCross,
            faTrashAlt,
            faEdit,
            faPhoneAlt,
            faPlayCircle,
            faDownload,
            faUpload,
            faFile,
            faInfoCircle,
            faInfo
        );
    }
}
