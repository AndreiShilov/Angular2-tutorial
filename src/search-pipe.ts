/**
 * Created by Andrei_Shilov
 */

import {Pipe} from "@angular/core";
@Pipe({
    name: 'search'
})
export class SearchPipe {
    transform(value, term) {
        return value.filter(item => item.title.endsWith(term));
    }
}