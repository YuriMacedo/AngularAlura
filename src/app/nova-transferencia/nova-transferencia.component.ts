import { style } from "@angular/animations";
import { Component } from "@angular/core";

@Component({
    selector: 'nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls : ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent{
    transferir(){
        console.log("TransferĂȘncia realizada com sucesso");
    }

}