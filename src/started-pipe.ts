/**
 * Created by Andrei_Shilov
 */

import {Pipe} from "@angular/core";
@Pipe({
    name: 'started'
})
export class StartedPipe {
    transform(value, status) {
        return value.filter(item => item.status === status);
    }
}